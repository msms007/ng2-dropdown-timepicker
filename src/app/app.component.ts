import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    timerOptions;

    constructor() {
    }

    ngOnInit(): void {
        this.timerOptions = {
            disableTextInput: false,
            'timeFormat': 'h:i A',
            'scrollDefault': 'now',
            showDuration: false,
            'step': 10,
            'forceRoundTime': true
        };
    }
}
