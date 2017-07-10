# **Time picker for Angular2/4**

Angular2/4 wrapper around jQuery time picker by
---------------------------------------------
https://github.com/jonthornton/jquery-timepicker




**Requirements:**

1. Angular2 + 
2. jQuery version> 1.7
3. jonthornton/jquery-timepicker
4. moment
5. Bootstrap 3

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

**CSS Import**
 
Import the following style file into app -> Styles.scss
ng2-dropdown-timepicker.component.scss
```
@import "~bootstrap-sass/assets/stylesheets/bootstrap";
@import "~/ng2-dropdown-timepicker/ng2-dropdown-timepicker.component";
```
**Options and Events:**

![ng2dropdowntimepicker](https://user-images.githubusercontent.com/4041250/28027980-05a0a2d2-6569-11e7-8d22-c484936c87c3.png)


Usage same as mentioned in https://github.com/jonthornton/jquery-timepicker.

Works with both Template and Reactive Forms.






