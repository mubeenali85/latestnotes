import { ElementFinder, element, by } from "protractor";

export class Calculator
{

    firstEditbox:ElementFinder;
    secondEditbox:ElementFinder;
    go:ElementFinder;
    getResult:ElementFinder;

    constructor()
    {
        this.firstEditbox=element(by.model("first"));
        this.secondEditbox=element(by.model("second"));
        this.go=element(by.id("gobutton"));
        this.getResult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
        


    }


}