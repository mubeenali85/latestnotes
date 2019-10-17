Feature: I am going to validate my calculator Apps


@Calculatortesting
Scenario: Calculator add functionlaity testing

Given I will navigate to calculator site
When i add 2 numbers called "3" and "5"
Then the output displays should be "8"

@Calculatortesting
 Scenario: Calculator add functionlaity testing

 Given I will navigate to "calc" page
 When i add 2 numbers called "2" and "3"
 Then the output displays should be "5" 

@AngularTest
Scenario Outline: Calculator add functionlaity testing

Given I will navigate to "AngularJs" page
When i clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Examples:
| key | 
| hello  |
| hey    |