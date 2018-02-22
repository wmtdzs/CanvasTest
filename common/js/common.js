(function(win, doc) {
    win.onload = function() {
        setTagElement();
        setCodeElement();
    };

    function setTagElement() {
        var tagElement = doc.getElementsByClassName('tag');
        for (var i = 0, length = tagElement.length; i < length; i+=1) {
            tagElement[i].innerText = tagElement[i].getAttribute('data-code');
        }
    }

    function setCodeElement() {
        var codeElement = doc.getElementsByClassName('code');
        for (var i = 0, length = codeElement.length; i < length; i+=1) {
            for (var j = 0, jLength = codeElement[i].children.length; j < jLength; j+=1) {
                var lineNum = doc.createElement('span');
                lineNum.classList.add('number');
                var codeLine = doc.createElement('span');
                lineNum.innerText = (j + 1) + '.';
                codeElement[i].children[j].appendChild(lineNum);
                codeLine.innerText = codeElement[i].children[j].getAttribute('data-code');
                if (codeElement[i].children[j].getAttribute('data-indent')) {
                    codeLine.style.textIndent = codeElement[i].children[j].getAttribute('data-indent') + 'em';
                }
                codeElement[i].children[j].appendChild(codeLine);
            }
        }
    }
}(window, document));