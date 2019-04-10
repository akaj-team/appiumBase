package at_asiantech.pages.LoginOrRegister;

import at.core.AppiumController;
import io.appium.java_client.MobileDriver;

/**
 * @author tien.hoang
 */
public class LoginOrRegisterPageIOS extends LoginOrRegisterPage {
    public LoginOrRegisterPageIOS(MobileDriver driver) {
        super(driver);
    }

    @Override
    public void openLoginScreen() {
        turnOffNotification();
        btnSignIn.click();
    }

    private void turnOffNotification() {
        try {
            getDrive().switchTo().alert().accept();
        } catch (Exception e) {
            // No-op.
        }
    }

    @Override
    public boolean isPageDisplayed() {
        turnOffNotification();
        return isElementPresented(btnSignIn);
    }

    private void reInstallApp() {
        getDrive().removeApp("jp.co.trygroup.tryit.student.staging");
        String appPath = AppiumController.instance.getDriver().getCapabilities().getCapability("app").toString();
        getDrive().installApp(appPath);
        getDrive().launchApp();
    }

    @Override
    public void navigateTo() {
        if (!isPageDisplayed()) {
            reInstallApp();
        }
    }
}
