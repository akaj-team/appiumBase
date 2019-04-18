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

        stage('Run Tests') {
            parallel {
                stage("Build") {
                    stages {
                        stage('Run cucumber') {
                            agent {
                                label 'master'
                            }

                            steps {
                                sh "mvn clean test -DsuiteXmlFile=CheckSuite -Dapp=${MAC_WORK_SPACE}/App/appfile/Android/jp.co.trygroup.tryit.student.ui.staging_v3.1.20.apk"
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
