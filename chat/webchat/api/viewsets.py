from rest_framework import viewsets
from webchat.models import Chat
from .serializers import ChatSerializer


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


