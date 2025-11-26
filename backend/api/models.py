from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


class PageContent(models.Model):
    """Model to store dynamic content for different pages and sections"""
    PAGE_CHOICES = [
        ('home', 'Home'),
        ('about', 'About'),
        ('services', 'Services'),
        ('contact', 'Contact'),
        ('donate', 'Donate'),
        ('events', 'Events'),
        ('volunteer', 'Volunteer'),
        ('gallery', 'Gallery'),
        ('blog', 'Blog'),
        ('faq', 'FAQ'),
    ]
    
    SECTION_CHOICES = [
        ('hero', 'Hero Section'),
        ('features', 'Features'),
        ('cta', 'Call to Action'),
        ('testimonial', 'Testimonial'),
        ('footer', 'Footer'),
        ('navbar', 'Navbar'),
        ('contact_info', 'Contact Information'),
        ('about_content', 'About Content'),
        ('services_content', 'Services Content'),
    ]
    
    page = models.CharField(max_length=50, choices=PAGE_CHOICES)
    section = models.CharField(max_length=50, choices=SECTION_CHOICES)
    field_name = models.CharField(max_length=100, help_text="e.g., heading1, content1, action1")
    text_content = models.TextField(blank=True, null=True)
    image_url = models.URLField(blank=True, null=True, help_text="Cloudinary URL")
    image_alt = models.CharField(max_length=200, blank=True, null=True)
    order = models.IntegerField(default=0, help_text="Display order")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ['page', 'section', 'field_name']
        ordering = ['page', 'section', 'order']
    
    def __str__(self):
        return f"{self.page} - {self.section} - {self.field_name}"


class Event(models.Model):
    """Model for events"""
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=200)
    image = CloudinaryField('image', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-date', '-created_at']
    
    def __str__(self):
        return self.title


class BlogPost(models.Model):
    """Model for blog posts"""
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    content = models.TextField(blank=True, null=True)
    image = CloudinaryField('image', blank=True, null=True)
    category = models.CharField(max_length=50, default='General')
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    published = models.BooleanField(default=False)
    published_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class BlogImage(models.Model):
    """Model for additional images in blog posts"""
    blog_post = models.ForeignKey(BlogPost, related_name='images', on_delete=models.CASCADE)
    image = CloudinaryField('image')
    alt_text = models.CharField(max_length=200, blank=True, null=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', 'created_at']
    
    def __str__(self):
        return f"{self.blog_post.title} - Image {self.order}"


class FAQ(models.Model):
    """Model for Frequently Asked Questions"""
    question = models.CharField(max_length=500)
    answer = models.TextField()
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'created_at']
    
    def __str__(self):
        return self.question


class GalleryItem(models.Model):
    """Model for gallery items"""
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    image = CloudinaryField('image')
    category = models.CharField(max_length=50, default='General')
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class ContactInfo(models.Model):
    """Model for contact information"""
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    facebook_url = models.URLField(blank=True, null=True)
    instagram_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = "Contact Information"
    
    def __str__(self):
        return f"Contact Info - {self.email}"


class ContactMessage(models.Model):
    """Model for contact form submissions"""
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.subject}"

