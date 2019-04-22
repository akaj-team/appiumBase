def APP_MODULE = "App"
def MAC_WORK_SPACE
def props
pipeline {
    agent none

    stages {
        stage('Slack Notification') {
            when {
                not {
                    environment name: 'CHANGE_ID', value: ''
                }
            }
            steps("Get data") {
                script {
                    def gitReport = readJSON file: "GitHubReport.json"
                    def buildStatus = ''
                    def colorCode = '#FF0000'
                    if (gitReport.steps.failedStep == 0) {
                        buildStatus = "success"
                        colorCode = '#00FF00'
                    } else {
                        buildStatus = "failed"
                        colorCode = '#FF0000'
                    }
                    def des = "Pull request #${env.CHANGE_ID} build ${buildStatus}"
                    echo des
                    echo colorCode
                    echo buildStatus
                    //  slackSend(color: colorCode, message: des)
                }
            }
        }
    }
}
