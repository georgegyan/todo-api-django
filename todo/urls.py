from django.urls import path
from .views import TaskListCreate, TaskRetrieveUpdateDestroy

urlpatterns = [
    path('tasks/', TaskListCreate.as_view()),
    path('tasks/<int:pk>/', TaskRetrieveUpdateDestroy.as_view()),
]