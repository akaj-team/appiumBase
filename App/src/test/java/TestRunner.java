import at.core.CucumberRunnerBase;
import cucumber.api.CucumberOptions;

@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"at_asiantech/stepdefs"},
        tags = {"not @Ignore"},
        plugin = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
class TestRunner extends CucumberRunnerBase {

}