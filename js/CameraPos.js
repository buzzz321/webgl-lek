var MyLookAt = function() {
	//more or less stolen from stat.js...
	
	var container = document.createElement( 'div' );
	container.id = 'lookatxyz';
	container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

	var lookatDiv = document.createElement( 'div' );
	lookatDiv.id = 'lookatText';
	lookatDiv.style.cssText = 'color:#0ff00ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	lookatDiv.innerHTML = 'XYZ';
	container.appendChild( lookatDiv );
	
	var lookatText = document.createElement( 'div' );
	lookatText.id = 'lookatText';
	lookatText.style.cssText = 'color:#000ff00;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	lookatText.innerHTML = 'RPG';
	lookatDiv.appendChild( lookatText );

	var updateGraph = function ( dom ) {
		
		var child = dom.appendChild( dom.firstChild );
		
	}
	
	return {
		REVISION: 1,
		domElement: container,
		
		update: function (xpos, ypos, zpos) {
			
			lookatText.textContent = ' XYZ (' + xpos + '::' + ypos + '::' + zpos + ')';
			updateGraph( lookatText );
			
		}
	}
};
