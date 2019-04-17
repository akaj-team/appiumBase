package at.core;

import at.base.Const;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.xml.XmlTest;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class AppiumController {
    public static AppiumController instance = new AppiumController();
    private ThreadLocal<AppiumDriver> driverFactoryThread = new ThreadLocal<>();

    public synchronized AppiumDriver getDriver() {
        if (driverFactoryThread.get() == null) {
            try {
                startDefaultServer();
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
        return driverFactoryThread.get();
    }

    public synchronized void start(XmlTest xmlTest, boolean isDefault) throws MalformedURLException {
        AppiumDriver driver = null;

        DesiredCapabilities capabilities = new DesiredCapabilities();

        File classpathRoot = new File(System.getProperty("user.dir").replace("/App", ""));

        capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, xmlTest.getParameter(MobileCapabilityType.DEVICE_NAME));
        capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, xmlTest.getParameter(MobileCapabilityType.PLATFORM_VERSION));

        if (xmlTest.getParameter(MobileCapabilityType.PLATFORM_NAME).equalsIgnoreCase("android")) {
            capabilities.setCapability(MobileCapabilityType.NO_RESET, true);
            capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
            capabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, xmlTest.getParameter(AndroidMobileCapabilityType.APP_PACKAGE));
            capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, xmlTest.getParameter(AndroidMobileCapabilityType.APP_ACTIVITY));

            File appDir = new File(classpathRoot, "/App/appfile/Android");
            File appPath = new File(appDir, xmlTest.getParameter(MobileCapabilityType.APP));
//            if (isDefault) {
//                capabilities.setCapability(MobileCapabilityType.APP, appPath.getAbsolutePath());
//            } else {
                capabilities.setCapability(MobileCapabilityType.APP, xmlTest.getParameter(MobileCapabilityType.APP));
          //  }
            driver = new AndroidDriver(new URL(xmlTest.getParameter("server")), capabilities);
        } else if (xmlTest.getParameter(MobileCapabilityType.PLATFORM_NAME).equalsIgnoreCase("ios")) {
            capabilities.setCapability(MobileCapabilityType.NO_RESET, true);
            capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "XCUITest");
            capabilities.setCapability("useJSONSource", true);

            File appDir = new File(classpathRoot, "/App/appfile/iOS/");
            File appPath = new File(appDir, xmlTest.getParameter(MobileCapabilityType.APP));
            capabilities.setCapability(MobileCapabilityType.APP, appPath.getAbsolutePath());
            driver = new IOSDriver<>(new URL(xmlTest.getParameter("server")), capabilities);
        }

        if (driver != null) {
            driver.manage().timeouts().implicitlyWait(Const.TIME_OUT_MIN_ELEMENT, TimeUnit.SECONDS);
        }

        Set<String> contextNames = driver.getContextHandles();
        for (String contextName : contextNames) {
            if (contextName.contains("WEBVIEW") || contextName.contains("NATIVE_APP")) {
                driver.context(contextName);
                break;
            }
        }

        driverFactoryThread.set(driver);
    }

    private synchronized void startDefaultServer() throws MalformedURLException {
        XmlTest xmlTest = new XmlTest();
        xmlTest.setParameters(defaultAndroidParameters());
        start(xmlTest, true);
    }

    private Map<String, String> defaultAndroidParameters() {
        Map<String, String> parameters = new HashMap<>();
        parameters.put(MobileCapabilityType.PLATFORM_NAME, "android");
        parameters.put(MobileCapabilityType.DEVICE_NAME, "Pixel XL API 28");
        parameters.put(MobileCapabilityType.PLATFORM_VERSION, "9");
        parameters.put(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
        parameters.put(AndroidMobileCapabilityType.APP_PACKAGE, "jp.co.trygroup.tryit.student.ui.staging");
        parameters.put(AndroidMobileCapabilityType.APP_ACTIVITY, "jp.co.trygroup.tryit.student.ui.initial.SplashActivity_");
        parameters.put(MobileCapabilityType.APP, "jp.co.trygroup.tryit.student.ui.staging_v3.1.22.apk");
        parameters.put("server", "http://172.16.110.169:4444/wd/hub");
        return parameters;
    }

    private Map<String, String> defaultIosParameters() {
        Map<String, String> parameters = new HashMap<>();
        parameters.put(MobileCapabilityType.PLATFORM_NAME, "ios");
        parameters.put(MobileCapabilityType.DEVICE_NAME, "iPhone XS Max");
        parameters.put(MobileCapabilityType.PLATFORM_VERSION, "12.0");
        parameters.put(MobileCapabilityType.AUTOMATION_NAME, "XCUITest");
        parameters.put(MobileCapabilityType.APP, "tryit_stg.ipa");
        parameters.put("server", "http://127.0.0.1:4723/wd/hub");
        return parameters;
    }

    public void stop() {
        if (getDriver() != null) {
            getDriver().quit();
        }
    }
}
