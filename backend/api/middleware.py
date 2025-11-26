from django.http import JsonResponse
from django.conf import settings
import jwt
from django.contrib.auth.models import User


def get_user_from_token(request):
    """Extract user from JWT token in Authorization header"""
    auth_header = request.headers.get('Authorization', '')
    if not auth_header.startswith('Bearer '):
        return None
    
    token = auth_header.split(' ')[1]
    try:
        secret_key = getattr(settings, 'SECRET_KEY', 'django-insecure-change-this-in-production')
        payload = jwt.decode(token, secret_key, algorithms=['HS256'])
        user_id = payload.get('user_id')
        if user_id:
            try:
                user = User.objects.get(id=user_id, is_active=True, is_staff=True)
                return user
            except User.DoesNotExist:
                return None
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None
    return None


def auth_required(func):
    """Decorator to require authentication for API endpoints"""
    def wrapper(request, *args, **kwargs):
        # Skip auth for login endpoint
        if request.path.endswith('/auth/login') or request.method == 'OPTIONS':
            return func(request, *args, **kwargs)
        
        user = get_user_from_token(request)
        if not user:
            return JsonResponse({"error": "Authentication required"}, status=401)
        
        request.user = user
        return func(request, *args, **kwargs)
    return wrapper

