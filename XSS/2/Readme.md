# DOM XSS in document.write sink using source location.search inside a select element

## SYNOPSIS
- Created a static site has a select element
- ```pcapId``` grabs the query string value of the url
- Concatenates ```pcapId``` as an option element of the parent select element
- Renders the the select element and its corresponding options onto the screen

## PAYLOAD
- URL encoded ```http://localhost:8080/?pcap=%22%3E%3C/select%3E%3Cimg%20src=1%20onerror=alert(1)%3E```
- Plaintext ```http://localhost:8080/?pcap="></select><img%20src=1%20onerror=alert(1)>```

## How to:
- Run build_docker
- Use the payload above
- You should see an alert window

#### Reference
DOM XSS in document.write sink using source location.search inside a select element
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element
