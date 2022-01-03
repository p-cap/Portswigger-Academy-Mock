# Reflected DOM XSS

## SYNOPSIS
- The target site contains a vulnerable search field
- When passing a simple text inside the search field, it returns:
  - a HTML message stating the number of results found
  - a JSON response with the 200 status code
- "By experimenting with different search strings, you can identify that the JSON response is escaping quotation marks"
- According to lab solution:
"
As you have injected a backslash and the site isn't escaping them, when the JSON response attempts to escape the opening double-quotes character, it adds a second backslash. The resulting double-backslash causes the escaping to be effectively canceled out. This means that the double-quotes are processed unescaped, which closes the string that should contain the search term.

An arithmetic operator (in this case the subtraction operator) is then used to separate the expressions before the alert() function is called. Finally, a closing curly bracket and two forward slashes close the JSON object early and comment out what would have been the rest of the object. As a result, the response is generated as follows:

{"searchTerm":"\\"-alert(1)}//", "results":[]}
"

## PAYLOAD
- ```\"-alert(1)}//```

## How to:
- ```chmod 700 build_docker```
- Run build_docker
- Use the payload above
- You should see an alert window

### NOTE
- Tested on both Safari and Chrome
- Only works on CHROME

## REFERENCE
Reflected XSS \
https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-reflected

