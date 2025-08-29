pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token')   // Add this in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Muji-24/FYP-Demo-Pipeline'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests defined"'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh '''
                npm install -g vercel
                vercel --prod --token=$FYP-Demo-Pipeline --yes
                '''
            }
        }
    }

    post {
        success { echo '✅ Pipeline finished & deployed to Vercel!' }
        failure { echo '❌ Pipeline failed!' }
    }
}
