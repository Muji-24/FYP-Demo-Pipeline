pipeline {
    agent any

    environment {
        RAILWAY_TOKEN = credentials('railway-token')
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
                sh 'npm install @railway/cli --save-dev'  // local install
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Railway') {
            steps {
                withCredentials([string(credentialsId: 'railway-token', variable: 'RAILWAY_TOKEN')]) {
                    sh '''
                        npx railway login --token $RAILWAY_TOKEN
                        npx railway up --service 0c2fbb35-8aab-417c-ac9b-082958dcedab --detach
                    '''
                }
            }
        }
    }
}
