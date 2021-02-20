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
                    sudo rm -rf chat
                    sudo rm -rf Jenkinsfile
                    sudo rm -rf require.txt
                    sudo rm -rf privatewebchat
                    sudo -n git clone https://github.com/Sandeep-yadav-hub/privatewebchat.git
                    cd privatewebchat
                    sudo -n pip3 install -r require.txt
                    
                '''

            }
           
        }
        stage('run server') {
            steps 
            {
                sh '''
                    cd privatewebchat
                    cd chat
                    source env/bin/activate && python ./manage.py runserver
                '''

            }
           
        }
        
    }
}
