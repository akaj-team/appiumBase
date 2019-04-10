package at.core;

import io.appium.java_client.MobileDriver;
import io.appium.java_client.ios.IOSDriver;

import java.lang.reflect.Constructor;
import java.util.HashMap;
import java.util.Map;

/**
 * @author tien.hoang
 */
public class PageFactory<T> {
    private Class<T> clazz;
    private static Map<String, Object> pages = new HashMap<>();

    public PageFactory(Class<T> clazz) {
        this.clazz = clazz;
    }

    public T create() {
        String platform = null;
        if (AppiumController.instance.getDriver() instanceof IOSDriver) {
            platform = "IOS";
        } else {
            platform = "Android";
        }
        try {
            Class<?> newClazz = Class.forName(clazz.getName() + platform);
            String classHash = AppiumController.instance.getDriver().hashCode() + newClazz.getName();
            if (newClazz == null) {
                System.out.println(this.getClass().getSimpleName() + ": Can not create page from " + clazz.getName() + platform);
                newClazz = clazz;
            }
            if (pages.containsKey(classHash)) {
                return (T) pages.get(classHash);
            }
            System.out.println(this.getClass().getSimpleName() + ": Create instance for " + newClazz.getSimpleName());
            Constructor<?> ctor = newClazz.getConstructor(MobileDriver.class);
            Object object = ctor.newInstance(new Object[]{AppiumController.instance.getDriver()});
            pages.put(classHash, object);
            return (T) object;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
