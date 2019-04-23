def APP_MODULE = "App"

pipeline {
    agent any


    stages {
        stage('Slack Notification') {
            agent {
                label 'master'
            }

            steps("Notify") {
                script {
                    def report = readJSON file: "${APP_MODULE}/target/GitHubReport.json"
                    def buildStatus = ''
                    def colorCode = '#FF0000'
                    if (report.features.failedFeature == 0) {
                        buildStatus = "success"
                        colorCode = '#00FF00'
                    } else {
                        buildStatus = "failed"
                        colorCode = '#FF0000'
                    }
                    echo env.JOB_NAME
                    echo env.BUILD_URL
                    def description = "*Pull request #${env.CHANGE_ID} build ${buildStatus}.*\n"
                    def duration = "- Total duration: ${report.durations.totalDuration}\n"
                    def step = "- Step: Total: ${report.steps.totalSteps}, Passed: ${report.steps.passedStep}, Failed: ${report.steps.failedStep}, Skipped: ${report.steps.skippedStep}, Pending: ${report.steps.pendingStep}, Undefined: ${report.steps.undefinedStep}\n"
                    def scenario = "- Scenario: Total: ${report.scenarios.totalScenarios}, Passed: ${report.scenarios.passedScenario}, Failed: ${report.scenarios.failedScenario}\n"
                    def feature = "- Feature: Total: ${report.features.totalFeatures}, Passed: ${report.features.passedFeature}, Failed: ${report.features.failedFeature}\n"
                    def configDescription = "- Device: ${props.deviceName}, Version: ${props.platformVersion}, Platform: ${props.platformName}\n- App: ${props.app}\n- Server: ${props.server}\n"
                    def oceanBlue = "- Detail: http://172.16.110.169:8080/blue/organizations/jenkins/cm_appium/detail/PR-${env.CHANGE_ID}/${env.BUILD_NUMBER}/pipeline\n"
                    slackSend(color: colorCode, message: description + duration + feature + scenario + step + configDescription + oceanBlue)
                }
            }
        }
    }
}
