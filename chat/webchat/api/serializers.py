from rest_framework import serializers
from webchat.models import Chat


class ChatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chat
        fields = ['pk','messages']
