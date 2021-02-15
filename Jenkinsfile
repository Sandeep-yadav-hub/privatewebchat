pipeline {
    agent any

    stages {
        stage('Build') {
            steps 
            {
                sh '''
                    echo titan@1234 | sudo -S <cmd>  /usr/local/bin/python3 --version
                    echo titan@1234 | sudo -S <cmd>  /usr/local/bin/pip3 install virtualenv
                    echo titan@1234 | sudo -S <cmd>  /usr/local/bin/virtualenv env 
                    echo titan@1234 | sudo -S <cmd>  source env/bin/activate
                    echo titan@1234 | sudo -S <cmd>  /usr/local/bin/pip3 install -r require.txt
                    echo titan@1234 | sudo -S <cmd>  cd chat
                    echo titan@1234 | sudo -S <cmd>  /usr/local/bin/python3 manage.py runserver
                '''

            }
           
        }
        
    }
}
