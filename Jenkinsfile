pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    /usr/local/bin/pip3 install -r require.txt
                    cd chat
                    python manage.py runserver
                '''

            }
           
        }
        
    }
}
