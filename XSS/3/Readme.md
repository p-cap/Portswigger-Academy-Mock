# DOM XSS in innerHTML sink using source location.search

## SYNOPSIS
- Created a static page with a search bar
- The submit button triggers a get request via the action attribute of the form
- ```doSearchQuery``` function pulls a query string that contains search key 

## PAYLOAD
Plaintext ```<div><svg onload=alert(1)></div>```

## How to
- Run build_docker
- Use the payload above
- You should see an alert window

### Reference:
DOM XSS in innerHTML sink using source location.search \
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-innerhtml-sink
