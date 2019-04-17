package at_asiantech.pages.Login;

import at.base.BasePage;
import at.base.Const;
import at.core.PageFactory;
import at_asiantech.pages.LoginOrRegister.LoginOrRegisterPage;
import io.appium.java_client.MobileDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSFindBy;

import java.util.Set;

/**
 * @author at-phuongdang
 */
public abstract class LoginPage extends BasePage {

    @AndroidFindBy(id = "btnLogin")
    @iOSFindBy(id = "submitButton")
    private MobileElement btnLogin;

    @AndroidFindBy(id = "edtEmail")
    @iOSFindBy(id = "usernameTextField")
    private MobileElement edtEmail;

    @AndroidFindBy(id = "edtPassword")
    @iOSFindBy(id = "passwordTextField")
    private MobileElement edtPassword;

    @AndroidFindBy(id = "tvForgotPassword")
    @iOSFindBy(id = "forgetPassswordButton")
    private MobileElement tvForgotPassword;

    @AndroidFindBy(id = "rlNickName")
    @iOSFindBy(id = "nickNameTextField")
    private MobileElement viewNickName;

    @AndroidFindBy(id = "edtNickName")
    @iOSFindBy(id = "nickNameTextField")
    private MobileElement edtNickName;

    @AndroidFindBy(id = "btnDecide")
    @iOSFindBy(id = "submitButton")
    private MobileElement btnDecide;

    public LoginPage(MobileDriver driver) {
        super(driver);
    }

    public void waitForLoginPage() {
        waitForElementDisplay(edtEmail, Const.TIME_OUT_NORMAL_ELEMENT);
    }

    public void onClickForgotPassword() {
        tvForgotPassword.click();
    }

    public Boolean onDisplayWebViewForgotPassword(String url) {
        Set<String> contextNames = getDrive().getContextHandles();
        for (String contextName : contextNames) {
            if (contextName.contains("WEBVIEW")) {
                return true;
            }
        }
        return false;
    }

    public void inputUserName(String userName) {
        edtEmail.clear();
        edtEmail.sendKeys(userName);
    }

    public void inputPassword(String password) {
        edtPassword.clear();
        edtPassword.sendKeys(password);
    }

    public Boolean isLoginButtonDisplayed() {
        if (btnLogin != null) {
            try {
                return btnLogin.isDisplayed();
            } catch (Exception ignored) {
                // No-opt
            }
        }
        return false;
    }

    @Override
    public void navigateTo() {
        if (!isPageDisplayed()) {
            LoginOrRegisterPage loginOrRegisterPage = new PageFactory<>(LoginOrRegisterPage.class).create();
            loginOrRegisterPage.navigateTo();
            loginOrRegisterPage.openLoginScreen();
        }
    }

    @Override
    public boolean isPageDisplayed() {
        return edtEmail.isDisplayed();
    }
}
