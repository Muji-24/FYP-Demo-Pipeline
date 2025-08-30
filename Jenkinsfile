does i have to do some hanges here?

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

        stage('Deploy to Railway') {
            steps {
                sh '''
                  git config --global user.email "you@example.com"
                  git config --global user.name "Jenkins"
                  git add .
                  git commit -m "CI/CD: Update from Jenkins" || echo "No changes"
                  git push origin main
                '''
            }
        }
    }

    post {
        success { echo '✅ Pipeline finished & pushed to GitHub (Railway will auto-deploy).' }
        failure { echo '❌ Pipeline failed!' }
    }
}