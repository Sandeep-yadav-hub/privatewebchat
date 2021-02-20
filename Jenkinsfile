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
