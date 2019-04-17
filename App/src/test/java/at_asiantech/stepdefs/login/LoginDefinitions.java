package at_asiantech.stepdefs.login;

import at.base.BaseDefinitions;
import at.core.PageFactory;
import at_asiantech.pages.Login.LoginPage;
import at_asiantech.pages.LoginOrRegister.LoginOrRegisterPage;
import cucumber.api.java8.En;
import org.testng.Assert;

/**
 * @author at-phuongdang
 */
public class LoginDefinitions extends BaseDefinitions implements En {

    private static LoginPage loginPage = new PageFactory<>(LoginPage.class).create();
    private static LoginOrRegisterPage loginOrRegisterPage = new PageFactory<>(LoginOrRegisterPage.class).create();

    public LoginDefinitions() {
        
        Given("^Open screen ログイン Login screen$", () -> checkAppStateAndGoToLoginPage(true));

        Given("^Login page$", () -> {
            loginOrRegisterPage.openLoginScreen();
            loginPage.waitForLoginPage();
        });

        When("^Tap on button パスワードを忘れた方はこちら Forgot password$", () -> loginPage.onClickForgotPassword());

        Then("^Show a Web view with link \"([^\"]*)\"$", (String url) -> Assert.assertTrue(loginPage.onDisplayWebViewForgotPassword(url)));

        Given("^ログイン Login screen$", () -> {
            loginOrRegisterPage.openLoginScreen();
            loginPage.waitForLoginPage();
        });

        When("^I input username with \"([^\"]*)\"$", (String userName) -> loginPage.inputUserName(userName));

        And("^I input password with \"([^\"]*)\"$", (String password) -> loginPage.inputPassword(password));

        Then("^Button ログイン Login button is not displayed$", () -> Assert.assertFalse(loginPage.isLoginButtonDisplayed()));

        And("^I input wrong password with \"([^\"]*)\"$", (String password) -> loginPage.inputPassword(password));

        Then("^Button ログイン Login button is Display$", () -> Assert.assertTrue(loginPage.isLoginButtonDisplayed()));
    }

    private void checkAppStateAndGoToLoginPage(Boolean isFirst) {
        loginOrRegisterPage.openApp();
        loginOrRegisterPage.openLoginScreen();
    }
}
