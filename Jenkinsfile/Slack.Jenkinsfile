def APP_MODULE = "App"

pipeline {
    agent none

    stages {
        stage('Slack Notification') {
            agent {
                label 'master'
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
                    def des = "Pull request #${env.CHANGE_ID} build by ${env.BUILD_USER} ${buildStatus}`\n"
                    def duration = "*Total duration*: ${gitReport.durations.totalDuration}\n"
                    def step = "*Steps*: Total: ${gitReport.steps.totalSteps}, Passed: ${gitReport.steps.passedStep}, Failed: ${gitReport.steps.failedStep}, Skipped :${gitReport.steps.skippedStep}, Pending: ${gitReport.steps.pendingStep}, Undefined: ${gitReport.steps.undefinedStep}\n"
                    def scenario = "*Scenarios*: Total: ${gitReport.scenarios.totalScenarios}, Passed: ${gitReport.scenarios.passedScenario}, Failed: ${gitReport.scenarios.failedScenario}\n"
                    def feature = "*Features*: Total: ${gitReport.features.totalFeatures}, Passed: ${gitReport.features.passedFeature}, Failed: ${gitReport.features.failedFeature}\n"
                    def androidPropertyFile = "Android_Test.properties"
                    def props = readProperties interpolate: true, file: androidPropertyFile
                    def config = "Device:${props.deviceName}, Version: ${props.platformVersion}, Platform:${props.platformName}, Server:${props.server},  App:${props.app}\n"
                    echo "${env.JOB_NAME}"
                    echo "${env.BUILD_URL}"
                    def oceanBlue = "Detail: http://172.16.110.169:8080/blue/organizations/jenkins/cm_appium/detail/PR-${env.CHANGE_ID}/${env.BUILD_NUMBER}/pipeline\n"
                    // slackSend(color: colorCode, message: des + duration + feature + scenario + step + config + oceanBlue)
                }
            }
        }
    }
}

