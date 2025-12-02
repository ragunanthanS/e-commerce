pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Test Backend') {
            steps {
                script {
                    // Run Django tests inside the container
                    sh 'docker-compose run backend python manage.py test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy to production (mock)
                    sh 'docker-compose up -d'
                    echo 'Deployed successfully!'
                }
            }
        }
    }

    post {
        always {
            // Clean up
            sh 'docker-compose down'
        }
    }
}
