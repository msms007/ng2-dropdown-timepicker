import {
    AfterViewInit,
    Component, ElementRef, EventEmitter, forwardRef, Input, Output,
    ViewChild
} from '@angular/core';
import * as moment from 'moment';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MlabsNg2DropdownTimePickerComponent),
    multi: true
};
declare const $: any;
export class TimepickerConfig {
    appendTo = 'body';
    className?: string;
    closeOnWindowScroll? = false;
    disableTimeRanges?: any[];
    disableTextInput? = false;
    disableTouchKeyboard = false;
    durationTime: string;
    forceRoundTime? = false;
    lang?: Object = {am: 'am', pm: 'pm', AM: 'AM', PM: 'PM', decimal: '.', mins: 'mins', hr: 'hr', hrs: 'hrs'};
    maxTime?: string;
    minTime? = '12:00am';
    noneOption?: any;
    orientation?: string;
    roundingFunction?: Function;
    scrollDefault?: string;
    selectOnBlur? = false;
    show2400? = false;
    showDuration? = false;
    showOn?: string[];
    step? = 30;
    stopScrollPropagation? = false;
    timeFormat?: string;
    typeaheadHighlight? = true;
    useSelect? = false;
    wrapHours? = true;
}
@Component({
    selector: 'mlabs-ng2-dropdown-time-picker',
    template: `
        <input [(ngModel)]="value"
               class="form-control" #timeInput style="text-transform: uppercase"
               (blur)="onBlur()">`,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    styleUrls: ['./ng2-dropdown-timepicker.component.scss']
})
export class MlabsNg2DropdownTimePickerComponent implements AfterViewInit, ControlValueAccessor {
    @ViewChild('timeInput') timeInput: ElementRef;
    innerValue: any = '';
    @Input() options: TimepickerConfig;
    @Input() DateInput: Date;
    @Output() changeTime: EventEmitter<Object> = new EventEmitter();
    @Output() timeFormatError: EventEmitter<Object> = new EventEmitter();
    @Output() hideTimepicker: EventEmitter<Object> = new EventEmitter();
    @Output() selectTime: EventEmitter<Object> = new EventEmitter();
    @Output() showTimepicker: EventEmitter<Object> = new EventEmitter();
    @Output() timeRangeError: EventEmitter<Object> = new EventEmitter();

    constructor() {

    }

    ngAfterViewInit(): void {
        const self = this;
        const el = $(this.timeInput.nativeElement);
        el.timepicker('remove');
        this.options.maxTime = this.options.maxTime || '11:59pm';
        el.timepicker(this.options);
        el.on('changeTime', (event: Object) => {
            this.onUpdate(event);
            self.changeTime.emit();
        });
        el.on('timeFormatError', (event: Object) => {
            self.timeFormatError.emit(event);
        });
        el.on('hideTimepicker', (event: Object) => {
            self.hideTimepicker.emit(event);
        });
        el.on('selectTime', (event: Object) => {
            self.selectTime.emit();
        });
        el.on('showTimepicker', (event: Object) => {
            self.showTimepicker.emit(event);
        });
        el.on('timeRangeError', (event: Object) => {
            self.timeRangeError.emit(event);
        });
    }

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            const el = this.timeInput.nativeElement;
            let dateValue = $(el).timepicker('getTime');
            if (this.DateInput && dateValue) {
                const selectedDate = dateValue;
                dateValue = new Date(this.DateInput).setHours(selectedDate.getHours());
                dateValue = new Date(dateValue).setMinutes(selectedDate.getMinutes());
                this.onChangeCallback(new Date(dateValue));
            }
            if (!dateValue) {
                this.onChangeCallback(v);
            }

        }
    }

    onBlur() {
        this.onTouchedCallback();
    }

    private onUpdate(event: any) {
        const el = this.timeInput.nativeElement;
        const inputValue = el.value;
        if (inputValue) {
            this.value = inputValue;
            this.timeInput.nativeElement.dispatchEvent(new Event('change', {bubbles: true}));
        }
    }

    writeValue(value: any) {
        if (value && value !== this.innerValue) {
            this.innerValue = moment(value).format('hh:mm a');
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

}

