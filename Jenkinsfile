pipeline {
    agent { docker { image 'node:21' } }
    
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}