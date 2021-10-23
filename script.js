function flipArrow(element) {
	if(element.innerHTML.indexOf("v ") > -1) {
		element.innerHTML = "> " + element.innerHTML.substring(element.innerHTML.indexOf("v ") + 2)
	}
	else {
		element.innerHTML = "v " + element.innerHTML.substring(element.innerHTML.indexOf("&gt;") + 5)
	}
}