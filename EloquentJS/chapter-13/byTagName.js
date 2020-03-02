function byTagName(node, tagName) {
    let arr = [];

    function find(node) {
        for (i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];
            
            if (child.nodeType == document.ELEMENT_NODE) {
                if (child.nodeName == tagName) {
                    arr.push(child);
                }
                find(child);
            }
        }
    }

    find(node);
    return arr;
}