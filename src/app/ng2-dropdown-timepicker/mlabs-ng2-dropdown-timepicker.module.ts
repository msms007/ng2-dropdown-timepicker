import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MlabsNg2DropdownTimePickerComponent} from './ng2-dropdown-timepicker.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        MlabsNg2DropdownTimePickerComponent
    ],
    exports: [MlabsNg2DropdownTimePickerComponent]
})
export class MlabsNg2DropdownTimepickerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MlabsNg2DropdownTimepickerModule,
            providers: []
        }
    }
}
