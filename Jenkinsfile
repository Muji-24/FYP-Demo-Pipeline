pipeline {
    agent any

    environment {
        RAILWAY_TOKEN = credentials('railway_token')
    }

    stages {
        // Checkout code
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Muji-24/FYP-Demo-Pipeline.git'
            }
        }

        // Install dependencies
        stage('Install') {
            steps {
                sh 'npm install'
                // Optional: if CLI not installed globally
                // sh 'npm install @railway/cli --save-dev'
            }
        }

        // Run tests
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        // Deploy using Railway CLI
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'railway_token', variable: 'RAILWAY_TOKEN')]) {
                    sh 'npx railway up -- --yes'
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
        success {
            echo "Pipeline succeeded"
        }
        failure {
            echo "Pipeline failed"
        }
    }
}
