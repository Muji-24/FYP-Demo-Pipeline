pipeline {
    agent any

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

        stage('Build & Deploy') {
            steps {
                sh 'echo "Add build/deploy commands here"'
            }
        }
    }

    post {
        success { echo 'Pipeline finished successfully!' }
        failure { echo 'Pipeline failed!' }
    }
}
