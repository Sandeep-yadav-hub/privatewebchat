from django.shortcuts import render

# Create your views here.
def index(request):
    user = request.user
    return render(request,'reciver.html',{'user':user})