from ninja import Router, File
from ninja.files import UploadedFile
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.utils import timezone
from typing import List
import cloudinary.uploader
from datetime import datetime, timedelta
import json
import jwt
from django.conf import settings
from ninja.errors import HttpError

from .models import (
    PageContent, Event, BlogPost, BlogImage, FAQ, 
    GalleryItem, ContactInfo, ContactMessage
)
from .schemas import (
    PageContentIn, PageContentOut, EventIn, EventOut,
    BlogPostIn, BlogPostOut, BlogImageIn, BlogImageOut,
    FAQIn, FAQOut, GalleryItemIn, GalleryItemOut,
    ContactInfoIn, ContactInfoOut, ContactMessageIn, ContactMessageOut,
    LoginIn, LoginOut
)

router = Router()


# Authentication Helper Functions
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


def generate_jwt_token(user):
    """Generate JWT token for user"""
    payload = {
        'user_id': user.id,
        'username': user.username,
        'is_staff': user.is_staff,
        'exp': datetime.utcnow() + timedelta(days=7),
        'iat': datetime.utcnow()
    }
    secret_key = getattr(settings, 'SECRET_KEY', 'django-insecure-change-this-in-production')
    token = jwt.encode(payload, secret_key, algorithm='HS256')
    return token


@router.post("/auth/login", response={200: LoginOut, 401: dict})
def login(request, payload: LoginIn):
    user = authenticate(username=payload.username, password=payload.password)
    if not user or not user.is_staff:
        raise HttpError(401, "Invalid credentials or insufficient permissions")

    token = generate_jwt_token(user)
    return {
        "token": token,
        "user_id": user.id,
        "username": user.username,
        "is_staff": user.is_staff
    }

# PageContent Endpoints
@router.get("/page-content", response=List[PageContentOut])
def list_page_content(request, page: str = None, section: str = None):
    queryset = PageContent.objects.all()
    if page:
        queryset = queryset.filter(page=page)
    if section:
        queryset = queryset.filter(section=section)
    return list(queryset)


@router.get("/page-content/{content_id}", response=PageContentOut)
def get_page_content(request, content_id: int):
    return get_object_or_404(PageContent, id=content_id)


@router.post("/page-content", response=PageContentOut)
def create_page_content(request, payload: PageContentIn):
    # Check authentication
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    content = PageContent.objects.create(**payload.dict())
    return content


@router.put("/page-content/{content_id}", response=PageContentOut)
def update_page_content(request, content_id: int, payload: PageContentIn):
    # Check authentication
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    content = get_object_or_404(PageContent, id=content_id)
    for attr, value in payload.dict().items():
        setattr(content, attr, value)
    content.save()
    return content


@router.delete("/page-content/{content_id}")
def delete_page_content(request, content_id: int):
    # Check authentication
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    content = get_object_or_404(PageContent, id=content_id)
    content.delete()
    return {"success": True}


# Event Endpoints
@router.get("/events", response=List[EventOut])
def list_events(request, active_only: bool = True):
    queryset = Event.objects.all()
    if active_only:
        queryset = queryset.filter(is_active=True)
    return list(queryset)


@router.get("/events/{event_id}", response=EventOut)
def get_event(request, event_id: int):
    return get_object_or_404(Event, id=event_id)


@router.post("/events", response={201: EventOut, 401: dict})
def create_event(request, payload: EventIn):
    user = get_user_from_token(request)
    if not user:
        raise HttpError(401, "Authentication required")
    
    event = Event.objects.create(**payload.dict())
    return 201, event


