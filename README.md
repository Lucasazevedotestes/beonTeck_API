# Challenge

Hi there, please find here the required Steps to reproduce the test cases and report.

Pre-requisites:
-  Project should be downloaded from shared link of GitHub;
-  Need to have Maven installed and configured;

---------------

<h3>Steps to Run the Test Scenarios</h3>

1. Download and Open the project folder inside of VSCode;
2. Open the Terminal inside of VSCode and Run the command: NPX Cypress Open;
3. Select End to End and click on the apiTestingGet.cy.js  | apiTestingPostPut.cy.js | delete.cy.js files;

If the dependencies are correctly installed, the test scenarios will be executed.

---------------

<h3>Project Explanation</h3>
1. At first, I imported the API documentation to Postman;

2. I started validating the status code 200 for all the Methods;

3. So I validate also some of the exceptional scenarios like invalid inputs;

4. Validate also some header option like content-type and body content as well;

5. I organized the json inside fixture file and just called the data inside of the test making it easier to maintain and to understand;

6. I used baseUrl in Cypress.config and just inserted the path inside of the test, for the same reason as previous step.

7. Also used concatination for url in order make it reusable in a few cases.

---------------

<h3>    Please, find attached the Project Structure and Screenshots of the created code. </h3>


<h4><center>SearchPage.js:
<br> </br>
<div align="left">
<img src="Screenshot 2024-01-03 at 5.42.24 AM.png" width="700px"/>
</div>

<h4><center>validSearch.cy.js:
<br> </br>
<div align="left">
<img src="Screenshot 2024-01-03 at 5.41.21 AM.png" width="700px"/>
</div>  

<h4><center>cypress.config.js:
<br> </br>
<div align="left">
<img src="Screenshot 2024-01-03 at 5.43.19 AM.png" width="700px"/>
</div>  
