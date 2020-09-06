var connection = new autobahn.Connection({
    transports: [
        {
            'type': 'websocket',
            'url': 'wss://ws.epsilonai.com/ws',
        },
        {
            'type': 'longpoll',
            'url': 'https://ws.epsilonai.com/lp',
        }
    ],
    // url: wampServer,
    realm: 'default'
});











app.directive("ngFileSelect", function () {

    return {
        link: function ($scope, el) {

            el.bind("change", function (e) {

                $scope.file = (e.srcElement || e.target).files[0];
                $scope.getFile();
            })

        }

    }


})





app.factory('chatHttpService',['$http',function($http){
    return{
        saveMultiPartFormData: function (data, callback) {
            var request = $http({
                method: 'POST',
                url: 'api/messages/',
                data: data,
                transformRequest: angular.identity,
                header: {
                    'Content-Type': undefined
                }

            })
            request.then(function (response) {
                callback(response)
            })
        }
    }
}])


app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])


app.controller("handle", ['$scope','$http','$rootScope','fileReader','chatHttpService',function ($scope, $http, $rootScope, fileReader,chatHttpService) {
    

    $scope.$on("fileProgress", function (e, progress) {
        $scope.progress = progress.loaded / progress.total;
    });
    $scope.msgs = [];
    $scope.sendingTo = ""




    function handlemsg(args) {
        var recived = {
            'method': 'recived',
            "sentBy": args[0]['sentBy'],
            "message": args[0]['message'],
            "recivedBy": args[0]['recivedBy'],
            'attachment': args[0]['attachment']
        }
        $scope.recivedmsg = recived
        console.log(recived,'-----....')
        
        

        $scope.$apply();
        $http.post('/api/messages/', JSON.stringify(recived)).then(function (response) {
            $scope.msgs.push(response.data)
        })
    }
    $scope.add = function (name) {
        $scope.name = "";
        connection.open()
        connection.onopen = function (session) {
            session.subscribe(name, handlemsg).then(
                function (sub) {
                    console.log("subscribe to topic 'supportChatResponse' " + name);
                },
                function (err) {
                    console.log("failed to subscribe: " + err);
                }
            );
        }

    }
    $scope.getusers = function () {
        $http.get('/api/user/').then(function (response) {
            $scope.users = response.data.data
            var admin = response.data.requestedUser
            $rootScope.admin = admin
            var name = admin.username
            $scope.add(name)

        })
    }
    $scope.getusers()
    $scope.images = []
    $scope.selectUser = function (selectedUser) {

        var admin = $scope.admin
        $scope.getmsgs = function (selectedUser) {
            $http.get('/api/getmsgs/').then(function (response) {
                $scope.msgs = response.data.msgs
            })
        }
        $scope.getmsgs(selectedUser)
        if (connection.session != null) {
            $scope.sendingTo = selectedUser.username
            $scope.selectedUser = selectedUser
            $scope.uploadFile = function (element) {
                $scope.file = element;
            }
            $scope.getFile = function () {
                $scope.progress = 0;
                fileReader.readAsDataUrl($scope.file, $scope)
                    .then(function (result) {
                        $rootScope.imageSrc = result;
                    });
            };
            
            $scope.sendText = function (chat) {
                $scope.upload = function (chat) {
                    var form = $scope.chat
                    var method = 'sent'
                    var fd = new FormData()
                    
                    // fd.append('method',method);
                    // fd.append('sentBy',$rootScope.admin.pk)
                    // fd.append('message', form.text)
                    // fd.append('recivedBy', selectedUser.pk)
                    // fd.append('attachment', $rootScope.imageSrc)
                    
                    
                    // for (var pair of fd.entries()) {
                    //     console.log(pair[0] + ', ' + pair[1]);
                    // }

                    var data = {
                        'method': 'sent',
                        "sentBy": $rootScope.admin.pk,
                        "message": chat.text,
                        "recivedBy": selectedUser.pk,
                        'attachment':'' 
                    }

                    $http.post('api/messages/', JSON.stringify(data)).then(function (response) {
                        $scope.msgs.push(response.data)
                    })

                    connection.session.publish(selectedUser.username, [data], {}, {
                        acknowledge: true
                    }).then(function (publication) {
                        console.log("Sent to" + " " + " " + "message=", data);
                    });
                    $scope.chat.text = ""
                }
                $scope.upload(chat)
            }
        }
        else {
            console.log("senders name empty")
        }
    }
}]);