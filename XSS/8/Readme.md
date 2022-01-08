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

## WHY STILL NEEDS WORK?
When trying to submit the value inside the field, it would append it into the query string and call the expressjs endpoint.
There are two things happenning here:
- When I use Burpsuite, the return I am getting from the endpoint is a 302
- But, with dev tools, I am getting the expected json return 
- Why? Why? Why?

## How to:
- run the script below 
- Create a script named ```clone_sub``` and copy/paste the source below
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
- ```chmod clone_sub```
- ```clone_sub XSS/8 https://github.com/p-cap/Portswigger-Academy-Mock.git```
- ```git branch``` to check if the master branch exists
- ```git checkout master``` to switch branches
- Change into the directory into the newly cloned subdirectory

## Reference
HTML Entities   
https://www.w3schools.com/HTML/html_entities.asp

How to clone a subdirectory of a git project (not downloading the zip) \
https://dev.to/sanixdarker/git-cloning-a-subdirectory-of-a-gi-project-2mld

