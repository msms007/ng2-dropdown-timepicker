import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MlabsNg2DropdownTimepickerModule} from './ng2-dropdown-timepicker/mlabs-ng2-dropdown-timepicker.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MlabsNg2DropdownTimepickerModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
