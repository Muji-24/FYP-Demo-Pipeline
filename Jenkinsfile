pipeline {
    agent any

    environment {
        RAILWAY_TOKEN = credentials('railway_token')
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
                // Optional: remove local CLI install if globally installed
                // sh 'npm install @railway/cli --save-dev'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'railway_token', variable: 'RAILWAY_TOKEN')]) {
                    sh 'npx railway up --yes'
                }
            }
        }
    }
}
