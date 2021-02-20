pipeline {
    agent any

    stages {
        stage('check python') {
            steps 
            {
                sh '''
                    sudo -S python --version
                '''

            }
           
        }
        stage('install virtualenv and activate') {
            steps 
            {
                sh '''
                    sudo -S pip install virtualenv
                    sudo -S virtualenv env 
                    sudo -S ./env/bin/activate
                    r
                '''

            }
           
        }
        stage('git clone and install requirement') {
            steps 
            {
                sh '''
                    sudo -S git clone https://github.com/Sandeep-yadav-hub/privatewebchat.git
                    sudo -S pip install -r require.txt
                    cd chat
                '''

            }
           
        }
        stage('run server') {
            steps 
            {
                sh '''
                    sudo -S python3 manage.py runserver
                '''

            }
           
        }
        
    }
}
