function search(path) {
    var xhr = new XMLHttpRequest();
    console.log(path)
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            eval('var searchResultsObj = ' + this.responseText);
            displaySearchResults(searchResultsObj);
        }
    };

    xhr.open("GET", path + window.location.search);
    xhr.send();
}

