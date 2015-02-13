webiopi().ready(function() {
				//Create a power button to call the tvPower macro
				var powerButton = webiopi().createButton("powerButton", "Power", function() {
				    //Call Macro
				    webiopi().callMacro("tvPower", []);
				});

				// Append the button to the controls box
				$("#controls").append(powerButton);
				
				//Create a power button to call the tvVolumeUp macro
				var volUpButton = webiopi().createButton("volUpButton", "VolUp", function() {
				    //Call Macro
				    webiopi().callMacro("tvVolumeUp");
				});

				// Append the button to the controls box
				$("#controls").append(volUpButton);

        // Create a "Light" labeled button for GPIO 17
        var button = webiopi().createGPIOButton(17, "Light");

        // Append the button to the controls box
        $("#controls").append(button);

        // Refresh GPIO buttons
        // pass true to refresh repeatedly of false to refresh once
        webiopi().refreshGPIO(true);

});