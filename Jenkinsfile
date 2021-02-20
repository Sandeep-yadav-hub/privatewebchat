pipeline {
    agent any

    stages {
        stage('check python') {
            steps 
            {
                sh '''
                    sudo python --version
                '''

            }
           
        }
        stage('install virtualenv and activate') {
            steps 
            {
                sh '''
                    sudo pip install virtualenv
                    sudo virtualenv env 
                    sudo ./env/bin/activate
                    r
                '''

            }
           
        }
        stage('git clone and install requirement') {
            steps 
            {
                sh '''
                    sudo git clone https://github.com/Sandeep-yadav-hub/privatewebchat.git
                    sudo pip install -r require.txt
                    sudo cd chat
                '''

            }
           
        }
        stage('run server') {
            steps 
            {
                sh '''
                    sudo python3 manage.py runserver
                '''

            }
           
        }
        
    }
}
