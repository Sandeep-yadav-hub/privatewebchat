pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd privatewebchat'
            }
            {sh 'pip install -r require.txt'}
            {sh 'cd chat'}
            {sh 'python manage.py runserver'}
        }
        
    }
}
