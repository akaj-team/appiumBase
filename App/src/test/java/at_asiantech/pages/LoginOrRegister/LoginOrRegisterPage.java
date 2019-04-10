package at_asiantech.pages.LoginOrRegister;

import at.base.BasePage;
import at_asiantech.utils.Constant;
import io.appium.java_client.MobileDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSFindBy;

/**
 * @author at-phuongdang
 */
public abstract class LoginOrRegisterPage extends BasePage {

    @AndroidFindBy(id = "btnSignIn")
    @iOSFindBy(id = "signInButton")
    public MobileElement btnSignIn;

    public LoginOrRegisterPage(MobileDriver driver) {
        super(driver);
    }

    public void openLoginScreen() {
        waitForElement(btnSignIn, Constant.DEFAULT_TIME_OUT);
        btnSignIn.click();
    }

    public void openApp() {
        getDrive().launchApp();
    }
}
