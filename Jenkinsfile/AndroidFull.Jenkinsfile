def APP_MODULE = "App"
def MAC_WORK_SPACE
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
            }
        }

        stage("Share data") {
            agent {
                label 'macos'
            }
            options { skipDefaultCheckout() }
            steps {
                unstash('data')
                script {
                    MAC_WORK_SPACE = pwd()
                }
            }
        }
        stage('Run cucumber') {
            agent {
                label 'master'
            }

            steps {
                sh "mvn clean test -DsuiteXmlFile=AndroiSuite -DworkSpace=${MAC_WORK_SPACE}"
            }
            post {
                always {
                    archiveArtifacts artifacts: "${APP_MODULE}/target/cucumber-reports/,${APP_MODULE}/target/screenshots/,${APP_MODULE}/target/GitHubReport.json"
                    junit "${APP_MODULE}/target/cucumber-reports/*.xml"
                    script {
                        def androidPropertyFile = "${APP_MODULE}/target/classifications/Android_Test.properties"
                        if (fileExists(androidPropertyFile)) {
                            def props = readProperties interpolate: true, file: androidPropertyFile
                            cucumber fileIncludePattern: "${APP_MODULE}/target/cucumber-reports/*.json",
                                    sortingMethod: 'ALPHABETICAL',
                                    classifications: [
                                            ['key'  : 'Device Name',
                                             'value': props.deviceName
                                            ],
                                            ['key'  : 'Platform Name',
                                             'value': props.platformName
                                            ],
                                            ['key'  : 'Platform Version',
                                             'value': props.platformVersion
                                            ],
                                            ['key'  : 'Server',
                                             'value': props.server
                                            ],
                                            ['key'  : 'App',
                                             'value': props.app
                                            ],
                                            ['key'  : 'App Package',
                                             'value': props.appPackage
                                            ],
                                            ['key'  : 'App Activity',
                                             'value': props.appActivity
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
