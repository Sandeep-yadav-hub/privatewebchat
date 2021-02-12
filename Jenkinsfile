pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    /usr/local/bin/pip3 install virtualenv
                    /usr/local/bin/virtualenv env
                    source env/bin/activate
                    /usr/local/bin/pip3 install -r require.txt
                    cd chat
                    python2.7 manage.py runserver
                '''

            }
           
        }
        
    }
}
