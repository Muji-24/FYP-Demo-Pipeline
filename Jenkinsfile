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
                sh 'npm install @railway/cli --save-dev'  // local install
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
    steps {
        withEnv(["RAILWAY_TOKEN=${env.RAILWAY_TOKEN}"]) {
            sh 'npx railway up'
        }
    }
}

    }
}
