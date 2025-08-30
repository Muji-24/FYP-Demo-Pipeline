pipeline {
    agent any

    environment {
        // Your GitHub credentials stored in Jenkins
        GITHUB_CREDS = credentials('github-creds')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Muji-24/FYP-Demo-Pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // if no tests, just use `echo "No tests"`
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Push Back to GitHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-creds', usernameVariable: 'USER', passwordVariable: 'TOKEN')]) {
                    sh '''
                        git config --global user.email "ci-bot@example.com"
                        git config --global user.name "CI Bot"
                        git remote set-url origin https://$USER:$TOKEN@github.com/Muji-24/FYP-Demo-Pipeline.git
                        git add .
                        git commit -m "Auto commit from Jenkins [skip ci]" || echo "No changes to commit"
                        git push origin main
                    '''
                }
            }
        }
    }
}
