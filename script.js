function doFirst(){
	if(typeof(Storage)!=="undefined"){
		localStorage.content=	"<article>"+
									"<h4>Willkommen im DJ-Team Bereich</h4>"+
									"<p>Wir organisieren ihre Party und machen sie zu einem Einmaligen Erlebnis"+
									"Schauen sie doch mal in unserem Terminkalender ob wir nicht einen Gemeisamen Termin frei haben"+
									"Sollte dies der Fall sein schrieben sie uns doch einfach eine e-Mail"+
									"Viel Spaß beim stöbern in unserer Bildergalerie</p>"+
								"</article>";
		content = document.getElementById('content');
		content.innerHTML=localStorage.content;
	  }
	else{
		document.getElementById("cplSite").innerHTML="<p>Sie benutzen einen veralteten Browser, deshalb kann die Seite nicht richtig dargestellt werden und sie erhalten nur die wichtigsten Informationen und Kontaktdaten.</p>";
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
	localStorage.content=	"<article>"+
								"<h4>Preislich ???</h4>"+
								"<p>Die Frage nach dem Preis ist eine der meistgestellten überhaupt. Leider lässt sich diese nicht pauschal beantworten, denn jede Veranstaltung ist sehr individuell"+
								"und hängt sehr von den Rahmenbedingungen ab."+
 								"Um ihre Veranstaltung optimal gestalten zu können, benötigen wir einige Informationen von Ihnen:"+
								"Datum</p>"+
							"</article>";
	content.innerHTML=localStorage.content;
	change('ins');
}

function equipmentverleih()
{	
	change('out');
	setTimeout("equipmentverleihDelay()", 2000);
}


function equipmentverleihDelay(){
	localStorage.content=	 "<article>"+
								"<h4>Preislich ???</h4>"+
								"<p>Die Frage nach dem Preis ist eine der meistgestellten überhaupt. Leider lässt sich diese nicht pauschal beantworten, denn jede Veranstaltung ist sehr individuell"+
								"und hängt sehr von den Rahmenbedingungen ab."+
	 							"Um ihre Veranstaltung optimal gestalten zu können, benötigen wir einige Informationen von Ihnen:"+
								"Datum</p>"+
							"</article>";
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

function topTen()
{	
	change('out');
	setTimeout("topTenDelay()", 2000);
}

function topTenDelay(){
	localStorage.content=	"<article><p>hier die top Ten!!!</p></article>";
	content.innerHTML=localStorage.content;
	change('ins');
}


window.addEventListener("load",doFirst,false);