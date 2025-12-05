## Project overview

This repository contains a full-stack Todo application with a Django REST API (backend) and a React frontend. The frontend is developed with React Router and Axios; the backend uses Django REST Framework. The two projects live inside the same root folder but run independently during development.

**Quick facts**

- React dev server: `http://localhost:5173`
- Django dev server: `http://127.0.0.1:8000`
- API base: `/api/` (default `http://127.0.0.1:8000/api/`)

---

## Folder structure (important parts)

```
root/
  backend/        # Django project (manage.py here)
    requirements.txt   # pip requirements (see below)
  frontend/       # React app (package.json here)
  src/            # React source (inside frontend)
    components/
      EditForm/
        editForm.jsx
        editForm.module.css
      Header/
        header.jsx
        header.module.css
      TodoForm/
        todoForm.jsx
        todoForm.module.css
      TodoItem/
        todoItem.jsx
        todoItem.module.css
      TodoList/
        todoList.jsx
        todoList.module.css
    pages/
      EditPage.jsx
      ListPage.jsx
      AddPage.jsx
      NotFound.jsx
    Api/
      api.js
    App.jsx
    App.css
```

## Local setup

### Backend

1. Install Python dependencies:

```bash
pip install -r backend/requirements.txt
```

2. Create (or apply) DB migrations and run the server:

```bash
cd backend
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```

3. Confirm the API works: open `http://127.0.0.1:8000/api/todos/` in your browser or Postman.

### Frontend

1. Install dependencies and start dev server:

```bash
cd frontend
npm install
npm run dev
```

2. Open `http://localhost:5173/`.

---

## Backend requirements (`backend/requirements.txt`)

```
Django==5.2.8
Djangorestframework==3.16.1
django-cors-headers==4.9.0
```

## Environment variables

Create a `.env` in `backend/` and set values such as:

```
SECRET_KEY=your_secret_key
```
Create a `.env.local` in `frontend/` and set values such as:
```
VITE_API_URL = "http://localhost:8000/api"
```

## CORS & Auth notes

- For development with separate servers, enable CORS in `settings.py`:

```py
INSTALLED_APPS = [
...
"corsheaders",
]

MIDDLEWARE = [
"corsheaders.middleware.CorsMiddleware",
...
]

CORS_ALLOW_ALL_ORIGINS = True
```

## How the data flows (short)

- `App.jsx` fetches the todos once and stores them in `todos` state.
- `App` passes `todos` and handler functions (`onAdd`, `onToggle`, `onDelete`, `onUpdate`) down to `pages` and `components`.
- `TodoList` maps `todos` and renders multiple `TodoItem` components.
- `EditPage` uses `useParams()` to get the ID and pre-fills `TodoEditForm` from `todos`.

---

## Quick commands

```
# backend
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# frontend
cd frontend
npm install
npm run dev
```
## Troubleshooting

**Error: `todos.map is not a function`**
- Ensure backend is running on `http://127.0.0.1:8000`
- Run `npm install` in `frontend/` folder
- Create `frontend/.env.local` with `VITE_API_URL=http://127.0.0.1:8000`
- Clear cache: `rm -r node_modules && npm install`

**Check both servers are running:**
```bash
# Terminal 1: Backend
cd backend && python manage.py runserver

# Terminal 2: Frontend  
cd frontend && npm run dev
```
---
