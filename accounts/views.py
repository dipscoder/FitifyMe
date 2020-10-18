from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
# Create your views here.


def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request,username=username,password=password)

            if user is not None:
                login(request,user)
                return redirect('home')

            else:
                messages.info(request,'Username or password is incorrect!!')
        context = {}
        return render(request,'login.html',context)


def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()

                return redirect('login')

        context = {'form':form}
        return render(request, 'register.html', context)

def logutUser(request):
    logout(request)
    return redirect('home')


def home(request):
    return render(request,'home.html')

@login_required(login_url='login')
def todoList(request):
    return render(request,'todo.html')

@login_required(login_url='login')
def calories(request):
    return render(request,'calories.html')

@login_required(login_url='login')
def bmiTracker(request):
    return render(request,'bmiTracker.html')

