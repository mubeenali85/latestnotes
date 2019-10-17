import { browser, element, by } from "protractor";
import { Calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";

describe('Chain locators Demo', () => {

   it('open angular js website', async () => {

      let calc = new Calculator();
      await browser.get('http://juliemr.github.io/protractor-demo/')

      await calc.firstEditbox.sendKeys("3")
      await calc.secondEditbox.sendKeys("5")
      await calc.go.click();

      // await element(by.model("first")).sendKeys("3")
      // await  element(by.model("second")).sendKeys("5")
      //  await element(by.id("gobutton")).click();

      calc.getResult.getText().then(function (text) {
         console.log(text)
      })


   })

   it('Angular home page title validation', async () => {

      let ah = new angularHomePage();

      await browser.get("https://angularjs.org/");
      await ah.angularLink.click();
      await ah.search.sendKeys("hello");
      await browser.sleep(3000)
   })


})