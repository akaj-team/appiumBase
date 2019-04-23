def APP_MODULE = "App"
def notify = evaluate readTrusted('notify.groovy')

pipeline {
    agent none

    stages {
        stage('Slack Notification') {
            agent {
                label 'master'
            }
            steps("Get data") {
                script {
                    notify.sendMessage()
                }
            }
        }
    }
}

