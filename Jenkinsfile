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
                sh 'npm test' // change if you use another test command
            }
        }

        stage('Deploy to Railway') {
            when {
                expression { currentBuild.currentResult == 'SUCCESS' }
            }
            steps {
                sh '''
                    npm install -g @railway/cli
                    railway login --token $RAILWAY_TOKEN
                    railway up --service 0c2fbb35-8aab-417c-ac9b-082958dcedab --detach
                '''
            }
        }
    }
}
