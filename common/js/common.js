(function(win, doc) {
    win.onload = function() {
        setTagElement();
    };

    function setTagElement() {
        var tagElement = doc.getElementsByClassName('tag-line');
        for (var i = 0, length = tagElement.length; i < length; i+=1) {
            tagElement[i].innerText = tagElement[i].getAttribute('data-code');
        }
    }
}(window, document));