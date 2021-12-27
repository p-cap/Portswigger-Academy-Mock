# DOM XSS in jQuery anchor href attribute sink using location.search source

## SYNOPSIS
-  jQuery library's $ selector function finds an anchor element, 
-  and changes its href attribute using data from location.search

## PAYLOAD
- Plaintext ```http://localhost:8082/?returnPath=javascript:alert(1);``

## How to:
- Run build_docker
- Use the payload above
- You should see an alert window

### NOTE
- Tested on both Safari and Chrome
- Only works on CHROME

#### Reference
DOM XSS in jQuery anchor href attribute sink using location.search source \
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink

HTML <a> href Attribute \
https://www.w3schools.com/tags/att_a_href.asp
