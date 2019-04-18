def APP_MODULE = "App"
pipeline {
    agent none

    stages {
        stage('Run cucumber') {
            agent {
                label 'master'
            }
            steps {
                sh 'mvn clean test -DsuiteXmlFile=IOSSuite.xml'
            }
            post {
                always {
                    archiveArtifacts artifacts: "${APP_MODULE}/target/cucumber-reports/,${APP_MODULE}/target/screenshots/,${APP_MODULE}/target/GitHubReport.json"
                    junit "${APP_MODULE}/target/cucumber-reports/*.xml"
                    script {
                        def iosPropertyFile = "${APP_MODULE}/target/classifications/IOS_Test.properties"
                        if (fileExists(iosPropertyFile)) {
                            def props = readProperties interpolate: true, file: iosPropertyFile
                            cucumber fileIncludePattern: "${APP_MODULE}/target/cucumber-reports/*.json",
                                    sortingMethod: 'ALPHABETICAL',
                                    classifications: [
                                            ['key'  : 'App Package',
                                             'value': props.appPackage
                                            ],
                                            ['key'  : 'App Activity',
                                             'value': props.appActivity
                                            ],
                                            ['key'  : 'App',
                                             'value': props.app
                                            ],
                                            ['key'  : 'Server',
                                             'value': props.server
                                            ],
                                            ['key'  : 'Platform Version',
                                             'value': props.platformVersion
                                            ],
                                            ['key'  : 'Platform Name',
                                             'value': props.platformName
                                            ],
                                            ['key'  : 'Device Name',
                                             'value': props.deviceName
                                            ]
                                    ]
                        }
                    }
                    stash includes: "${APP_MODULE}/target/GitHubReport.json", name: 'cucumber-report'
                }

                success {
                    echo "Test succeeded"
                }
                failure {
                    echo "Test failed"
                }
            }
        }
    }
}
