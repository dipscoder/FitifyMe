from django.urls import path,include
from . import views

urlpatterns = [
path('', views.home, name='home'),
path('todoList/',views.todoList,name='todoList'),
path('calories/',views.calories,name='calories'),
path('bmiTracker/',views.bmiTracker,name='bmiTracker'),

path('login/', views.loginPage, name='login'),
path('register/', views.register, name='register'),
path('logout/',views.logutUser,name="logout"),


]

