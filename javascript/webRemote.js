webiopi().ready(function() {
        // Following function will process data received from set/getLightHours macro.
        var updateLightHours = function(macro, args, response) {
            var hours = response.split(";");
            // Following lines use jQuery functions
            $("#inputOn").val(hours[0]);
            $("#inputOff").val(hours[1]);
        }

        // Immediately call getLightHours macro to update the UI with current values
        // "getLightHours" refers to macro name
        // [] is an empty array, because getLightHours macro does not take any argument
        // updateLightHours is the callback function, defined above
        webiopi().callMacro("getLightHours", [], updateLightHours);
        
        // Create a button to call setLightHours macro
        var sendButton = webiopi().createButton("sendButton", "Send", function() {
           // Arguments sent to the macro
            var hours = [$("#inputOn").val(), $("#inputOff").val()];
            // Call the macro
            webiopi().callMacro("setLightHours", hours, updateLightHours);
        });

        // Append the button to the controls box using a jQuery function
        $("#controls").append(sendButton);

				//Create a power button to call the tvPower macro
				var powerButton = webiopi().createButton("powerButton", "Power", function() {
				    //Call Macro
				    webiopi().callMacro("tvPower", [], updateLightHours);
				});

				// Append the button to the controls box
				$("#controls").append(powerButton);
				
				//Create a power button to call the tvVolumeUp macro
				var volUpButton = webiopi().createButton("volUpButton", "VolUp", function() {
				    //Call Macro
				    webiopi().callMacro("tvVolumeUp", [], updateLightHours);
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