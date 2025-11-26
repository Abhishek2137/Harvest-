from django.contrib import admin
from .models import (
    PageContent, Event, BlogPost, BlogImage, FAQ,
    GalleryItem, ContactInfo, ContactMessage
)


@admin.register(PageContent)
class PageContentAdmin(admin.ModelAdmin):
    list_display = ['page', 'section', 'field_name', 'is_active', 'order', 'updated_at']
    list_filter = ['page', 'section', 'is_active']
    search_fields = ['page', 'section', 'field_name', 'text_content']
    ordering = ['page', 'section', 'order']


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'location', 'is_featured', 'is_active', 'created_at']
    list_filter = ['is_featured', 'is_active', 'date']
    search_fields = ['title', 'description', 'location']
    date_hierarchy = 'date'


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author', 'published', 'created_at']
    list_filter = ['published', 'category', 'created_at']
    search_fields = ['title', 'excerpt', 'content']
    date_hierarchy = 'created_at'


@admin.register(BlogImage)
class BlogImageAdmin(admin.ModelAdmin):
    list_display = ['blog_post', 'order', 'created_at']
    list_filter = ['blog_post', 'created_at']
    ordering = ['blog_post', 'order']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'order', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['question', 'answer']
    ordering = ['order', 'created_at']


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'is_active', 'created_at']
    list_filter = ['category', 'is_featured', 'is_active', 'created_at']
    search_fields = ['title', 'description']


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ['email', 'phone', 'is_active', 'updated_at']
    list_filter = ['is_active']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_read', 'created_at']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject', 'message']
    readonly_fields = ['created_at']
    date_hierarchy = 'created_at'

