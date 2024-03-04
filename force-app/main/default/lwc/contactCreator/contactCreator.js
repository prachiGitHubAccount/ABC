import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJ from '@salesforce/schema/Contact';
import CONTACT_FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/contact.Email';

export default class ContactCreator extends LightningElement {

    objectApiName = CONTACT_OBJ;
    fields = [CONTACT_FIRST_NAME, CONTACT_LAST_NAME,  CONTACT_EMAIL];

    handleSuccess(event){
        const tastevent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"

        });

        this.dispatchEvent(tastevent);
    }
}