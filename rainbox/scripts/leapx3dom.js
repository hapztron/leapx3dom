// document.onload = function() {
	/* Start: Leap Motion's Gesture */
	var controller = new Leap.Controller({enableGestures: true});
	var transx = transy = transz = rotationx = rotationy = 0;
	var ROTATION_INC = 0.005;
	var DISTANCE_CHK = 20;
	controller.loop(function(frame) {
        if (frame.hands.length == 2) {
        	// Moves, Zoom in-out
	        if ((frame.hands.length == 2) && ((frame.hands[0].fingers.length == 5) && (frame.hands[1].fingers.length == 5))) {
	        	transx = (((frame.hands[0].palmPosition[0] + frame.hands[1].palmPosition[0]) / 2) / 5);
	        	transy = (((frame.hands[0].palmPosition[1] + frame.hands[1].palmPosition[1]) / 2) / 3) - 100;
	        	transz = (((frame.hands[0].palmPosition[2] + frame.hands[1].palmPosition[2]) / 2) / 5);
		        translation.setAttribute('translation', transx + ' ' + transy + ' ' + transz);
			}
	    } else if ((frame.hands.length == 1) && (frame.hands[0].fingers.length == 5)) {
	    	// Rotate Roll
    		if (frame.hands[0].palmPosition[0] < -DISTANCE_CHK) {
	    		rotationy -= ROTATION_INC;
	    	} else if (frame.hands[0].palmPosition[0] > DISTANCE_CHK) {
	    		rotationy += ROTATION_INC;
	    	}
	    	rotation_yaw.setAttribute('rotation', '0 1 0 ' + rotationy);

	    	// Rotate Yaw
	    	if (frame.hands[0].palmPosition[2] < -DISTANCE_CHK) {
	    		rotationx -= ROTATION_INC;
	    	} else if (frame.hands[0].palmPosition[2] > DISTANCE_CHK) {
	    		rotationx += ROTATION_INC;
	    	}
	    	rotation_roll.setAttribute('rotation', '1 0 0 ' + rotationx);
	    }
	});
	/* End: Leap Motion's Gesture */

	/* Start: Leap Motion's Status */
	controller.on('ready', function() {
		document.getElementById('leapstation').innerHTML = "Ready";
	});
	controller.on('disconnect', function() {
		document.getElementById('leapstation').innerHTML = "Disconnect";
	});
	controller.on('focus', function() {
		document.getElementById('leapstation').innerHTML = "Available!";
	});
	controller.on('deviceConnected', function() {
		document.getElementById('leapstation').innerHTML = "Device Connected";
	});
	controller.on('deviceDisconnected', function() {
		document.getElementById('leapstation').innerHTML = "Device Disconnected";
	});
	/* End: Leap Motion's Status */
// }