from django.shortcuts import render

# Create your views here.
def home(request):
	return render(request,"home/index.html",{})

def anim(request):
	return render(request,"home/animation.html",{})