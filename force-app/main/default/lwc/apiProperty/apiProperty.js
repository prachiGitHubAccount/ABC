import { LightningElement } from 'lwc';

export default class ApiProperty extends LightningElement {
    valuetoSend =0;

    handlePercentageChange(event) {
        this.valuetoSend = event.target.value;
    }
}