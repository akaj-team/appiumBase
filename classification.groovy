def addClassification(module) {
    def androidPropertyFile = "${module}/target/classifications/Android_Test.properties"
    if (fileExists(androidPropertyFile)) {
        def props = readProperties interpolate: true, file: androidPropertyFile
        cucumber fileIncludePattern: "${module}/target/cucumber-reports/*.json",
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

def echoa() {
    echo "aaaaa"
}

return this