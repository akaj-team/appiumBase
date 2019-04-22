def APP_MODULE = "App"
pipeline {
    agent none

    stages {
        stage('Stash source code') {
            agent {
                label 'master'
            }
            steps {

                stash includes: '**', name: 'source-code', useDefaultExcludes: false
                stash includes: "${APP_MODULE}/appfile/", name: 'data', useDefaultExcludes: false
                slackSend (color: colorCode, message: "Success")
            }
        }
    }
}
