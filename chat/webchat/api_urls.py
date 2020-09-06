from django.urls import path, include
from webchat.api.viewsets import *

urlpatterns = [
    path('messages/', SendMessageAPIView.as_view()),
    path('getmsgs/',GetMessagesAPIView.as_view()),
    path('user/', UserAPIView.as_view()),
    
]
