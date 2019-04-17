$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/Login.feature");
formatter.feature({
  "name": "Test user login flow",
  "description": "  Flow when login a new account in the 1st times (input nickname, choose avatar and see \"book setting popup\")\n  Login success with valid account\n  Login fail with invalid account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login button is not displayed when no input username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I input username with \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I input password with \"\u003cpassWord\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Button ログイン Login button is not displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord"
      ]
    },
    {
      "cells": [
        "khangtm92+062@gmail.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        "12345678"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open screen ログイン Login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinitions.java:20"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.id: btnSignIn})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat at_asiantech.pages.LoginOrRegister.LoginOrRegisterPageAndroid.openLoginScreen(LoginOrRegisterPageAndroid.java:18)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.checkAppStateAndGoToLoginPage(LoginDefinitions.java:49)\n\tat ✽.Open screen ログイン Login screen(src/test/resources/features/login/Login.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@2f3c6ac4 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat at_asiantech.pages.LoginOrRegister.LoginOrRegisterPageAndroid.openLoginScreen(LoginOrRegisterPageAndroid.java:18)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.checkAppStateAndGoToLoginPage(LoginDefinitions.java:49)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.lambda$new$0(LoginDefinitions.java:20)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java8.Java8StepDefinition.execute(Java8StepDefinition.java:107)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\n\tat org.testng.TestRunner.run(TestRunner.java:624)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1191)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1116)\n\tat org.testng.TestNG.run(TestNG.java:1024)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.id: btnSignIn})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027MBA0163.local\u0027, ip: \u0027fe80:0:0:0:c44:7e9f:fdec:1b3d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 51 more\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login button is not displayed when no input username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I input username with \"khangtm92+062@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinitions.java:36"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input password with \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDefinitions.java:38"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Button ログイン Login button is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinitions.java:40"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open screen ログイン Login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinitions.java:20"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.id: btnSignIn})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat at_asiantech.pages.LoginOrRegister.LoginOrRegisterPageAndroid.openLoginScreen(LoginOrRegisterPageAndroid.java:18)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.checkAppStateAndGoToLoginPage(LoginDefinitions.java:49)\n\tat ✽.Open screen ログイン Login screen(src/test/resources/features/login/Login.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@70d8de (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat at_asiantech.pages.LoginOrRegister.LoginOrRegisterPageAndroid.openLoginScreen(LoginOrRegisterPageAndroid.java:18)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.checkAppStateAndGoToLoginPage(LoginDefinitions.java:49)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.lambda$new$0(LoginDefinitions.java:20)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java8.Java8StepDefinition.execute(Java8StepDefinition.java:107)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\n\tat org.testng.TestRunner.run(TestRunner.java:624)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1191)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1116)\n\tat org.testng.TestNG.run(TestNG.java:1024)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.id: btnSignIn})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027MBA0163.local\u0027, ip: \u0027fe80:0:0:0:c44:7e9f:fdec:1b3d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 51 more\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login button is not displayed when no input username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I input username with \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinitions.java:36"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input password with \"12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDefinitions.java:38"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Button ログイン Login button is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinitions.java:40"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open screen ログイン Login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginDefinitions.java:20"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.id: btnSignIn})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat at_asiantech.pages.LoginOrRegister.LoginOrRegisterPageAndroid.openLoginScreen(LoginOrRegisterPageAndroid.java:18)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.checkAppStateAndGoToLoginPage(LoginDefinitions.java:49)\n\tat ✽.Open screen ログイン Login screen(src/test/resources/features/login/Login.feature:7)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@4525d1d3 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:303)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\n\tat at_asiantech.pages.LoginOrRegister.LoginOrRegisterPageAndroid.openLoginScreen(LoginOrRegisterPageAndroid.java:18)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.checkAppStateAndGoToLoginPage(LoginDefinitions.java:49)\n\tat at_asiantech.stepdefs.login.LoginDefinitions.lambda$new$0(LoginDefinitions.java:20)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java8.Java8StepDefinition.execute(Java8StepDefinition.java:107)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:56)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\n\tat org.testng.TestRunner.run(TestRunner.java:624)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:354)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:312)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:261)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1191)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1116)\n\tat org.testng.TestNG.run(TestNG.java:1024)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:383)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:344)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:125)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:417)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.id: btnSignIn})\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027MBA0163.local\u0027, ip: \u0027fe80:0:0:0:c44:7e9f:fdec:1b3d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\n\t... 51 more\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login button is not displayed when no input username or password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I input username with \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginDefinitions.java:36"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input password with \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDefinitions.java:38"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Button ログイン Login button is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefinitions.java:40"
});
formatter.result({
  "status": "skipped"
});
});