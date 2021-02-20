pipeline {
    agent any

    stages {
        stage('check python') {
            steps 
            {
                sh '''
                    sudo -n python3 --version
                '''

            }
           
        }
        stage('install virtualenv and activate') {
            steps 
            {
                sh '''
                    sudo -n pip3 install virtualenv
                    sudo -n virtualenv env 
                    sudo -n ./env/bin/activate
                    r
                '''

            }
           
        }
        stage('git clone and install requirement') {
            steps 
            {
                sh '''
                    sudo -n git clone https://github.com/Sandeep-yadav-hub/privatewebchat.git
                    sudo -n pip3 install -r require.txt
                    cd chat
                '''

            }
           
        }
        stage('run server') {
            steps 
            {
                sh '''
                    sudo -n python3 manage.py runserver
                '''

            }
           
        }
        
    }
}
