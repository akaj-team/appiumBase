def APP_MODULE = "App"
def MAC_WORK_SPACE
def classification = evaluate readTrusted('classification.groovy')
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
                sh "mvn clean test -DsuiteXmlFile=AndroidSuite -DworkSpace=${MAC_WORK_SPACE}"
            }
            post {
                always {
                    archiveArtifacts artifacts: "${APP_MODULE}/target/cucumber-reports/,${APP_MODULE}/target/screenshots/,${APP_MODULE}/target/GitHubReport.json"
                    junit "${APP_MODULE}/target/cucumber-reports/*.xml"
                    script {
                        classification.addClassification(APP_MODULE)
                        classification.echoa()
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
