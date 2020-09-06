from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Messages(models.Model):
    message = models.TextField(null=True)
    userprofile = models.ForeignKey(User,on_delete=models.CASCADE,related_name="mainUser")
    sentBy = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="sent")
    method = models.TextField(null=True,blank=True)
    recivedBy = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="recived")
    attachment = models.FileField(null=True,blank=True)
    addedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message
        