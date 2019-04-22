def APP_MODULE = "App"
def MAC_WORK_SPACE
def props
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

        stage('Run Tests') {
            parallel {
                stage("Build") {
                    stages {
                        stage('Run cucumber') {
                            agent {
                                label 'master'
                            }

                            steps {
                                sh "mvn clean test -DsuiteXmlFile=CheckSuite -DworkSpace=${MAC_WORK_SPACE}"
                            }
                            post {
                                always {
                                    archiveArtifacts artifacts: "${APP_MODULE}/target/cucumber-reports/,${APP_MODULE}/target/screenshots/,${APP_MODULE}/target/GitHubReport.json"
                                    junit "${APP_MODULE}/target/cucumber-reports/*.xml"
                                    script {
                                        def androidPropertyFile = "${APP_MODULE}/target/classifications/Android_Test.properties"
                                        if (fileExists(androidPropertyFile)) {
                                            props = readProperties interpolate: true, file: androidPropertyFile
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
                        stage('Export reports') {
                            when {
                                not {
                                    environment name: 'CHANGE_ID', value: ''
                                }
                            }
                            agent {
                                docker {
                                    label 'master'
                                    image 'at/reporting:latest'
                                    args '-v $HOME/vendor/bundle:/vendor/bundle'
                                }
                            }
                            options { skipDefaultCheckout() }
                            steps("Install gems") {
                                unstash('source-code')
                                unstash('cucumber-report')
                                sh "bundle install --path /vendor/bundle"
                            }
                            post {
                                always {
                                    sh "bundle exec danger --danger_id=cucumber_report --dangerfile=CucumberReport.Dangerfile"
                                }
                            }
                        }

                        stage('Slack Notification') {
                            when {
                                not {
                                    environment name: 'CHANGE_ID', value: ''
                                }
                            }
                            steps("Get data") {
                                script {
                                    def gitReport = readJSON file: "${env.WORKSPACE}/GitHubReport.json"
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

                stage('Validate code') {
                    when {
                        not {
                            environment name: 'CHANGE_ID', value: ''
                        }
                    }
                    stages {
                        stage('Validate') {
                            agent {
                                label 'master'
                            }
                            steps {
                                sh "mvn install -DskipTests"
                                sh "mvn validate"
                            }
                            post {
                                always {
                                    stash includes: "${APP_MODULE}/target/checkstyle.xml", name: 'checkstyle'
                                }
                            }
                        }
                        stage('Reporting') {
                            agent {
                                docker {
                                    label 'master'
                                    image 'at/reporting:latest'
                                    args '-v $HOME/vendor/bundle:/vendor/bundle'
                                }
                            }
                            options { skipDefaultCheckout() }
                            steps("Preparing source code & Installing gems") {
                                unstash('source-code')
                                unstash('checkstyle')
                                sh "gem -v"
                                sh "bundle install --path /vendor/bundle"
                            }
                            post {
                                success {
                                    sh "bundle exec danger --danger_id=check_style --dangerfile=Dangerfile"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
