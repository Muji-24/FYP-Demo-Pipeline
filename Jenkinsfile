pipeline {
    agent any

    environment {
        RAILWAY_TOKEN = credentials('railway-token') // Jenkins credential ID
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Muji-24/FYP-Demo-Pipeline.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'  // change if you use another test commandsS
            }
        }

        stage('Deploy to Railway') {
            steps {
                withCredentials([string(credentialsId: 'railway-token', variable: 'RAILWAY_TOKEN')]) {
                    sh '''
                        npm install -g @railway/cli
                        railway login --token $RAILWAY_TOKEN
                        railway up --service 0c2fbb35-8aab-417c-ac9b-082958dcedab --detach
                    '''
                }
            }
        }
    }
}
