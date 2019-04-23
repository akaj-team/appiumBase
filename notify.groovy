def sendMessage(properties) {
    def report = readJSON file: "GitHubReport.json"
    def props = readProperties interpolate: true, file: properties

    def buildStatus = ''
    def colorCode = '#FF0000'
    if (report.features.failedFeature == 0) {
        buildStatus = "success"
        colorCode = '#00FF00'
    } else {
        buildStatus = "failed"
        colorCode = '#FF0000'
    }
    def description = "*Build ${buildStatus}.*\n"
    def duration = "- Total duration: ${report.durations.totalDuration}\n"
    def step = "- Step: Total: ${report.steps.totalSteps}, Passed: ${report.steps.passedStep}, Failed: ${report.steps.failedStep}, Skipped: ${report.steps.skippedStep}, Pending: ${report.steps.pendingStep}, Undefined: ${report.steps.undefinedStep}\n"
    def scenario = "- Scenario: Total: ${report.scenarios.totalScenarios}, Passed: ${report.scenarios.passedScenario}, Failed: ${report.scenarios.failedScenario}\n"
    def feature = "- Feature: Total: ${report.features.totalFeatures}, Passed: ${report.features.passedFeature}, Failed: ${report.features.failedFeature}\n"
    def configDescription = "- Device: ${props.deviceName}, Version: ${props.platformVersion}, Platform: ${props.platformName}\n- App: ${props.app}\n- Server: ${props.server}\n"
    def oceanBlue = "- Detail: ${env.BUILD_URL}\n"
    slackSend(color: colorCode, message: description + duration + feature + scenario + step + configDescription + oceanBlue)
}

return this
