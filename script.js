function doFirst(){
	if(typeof(Storage)!=="undefined"){
		localStorage.content="hier bin ich ";
		content = document.getElementById('content');
		content.innerHTML="You have clicked the button " + localStorage.content + " time(s).";
	  }
	else{
		document.getElementById("cplSite").innerHTML="<p>Sie benutzen einen veralteten Browser, deshalb kann die seite nicht richtig dargestellt werden und sie erhalten nur die wichtigsten Informationen und Kontaktdaten.</p>";
	  }
}

function startseite()
{	
	change('out');
	setTimeout("startseiteDelay()", 2000);
}

function startseiteDelay(){
	localStorage.content="2. Versuch";
	content.innerHTML=localStorage.content;
	change('ins');
}

function change(inOrOut ){
	content.className = inOrOut;
}

function veranstaltungen()
{	
	change('out');
	setTimeout("veranstaltungenDelay()", 2000);
}


function veranstaltungenDelay(){
	localStorage.content=	 "Die Frage nach dem Preis ist eine der meistgestellten überhaupt. Leider lässt sich diese nicht pauschal beantworten, denn jede Veranstaltung ist sehr individuell"
							+"und hängt sehr von den Rahmenbedingungen ab."
 							+"Um ihre Veranstaltung optimal gestalten zu können, benötigen wir einige Informationen von Ihnen:"
							+"Datum";
	content.innerHTML=localStorage.content;
	change('ins');
}

function djTeam()
{	
	change('out');
	setTimeout("djTeamDelay()", 2000);
}


function djTeamDelay(){
	localStorage.content=	"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>"
						   +"<article><p>Hier haben wir einen tollen 30. bespielt :) </p><img src='bilder/test.jpg'\></article>";
	content.innerHTML=localStorage.content;
	change('ins');
}


window.addEventListener("load",doFirst,false);