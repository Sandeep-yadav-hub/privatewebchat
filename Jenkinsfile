pipeline {
    agent any

    stages {
        stage('check python') {
            steps 
            {
                sh '''
                    python3 --version
                '''

            }
           
        }
        stage('git clone and install requirement') {
            steps 
            {
                sh '''
                    sudo rm -rf privatewebchat
                    sudo -n git clone https://github.com/Sandeep-yadav-hub/privatewebchat.git
                    sudo -n pip3 install -r require.txt
                    ls
                    cd privatewebchat
                    ls 
                    cd chat
                    ls
                '''

            }
           
        }
        stage('run server') {
            steps 
            {
                sh '''
                    python3 manage.py runserver 8000
                '''

            }
           
        }
        
    }
}
