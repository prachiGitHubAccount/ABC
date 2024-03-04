import { LightningElement, api, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import CONTACT_FN from '@salesforce/schema/Contact.FirstName';
import CONTACT_LN from '@salesforce/schema/Contact.LastName';
import CONTACT_Email from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    {label : 'First Name', fieldName : CONTACT_FN.fieldApiName, type: 'text'},
    {label : 'Last Name', fieldName : CONTACT_LN.fieldApiName, type: 'text'},
    {label : 'Email', fieldName : CONTACT_Email.fieldApiName, type: 'Email'}
]


export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;

    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}