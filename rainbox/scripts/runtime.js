/*--------------------------------------------------------------------
 * Licensed under GNU GPLv2 (c) Hassadee Pimsuwan - hapztron@gmail.com
 * ---------------------------------------------------------------- */
function setRuntime(typename, id)
{	
	var configure = document.getElementById(id);
	
	switch (typename)
	{
		case "walk": configure.runtime.walk(); break;
		case "fly": configure.runtime.fly(); break;
		case "examine": configure.runtime.examine(); break;
		case "lookAround": configure.runtime.lookAround(); break;
		case "lookAt": configure.runtime.lookAt(); break;
		case "game": configure.runtime.game(); break;
		case "resetView": configure.runtime.resetView(); break;
		case "uprightView": configure.runtime.uprightView(); break;
		case "showAll": configure.runtime.showAll(); break;
		case "nextView": configure.runtime.nextView(); break;
		case "prevView": configure.runtime.prevView(); break;
		case "upSpeed": setSpeed("up", id); break;
		case "downSpeed": setSpeed("down", id); break;
		default: configure.runtime.examine();
	}
	getNavigationType(id);
}

function togglePoint()
{
	var configure = document.getElementById("x3dom-scene");
	configure.runtime.togglePoints();
}

function setSpeed(value, id)
{
	var configure = document.getElementById(id);
	var currentSpeed = configure.runtime.speed();
	
	if (value == "up") {
		currentSpeed += 1;
		configure.runtime.speed(currentSpeed);
	} else if ((value == "down") && (currentSpeed > 1)) {
		currentSpeed -= 1;
		configure.runtime.speed(currentSpeed);
	} else {
		currentSpeed = currentSpeed;
	}
	if (document.getElementById('showSpeed')) {
		document.getElementById('showSpeed').innerHTML = currentSpeed;
	}
}

function getNavigationType(id)
{
	var configure = document.getElementById(id);
	
	var navigationTypeName = configure.runtime.navigationType();
	var currentViewpoint = configure.runtime.viewpoint();
	
	if (document.getElementById('showNavigationType')) {
		document.getElementById('showNavigationType').innerHTML = navigationTypeName;
	}
}

function toggleFullscreen(id)
{
	var toggleFS_ID = document.getElementById(id);
	
	if ((document.webkitIsFullScreen == false) || (document.mozFullScreen == false)) {
		if (document.webkitIsFullScreen == false) {
			toggleFS_ID.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		} else if (document.mozFullScreen == false) {
			toggleFS_ID.mozRequestFullScreen();
		} else {
			console.assert(false);
		}
	} else {
		if (document.webkitIsFullScreen == true) {
			document.webkitCancelFullScreen();
		}  else if (document.mozFullScreen == true) {
			document.mozCancelFullScreen();
		} else {
			console.assert(false);
		}
	}
}