pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    /usr/local/bin/pip3 install pipenv
                    /usr/local/bin/pipenv --python3.8
                    /usr/local/bin/pipenv shell
                    /usr/local/bin/pip3 install -r require.txt
                    cd chat
                    /usr/local/bin/python3.8 manage.py runserver
                '''

            }
           
        }
        
    }
}