@router.put("/events/{event_id}", response=EventOut)
def update_event(request, event_id: int, payload: EventIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    event = get_object_or_404(Event, id=event_id)
    for attr, value in payload.dict().items():
        setattr(event, attr, value)
    event.save()
    return event


@router.delete("/events/{event_id}")
def delete_event(request, event_id: int):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    event = get_object_or_404(Event, id=event_id)
    event.delete()
    return {"success": True}


@router.post("/events/{event_id}/upload-image")
def upload_event_image(request, event_id: int, file: UploadedFile = File(...)):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    event = get_object_or_404(Event, id=event_id)
    result = cloudinary.uploader.upload(file.read(), resource_type="image")
    # CloudinaryField can accept public_id or full URL
    event.image = result.get('public_id') or result['secure_url']
    event.save()
    return {"image_url": result['secure_url'], "public_id": result.get('public_id')}


# Blog Endpoints
@router.get("/blogs", response=List[BlogPostOut])
def list_blogs(request, published_only: bool = False):
    queryset = BlogPost.objects.all()
    if published_only:
        queryset = queryset.filter(published=True)
    blogs = list(queryset)
    for blog in blogs:
        blog.images = list(BlogImage.objects.filter(blog_post_id=blog.id))
        if blog.author:
            blog.author = blog.author.username
    return blogs


@router.get("/blogs/{blog_id}", response=BlogPostOut)
def get_blog(request, blog_id: int):
    blog = get_object_or_404(BlogPost, id=blog_id)
    blog.images = list(BlogImage.objects.filter(blog_post_id=blog.id))
    if blog.author:
        blog.author = blog.author.username
    return blog


@router.post("/blogs", response=BlogPostOut)
def create_blog(request, payload: BlogPostIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    blog_data = payload.dict()
    blog_data['author'] = user
    if blog_data.get('published'):
        blog_data['published_at'] = timezone.now()
    blog = BlogPost.objects.create(**blog_data)
    blog.images = []
    blog.author = blog.author.username
    return blog


@router.put("/blogs/{blog_id}", response=BlogPostOut)
def update_blog(request, blog_id: int, payload: BlogPostIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    blog = get_object_or_404(BlogPost, id=blog_id)
    blog_data = payload.dict()
    if 'published' in blog_data and blog_data['published'] and not blog.published:
        blog_data['published_at'] = timezone.now()
    for attr, value in blog_data.items():
        if attr != 'author':
            setattr(blog, attr, value)
    blog.save()
    blog.images = list(BlogImage.objects.filter(blog_post_id=blog.id))
    if blog.author:
        blog.author = blog.author.username
    return blog


@router.delete("/blogs/{blog_id}")
def delete_blog(request, blog_id: int):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    blog = get_object_or_404(BlogPost, id=blog_id)
    blog.delete()
    return {"success": True}


@router.post("/blogs/{blog_id}/upload-image")
def upload_blog_image(request, blog_id: int, file: UploadedFile = File(...)):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    blog = get_object_or_404(BlogPost, id=blog_id)
    result = cloudinary.uploader.upload(file.read(), resource_type="image")
    # CloudinaryField can accept public_id or full URL
    blog.image = result.get('public_id') or result['secure_url']
    blog.save()
    return {"image_url": result['secure_url'], "public_id": result.get('public_id')}


@router.post("/blogs/{blog_post_id}/images", response=BlogImageOut)
def add_blog_image(request, blog_post_id: int, file: UploadedFile = File(...), alt_text: str = None, order: int = 0):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    blog = get_object_or_404(BlogPost, id=blog_post_id)
    result = cloudinary.uploader.upload(file.read(), resource_type="image")
    # CloudinaryField can accept public_id or full URL
    image = BlogImage.objects.create(
        blog_post=blog,
        image=result.get('public_id') or result['secure_url'],
        alt_text=alt_text or "",
        order=order
    )
    return image


@router.delete("/blogs/images/{image_id}")
def delete_blog_image(request, image_id: int):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    image = get_object_or_404(BlogImage, id=image_id)
    image.delete()
    return {"success": True}


# FAQ Endpoints
@router.get("/faqs", response=List[FAQOut])
def list_faqs(request, active_only: bool = True):
    queryset = FAQ.objects.all()
    if active_only:
        queryset = queryset.filter(is_active=True)
    return list(queryset)


@router.get("/faqs/{faq_id}", response=FAQOut)
def get_faq(request, faq_id: int):
    return get_object_or_404(FAQ, id=faq_id)


@router.post("/faqs", response=FAQOut)
def create_faq(request, payload: FAQIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    faq = FAQ.objects.create(**payload.dict())
    return faq


@router.put("/faqs/{faq_id}", response=FAQOut)
def update_faq(request, faq_id: int, payload: FAQIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    faq = get_object_or_404(FAQ, id=faq_id)
    for attr, value in payload.dict().items():
        setattr(faq, attr, value)
    faq.save()
    return faq


@router.delete("/faqs/{faq_id}")
def delete_faq(request, faq_id: int):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    faq = get_object_or_404(FAQ, id=faq_id)
    faq.delete()
    return {"success": True}


# Gallery Endpoints
@router.get("/gallery", response=List[GalleryItemOut])
def list_gallery(request, active_only: bool = True):
    queryset = GalleryItem.objects.all()
    if active_only:
        queryset = queryset.filter(is_active=True)
    return list(queryset)


@router.get("/gallery/{item_id}", response=GalleryItemOut)
def get_gallery_item(request, item_id: int):
    return get_object_or_404(GalleryItem, id=item_id)


@router.post("/gallery", response=GalleryItemOut)
def create_gallery_item(request, payload: GalleryItemIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    item = GalleryItem.objects.create(**payload.dict())
    return item


@router.put("/gallery/{item_id}", response=GalleryItemOut)
def update_gallery_item(request, item_id: int, payload: GalleryItemIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    item = get_object_or_404(GalleryItem, id=item_id)
    for attr, value in payload.dict().items():
        setattr(item, attr, value)
    item.save()
    return item


@router.delete("/gallery/{item_id}")
def delete_gallery_item(request, item_id: int):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    item = get_object_or_404(GalleryItem, id=item_id)
    item.delete()
    return {"success": True}


@router.post("/gallery/{item_id}/upload-image")
def upload_gallery_image(request, item_id: int, file: UploadedFile = File(...)):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    item = get_object_or_404(GalleryItem, id=item_id)
    result = cloudinary.uploader.upload(file.read(), resource_type="image")
    # CloudinaryField can accept public_id or full URL
    item.image = result.get('public_id') or result['secure_url']
    item.save()
    return {"image_url": result['secure_url'], "public_id": result.get('public_id')}


# Image upload endpoint for page content
@router.post("/page-content/{content_id}/upload-image")
def upload_page_content_image(request, content_id: int, file: UploadedFile = File(...), alt_text: str = None):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    content = get_object_or_404(PageContent, id=content_id)
    result = cloudinary.uploader.upload(file.read(), resource_type="image")
    content.image_url = result['secure_url']
    if alt_text:
        content.image_alt = alt_text
    content.save()
    return {"image_url": result['secure_url'], "alt_text": content.image_alt}


# Generic image upload endpoint
@router.post("/upload-image")
def upload_image(request, file: UploadedFile = File(...)):
    """Generic endpoint to upload any image to Cloudinary"""
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    result = cloudinary.uploader.upload(file.read(), resource_type="image")
    return {"image_url": result['secure_url'], "public_id": result.get('public_id')}


# Contact Endpoints
@router.get("/contact-info", response=ContactInfoOut)
def get_contact_info(request):
    info = ContactInfo.objects.filter(is_active=True).first()
    if not info:
        return {"error": "No active contact info"}, 404
    return info


@router.post("/contact-info", response=ContactInfoOut)
def create_contact_info(request, payload: ContactInfoIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    # Deactivate existing
    ContactInfo.objects.filter(is_active=True).update(is_active=False)
    info = ContactInfo.objects.create(**payload.dict())
    return info


@router.put("/contact-info/{info_id}", response=ContactInfoOut)
def update_contact_info(request, info_id: int, payload: ContactInfoIn):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    info = get_object_or_404(ContactInfo, id=info_id)
    for attr, value in payload.dict().items():
        setattr(info, attr, value)
    info.save()
    return info


@router.post("/contact-messages", response=ContactMessageOut)
def create_contact_message(request, payload: ContactMessageIn):
    message = ContactMessage.objects.create(**payload.dict())
    return message


@router.get("/contact-messages", response=List[ContactMessageOut])
def list_contact_messages(request):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    return list(ContactMessage.objects.all())


@router.get("/contact-messages/{message_id}", response=ContactMessageOut)
def get_contact_message(request, message_id: int):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    return get_object_or_404(ContactMessage, id=message_id)


@router.put("/contact-messages/{message_id}/mark-read")
def mark_message_read(request, message_id: int):
    user = get_user_from_token(request)
    if not user:
        return {"error": "Authentication required"}, 401
    
    message = get_object_or_404(ContactMessage, id=message_id)
    message.is_read = True
    message.save()
    return {"success": True}

