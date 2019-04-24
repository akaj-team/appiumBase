def sendMessage(reportFile, proFile) {
    def properties = readProperties interpolate: true, file: proFile
    def buildStatus = ''
    def colorCode = ''
    def duration = ''
    def step = ''
    def scenario = ''
    def feature = ''
    def configDescription = ''
    def buildUrl = ''
    if (reportFile.features.failedFeature == 0) {
        buildStatus = "success"
        colorCode = '#00FF00'
        feature = "- Total features: ${reportFile.features.totalFeatures}, Device: ${properties.deviceName}, Platform: ${properties.platformName}"
    } else {
        buildStatus = "failed"
        colorCode = '#FF0000'
        duration = "- Total duration: ${reportFile.durations.totalDuration}\n"
        step = "- Step: Total: ${reportFile.steps.totalSteps}, Passed: ${reportFile.steps.passedStep}, Failed: ${reportFile.steps.failedStep}, Skipped: ${reportFile.steps.skippedStep}, Pending: ${report.steps.pendingStep}, Undefined: ${report.steps.undefinedStep}\n"
        scenario = "- Scenario: Total: ${reportFile.scenarios.totalScenarios}, Passed: ${reportFile.scenarios.passedScenario}, Failed: ${reportFile.scenarios.failedScenario}\n"
        feature = "- Feature: Total: ${reportFile.features.totalFeatures}, Passed: ${reportFile.features.passedFeature}, Failed: ${reportFile.features.failedFeature}\n"
        configDescription = "- Device: ${properties.deviceName}, Version: ${properties.platformVersion}, Platform: ${properties.platformName}\n- App: ${properties.app}\n- Server: ${properties.server}\n"
        buildUrl = "- Detail: ${env.BUILD_URL}\n"
    }
   // slackSend(color: colorCode, message: "*Build ${buildStatus}.*\n" + duration + feature + scenario + step + configDescription + buildUrl)
}

return this
