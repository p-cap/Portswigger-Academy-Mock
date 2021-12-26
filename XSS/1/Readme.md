# DOM XSS in document.write sink using source location.search

## SYNOPSIS
- Created an static website that contains a static image 
- The function in the script tag pulls argument from the query string
- The value is concatenated with the ```src``` attribute of the img tag

## PAYLOAD
```http://localhost:8080?search="><svg onload=alert(1)>```

## How to:
- Run build_docker
- Use the payload above
- You should see an alert window


#### Reference
DOM XSS in document.write sink using source location.search \
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink



