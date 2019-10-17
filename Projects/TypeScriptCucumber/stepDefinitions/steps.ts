import { Given, When, Then } from "cucumber";
import { async } from "q";
import { Calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";

var expect = chai.expect;
let calc = new Calculator();
let ah = new angularHomePage();

Given('I will navigate to calculator site',async ()=> {
    await browser.get('http://juliemr.github.io/protractor-demo/')
});


Given('I will navigate to {string} page', async (string) => {
    if(string=="calc")
    {
        await browser.get('http://juliemr.github.io/protractor-demo/')
    }
    else if(string=="AngularJs")
    {
    await browser.get("https://angularjs.org/");
    }
  });


  When('i clicked on header link', async () => {
    await ah.angularLink.click();
  });


  When('you will navigate to angular page', async () => {
    console.log("Navigating to new angular page")
  });


  Then('you will enter {string} in search box', async (string) => {
    await ah.search.sendKeys(string);
    await browser.sleep(3000)
  });


When('i add 2 numbers called {string} and {string}',async (string, string2)=> {
    await calc.firstEditbox.sendKeys(string)
    await calc.secondEditbox.sendKeys(string2)
});


Then('the output displays should be {string}',async (string) => {
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string)
    })
});