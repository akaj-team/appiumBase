def APP_MODULE = "App"
def MAC_WORK_SPACE
pipeline {
    agent any

    stages {
        stage('Slack Notification') {
            steps("Get data") {
                script {
                    def gitReport = readJSON file: "GitHubReport.json"
                    def buildStatus = ''
                    def colorCode = '#FF0000'
                    def oceanBlue = ''

                    if (gitReport.steps.failedStep != 0) {
                        buildStatus = "success"
                        colorCode = '#00FF00'
                    } else {
                        buildStatus = "failed"
                        colorCode = '#FF0000'
                        oceanBlue = "${env.BUILD_URL}/${env.JOB_NAME}/${env.BUILD_NUMBER}"
                    }
                    echo ${oceanBlue}
                    def des = "Pull request #${env.CHANGE_ID} build ${buildStatus} ${env.BUILD_USER}\n"
                    def duration = "Total duration:${gitReport.durations.totalDuration}\n"
                    def step = "Steps: Total:${gitReport.steps.totalSteps}, Passed:${gitReport.steps.passedStep}, Failed:${gitReport.steps.failedStep}, Skipped:${gitReport.steps.skippedStep}, Pending:${gitReport.steps.pendingStep}, Undefined:${gitReport.steps.undefinedStep}\n"
                    def scenario = "Scenarios: Total:${gitReport.scenarios.totalScenarios}, Passed:${gitReport.scenarios.passedScenario}, Failed:${gitReport.scenarios.failedScenario}\n"
                    def feature = "Features: Total:${gitReport.features.totalFeatures}, Passed:${gitReport.features.passedFeature}, Failed:${gitReport.features.failedFeature}\n"
                    echo ${des}
                    def androidPropertyFile = "Android_Test.properties"
                    def props = readProperties interpolate: true, file: androidPropertyFile
                    def config = "Device:${props.deviceName}, Version: ${props.platformVersion}, Platform:${props.platformName}, Server:${props.server},  App:${props.app}\n"
                    // slackSend(color: colorCode, message: des + duration + feature + scenario + step + config)
                }
            }
        }
    }
}
