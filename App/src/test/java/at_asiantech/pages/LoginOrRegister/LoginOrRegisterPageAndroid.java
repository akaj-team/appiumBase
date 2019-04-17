package at_asiantech.pages.LoginOrRegister;

import at.base.Const;
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
        waitForElementDisplay(btnSignIn, Const.TIME_OUT_NORMAL_ELEMENT);
        btnSignIn.click();
    }

    @Override
    public boolean isPageDisplayed() {
        return btnSignIn.isDisplayed();
    }

    @Override
    public void navigateTo() {
        if (!isPageDisplayed()) {
            getDrive().launchApp();
        }
    }
}
