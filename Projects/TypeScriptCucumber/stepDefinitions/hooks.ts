
import {After,Before, Status} from "cucumber";
import { browser } from "protractor";


Before({tags: "@Calculatortesting"}, function () {
  browser.driver.manage().window().maximize();

});

Before({tags: "@AngularTest"}, function () {
  console.log("I need to execute first")
});


After({tags: "@AngularTest"}, function () {
    console.log("Test is blocked")
  });



  After(async function(scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if (scenario.result.status=== Status.FAILED)
    {
      //code to take screesnhot
     const screenshot= await browser.takeScreenshot();
   
          this.attach(screenshot,"image/png");
          
    }
  
  
  });
  
  
  