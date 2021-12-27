# DOM XSS in innerHTML sink using source location.search

## SYNOPSIS
- Created a static page with a search field
- ```query``` variable gets the value of the key query srting named ```search```
- Renders the value of the ```search``` key if it contains a html element 

## PAYLOAD
- Plaintext ``` http://localhost:8081/?search=<div><svg onload=alert(1)></div>```
- URL encoded ```http://localhost:8081/?search=%3Cdiv%3E%3Csvg%20onload=alert(1)%3E%3C/div%3E```

## How to:
- Run build_docker
- Use the payload above
- You should see an alert window

### NOTE
- Tested on both Safari and Chrome
- Only works on CHROME

#### Reference
DOM XSS in innerHTML sink using source location.search
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-innerhtml-sink
