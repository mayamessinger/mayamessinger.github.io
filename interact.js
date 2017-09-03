function switchTab(event, tabName)	{
	var i, tabcontent, tabbs;

	tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabbs = document.getElementsByClassName("tabb");
    for (i = 0; i < tabbs.length; i++) {
        tabbs[i].className = tabbs[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}