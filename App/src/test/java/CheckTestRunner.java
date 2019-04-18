import at.core.CucumberRunnerBase;
import cucumber.api.CucumberOptions;

@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"at_asiantech/stepdefs"},
        tags = {"not @Ignore", "@Test"},
        plugin = {
                "pretty",
                "junit:target/cucumber-reports/junit-report.xml",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
class CheckTestRunner extends CucumberRunnerBase {
}
