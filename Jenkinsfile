pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    /usr/local/bin/pip3 install pipenv
                    /usr/local/bin/pipenv --python 3.7
                    source env/bin/activate
                    /usr/local/bin/pip3 install -r require.txt
                    cd chat
                    /usr/local/bin/python3 manage.py runserver
                '''

            }
           
        }
        
    }
}
