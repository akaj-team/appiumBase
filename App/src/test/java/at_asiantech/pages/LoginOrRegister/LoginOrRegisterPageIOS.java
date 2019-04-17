package at_asiantech.pages.LoginOrRegister;

import at.core.AppiumController;
import at_asiantech.utils.Constant;
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
        return btnSignIn.isDisplayed();
    }

    private void reInstallApp() {
        getDrive().removeApp(Constant.TryIT_BUNDLE_ID);
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
