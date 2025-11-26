from ninja import Schema
from typing import Optional, List
from datetime import datetime


# PageContent Schemas
class PageContentIn(Schema):
    page: str
    section: str
    field_name: str
    text_content: Optional[str] = None
    image_url: Optional[str] = None
    image_alt: Optional[str] = None
    order: int = 0
    is_active: bool = True


class PageContentOut(Schema):
    id: int
    page: str
    section: str
    field_name: str
    text_content: Optional[str] = None
    image_url: Optional[str] = None
    image_alt: Optional[str] = None
    order: int
    is_active: bool
    created_at: datetime
    updated_at: datetime


# Event Schemas
class EventIn(Schema):
    title: str
    description: str
    date: str
    location: str
    is_featured: bool = False
    is_active: bool = True


from datetime import date

class EventOut(Schema):
    id: int
    title: str
    description: str
    date: date   # <-- FIX HERE
    location: str
    image: Optional[str] = None
    is_featured: bool
    is_active: bool
    created_at: datetime
    updated_at: datetime


# Blog Schemas
class BlogImageOut(Schema):
    id: int
    image: str
    alt_text: Optional[str] = None
    order: int


class BlogPostIn(Schema):
    title: str
    excerpt: str
    content: Optional[str] = None
    category: str = "General"
    published: bool = False


class BlogPostOut(Schema):
    id: int
    title: str
    excerpt: str
    content: Optional[str] = None
    image: Optional[str] = None
    category: str
    author: Optional[str] = None
    published: bool
    published_at: Optional[datetime] = None
    created_at: datetime
    updated_at: datetime
    images: List[BlogImageOut] = []


class BlogImageIn(Schema):
    blog_post_id: int
    alt_text: Optional[str] = None
    order: int = 0


# FAQ Schemas
class FAQIn(Schema):
    question: str
    answer: str
    order: int = 0
    is_active: bool = True


class FAQOut(Schema):
    id: int
    question: str
    answer: str
    order: int
    is_active: bool
    created_at: datetime
    updated_at: datetime


# Gallery Schemas
class GalleryItemIn(Schema):
    title: str
    description: Optional[str] = None
    category: str = "General"
    is_featured: bool = False
    is_active: bool = True


class GalleryItemOut(Schema):
    id: int
    title: str
    description: Optional[str] = None
    image: Optional[str] = None
    category: str
    is_featured: bool
    is_active: bool
    created_at: datetime
    updated_at: datetime


# Contact Schemas
class ContactInfoIn(Schema):
    email: str
    phone: str
    address: str
    facebook_url: Optional[str] = None
    instagram_url: Optional[str] = None
    twitter_url: Optional[str] = None
    is_active: bool = True


class ContactInfoOut(Schema):
    id: int
    email: str
    phone: str
    address: str
    facebook_url: Optional[str] = None
    instagram_url: Optional[str] = None
    twitter_url: Optional[str] = None
    is_active: bool
    created_at: datetime
    updated_at: datetime


class ContactMessageIn(Schema):
    name: str
    email: str
    subject: str
    message: str


class ContactMessageOut(Schema):
    id: int
    name: str
    email: str
    subject: str
    message: str
    is_read: bool
    created_at: datetime


# Auth Schemas
class LoginIn(Schema):
    username: str
    password: str


class LoginOut(Schema):
    token: str
    user_id: int
    username: str
    is_staff: bool

