# Django Todo App

## Overview
This is a simple Todo application built with Django and Django REST Framework (DRF). It provides a RESTful API for managing Todo tasks, alongside a Django admin interface for internal management.

## Features
- Full CRUD operations for Todo tasks
- Todo model fields: `title`, `description`, `completed`, timestamps
- RESTful API endpoints auto-generated via `ModelViewSet` and DRF router
- Admin interface for managing tasks manually
- Easily integrable with frontend apps

## Tech Stack
- Python 3.13.7
- Django 5.2.8 
- Django REST Framework  

## Project Structure
todo_project/
│
├─ todo_app/
│ ├─ models.py
│ ├─ serializers.py
| ├─ admins.py
│ ├─ views.py
│ ├─ urls.py
├─ todo_project/
│ ├─ settings.py
│ └─ urls.py
├─ manage.py


## Setup Instructions
1. Clone the repository
   ```bash
   git clone https://github.com/Headyhadia/Todo-App
   cd todo_project
2. Apply migrations
  ```bash
  python manage.py migrate
```
3. Create a superuser
   ```bash
   python manage.py createsuperuser

4: Run the development server
  ```bash
  python manage.py runserver
```
5: Access the API: http://127.0.0.1:8000/api/todos/
Access admin interface: http://127.0.0.1:8000/admin/
