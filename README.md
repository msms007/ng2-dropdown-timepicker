# **Time picker for Angular2**

Angular2 wrapper around jQuery time picker by
---------------------------------------------
https://github.com/jonthornton/jquery-timepicker




**Requirements:**

1. Angular2 + 
2. jQuery version> 1.7
3. jonthornton/jquery-timepicker
4. moment

Note: Add these libraries into angular-cli scripts tag as follows
```
"scripts": [
                "../node_modules/jquery/dist/jquery.js",
                "../node_modules/moment/min/moment.min.js",
                "../node_modules/timepicker/jquery.timepicker.js"
            ],

```

**Usage:**
     <mlabs-ng2-dropdown-time-picker 
                [options]="{disableTextInput: false,
			      'timeFormat': 'h:i A',
			      showDuration: false}">
	 </mlabs-ng2-dropdown-time-picker>




**Importing**

import {MlabsNg2DropdownTimepickerModule} from './ng2-dropdown-timepicker/mlabs-ng2-dropdown-timepicker.module';


**Options and Events:**


Usage same as mentioned in https://github.com/jonthornton/jquery-timepicker.

Changing the options handles the destroy and initialize of time picker component by itself with new options.




