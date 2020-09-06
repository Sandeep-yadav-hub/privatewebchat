from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from webchat.models import Messages,User
from .serializers import MessageSerializer,UserSerializer
from rest_framework.parsers import JSONParser, ParseError


import base64
class SendMessageAPIView(APIView):
    def get(self,request):
        user=request.user
        message = Messages.objects.filter(sentBy=user)
        serializers = MessageSerializer(message,many=True).data
        return Response(serializers,status=200)

    def post(self,request):
        # data = request.data
        data = request.data
        user = request.user
        # print(data, '--------->>>>>>>')
        if request.method == 'POST':
            sentBy = User.objects.get(
                pk=int(data['sentBy']))
            receivedBy = User.objects.get(
                pk=int(data['recivedBy']))
            serializer = MessageSerializer(data=data)
            # print(serializer)
            messageObj = Messages.objects.create(userprofile=user,
                sentBy=sentBy, method=data['method'], recivedBy=receivedBy, message=data['message'], attachment=data['attachment'])
            toSend = MessageSerializer(messageObj).data
            
            return Response(toSend,status=200)
        return Response({'error':data},status=404)




class GetMessagesAPIView(APIView):
    

    def get(self,request):
        user = request.user
        toSend={}
        
        if user:
            
            try:
                msgs = Messages.objects.filter(userprofile=user)
                # print (msgs)
                toSend['msgs'] = MessageSerializer(msgs,many=True).data
                # print(toSend['msgs'])
                return Response(toSend,status=200)
            except Messages.DoesNotExist:
                return Response({'err': 'no msg found'}, status=200)
        return Response({'err': 'user not Found'}, status=200)



class UserAPIView(APIView):
    def get(self, request):
        user = request.user
        if user:
            userObj = User.objects.exclude(username=user.username)
            serializers = UserSerializer(userObj, many=True).data
            userSerializer = UserSerializer(user,many=False).data
            return Response({"data": serializers, 'requestedUser': userSerializer}, status=200)
        return Response({'error':'please log in'})
