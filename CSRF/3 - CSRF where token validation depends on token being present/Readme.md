# CSRF where token validation depends on token being present
- The attackology is the same as [CSRF vulnerability with no defenses
](https://github.com/p-cap/Portswigger-Academy-Mock/blob/main/CSRF/1%20-%20CSRF%20vulnerability%20with%20no%20defenses/Readme.md)
- Why? Because the request sent via the html page DOES NOT CONTAIN csrf value
- You can send a csrf value via input tag 

Inside the HTML file
```html
....
            <input type="hidden" name="email" value="pcap_panwed_you_one_more_tme@pcap.com">
            <input type="hidden" name="csrf" value="mycsrfbaby">
....
```

Inside the body request after the form performs the POST request
```
...
          email=test%40test.com&csrf=LJ91i9rpcIpNesfgDvv1I4qcvIfkIKKd
...
```
