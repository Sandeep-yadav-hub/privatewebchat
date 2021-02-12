pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    /usr/local/bin/pip install virtualenv
                    /usr/local/bin/virtualenv env
                    source env/bin/activate
                    /usr/local/bin/pip install -r require.txt
                    cd chat
                    python manage.py runserver
                '''

            }
           
        }
        
    }
}
