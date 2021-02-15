pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    sudo /usr/local/bin/python3 --version
                    sudo /usr/local/bin/pip3 install virtualenv
                    sudo /usr/local/bin/virtualenv env 
                    sudo source env/bin/activate
                    sudo /usr/local/bin/pip3 install -r require.txt
                    sudo cd chat
                    sudo /usr/local/bin/python3 manage.py runserver
                '''

            }
           
        }
        
    }
}
