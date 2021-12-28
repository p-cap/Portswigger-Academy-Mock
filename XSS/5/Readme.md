# DOM XSS in jQuery selector sink using a hashchange event

## SYNOPSIS
-  Site has 9 li elements 
-  You can jump to different li elements by adding an anchor link at the end of the url ```htttp://localhost:8085/#list1```
-   The jquery selector will wait for a hashchange event to occur which enables the jump to the corresponding list

## PAYLOAD
- ```<iframe src="https://ac731fc31e7e5a3fc02905c6001900c5.web-security-academy.net#" onload="this.src+='<img src=1 onerror=alert(1)>'">`` via server
- I STILL NEED SOME CLARIFICATION ON HOW THIS WORKS

## How to:
- Run build_docker
- Use the payload above
- You should see an alert window

### NOTE
- Tested on both Safari and Chrome
- Only works on CHROME

#### Reference
DOM XSS in jQuery selector sink using a hashchange event \
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event
