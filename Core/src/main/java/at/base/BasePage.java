package at.base;

import io.appium.java_client.MobileDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

/**
 * @author tien.hoang
 */
public abstract class BasePage {
    private MobileDriver driver;

    public BasePage(MobileDriver driver) {
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
        this.driver = driver;
    }

    public MobileDriver getDrive() {
        return driver;
    }

    public void waitForElementDisplay(MobileElement element, int timeOutInSecond) {
        isElementDisplayed(element, timeOutInSecond);
    }

    public abstract boolean isPageDisplayed();

    public abstract void navigateTo();

    private boolean isElementDisplayed(WebElement element, int timeOutInSecond) {
        boolean isVisible = false;
        WebDriverWait wait = new WebDriverWait(driver, timeOutInSecond);
        try {
            if (wait.until(ExpectedConditions.visibilityOf(element)) != null) {
                isVisible = true;
            }
        } catch (Exception e) {
            // No-opt
        }
        driver.manage().timeouts().implicitlyWait(Const.TIME_OUT_MIN_ELEMENT, TimeUnit.SECONDS);
        return isVisible;
    }
}
