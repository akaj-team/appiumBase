package at.core;

import io.appium.java_client.AppiumDriver;

/**
 * @author tien.hoang
 */
public abstract class AppiumBaseClass {

    protected AppiumDriver driver() {
        return AppiumController.instance.getDriver();
    }
}
