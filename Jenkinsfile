pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    pip install -r require.txt
                    cd chat
                    python manage.py runserver
                '''

            }
           
        }
        
    }
}
