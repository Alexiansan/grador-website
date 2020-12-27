import requests

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def homePageView(request):
    response = requests.get('https://api.mcsrvstat.us/2/51.68.244.62:25627')
    server = response.json()
    if server['online']:
        server['status'] = 'En ligne'
        server['color'] = '#6c9814'
    else:
        server['status'] = 'Maintenance'
        server['color'] = 'red'
    return render(request, 'home.html', {'server' : server})

def shopPageView(request):
    return render(request, 'shop.html', {})

def aproposPageView(request):
    return render(request, 'a-propos.html', {})
