@echo off
echo Starting Men's Clothing Store Application...

:: Start Backend
echo Starting Django Backend...
start "Django Backend" cmd /k "cd backend && python manage.py runserver"

:: Start Frontend
echo Starting React Frontend...
start "React Frontend" cmd /k "cd frontend && npm run dev"

echo Application started!
echo Backend: http://127.0.0.1:8000
echo Frontend: http://localhost:5173
