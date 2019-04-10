package at_asiantech.pages.LoginOrRegister;

import at_asiantech.utils.Constant;
import io.appium.java_client.MobileDriver;

/**
 * @author tien.hoang
 */
public class LoginOrRegisterPageAndroid extends LoginOrRegisterPage {
    public LoginOrRegisterPageAndroid(MobileDriver driver) {
        super(driver);
    }

    @Override
    public void openLoginScreen() {
        waitForElement(btnSignIn, Constant.DEFAULT_TIME_OUT);
        btnSignIn.click();
    }

    @Override
    public boolean isPageDisplayed() {
        return isElementPresented(btnSignIn);
    }

    @Override
    public void navigateTo() {
        if (!isPageDisplayed()) {
            getDrive().launchApp();
        }
    }
}
