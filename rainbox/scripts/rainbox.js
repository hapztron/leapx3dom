/*--------------------------------------------------------------------
 * Licensed under GNU GPLv2 (c) Hassadee Pimsuwan - hapztron@gmail.com
 * ---------------------------------------------------------------- */
function createScene() {
	createCube(0, 0, 0);
}

function objMaterial(diffColor, specColor, emissColor, shininess, transparent) {
	var Material = document.createElement('Material');

	if(diffColor !== null) {
		Material.setAttribute('diffuseColor', diffColor);
	} else {
		Material.setAttribute('diffuseColor', '0.9 0.9 0.9');
	}
	if (specColor !== null) {
		Material.setAttribute('specularColor', specColor);
	}
	if(emissColor !== null) {
		Material.setAttribute('emissiveColor', emissColor);
	}
	if(shininess !== null) {
		Material.setAttribute('shininess', shininess);
	}
	if(transparent !== null) {
		Material.setAttribute('transparency', transparent);
	}
	return Material;
}

function createCube(xPos, yPos, zPos) {
	var Transform = document.createElement('Transform');
	Transform.setAttribute('translation', xPos + ' ' + yPos + ' ' + zPos);
	Transform.setAttribute('scale', '1 1 1');
	Transform.setAttribute('rotation', '0 1 0 0');

	var N = 7;
	var range = 2;
	var x = y = z = -(N / 2) * range;

	for (var r = 0; r <= N; r++) {
		for (var g = 0; g <= N; g++) {
			for (var b = 0; b <= N; b++) {
				var innerTransform = document.createElement('Transform');
				innerTransform.setAttribute('translation', x + ' ' + y + ' ' + z);
				innerTransform.setAttribute('scale', '1 1 1');
				innerTransform.setAttribute('rotation', '1 1 0 -0.78539816339745');

				Transform.appendChild(innerTransform);

				var Shape = document.createElement('Shape');
				innerTransform.appendChild(Shape);

				var Appearance = document.createElement('Appearance');
				Shape.appendChild(Appearance);

				var Material = objMaterial(r/10 + ' ' + g/10 + ' ' + b/10, r/10 + ' ' + g/10 + ' ' + b/10, null, 0.2, 0.15);
				Appearance.appendChild(Material);

				var Box = document.createElement('Box');
				Box.setAttribute('size', '1 1 1');
				Box.setAttribute('solid', 'true');
				Shape.appendChild(Box);

				x += range;
			}
			x =  -(N / 2) * range;
			y += range;
		}
		x = -(N / 2) * range;
		y = -(N / 2) * range;
		z += range;
	}
	var CubeAppear = document.getElementById('CubeAppear');
	CubeAppear.appendChild(Transform);
}