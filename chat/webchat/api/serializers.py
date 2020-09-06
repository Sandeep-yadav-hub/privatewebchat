from rest_framework import serializers
from webchat.models import Messages,User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk',"username"]


class MessageSerializer(serializers.ModelSerializer):
    userprofile = UserSerializer(many=False)
    sentBy = UserSerializer(many=False)
    recivedBy = UserSerializer(many=False)
    class Meta:
        model = Messages
        fields = ['pk', 'userprofile', 'sentBy', 'method',
                  'message', 'recivedBy', 'attachment', 'addedAt']

   



