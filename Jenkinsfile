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
                sh 'npm test'  // change if you use another test command
            }
        }

        stage('Deploy to Railway') {
            steps {
                sh '''
                    npx railway login --token $RAILWAY_TOKEN
                    npx railway up --service YOUR_SERVICE_NAME
                '''
            }
        }
    }
}
