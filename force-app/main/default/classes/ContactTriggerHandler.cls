public class ContactTriggerHandler  extends TriggerHandlerBase {

    
     public ContactTriggerHandler() {
    }

  
     public override void afterInsert(List<SObject> newRecords) {
         
        List<Contact> contactList = (List<Contact>) newRecords;
         gettheNumberofContacts(contactList);
    }
    
     public override void afterDelete(Map<Id, Sobject> deletedRecordsMap) {
          Map<Id, Contact> oldLinesMap = (Map<Id, Contact>) deletedRecordsMap;
            gettheNumberofContacts(oldLinesMap.values());
     }
    
    public static void gettheNumberofContacts(List<Contact> contacts){
         Map<Id, Account> accountMap = new Map<Id, Account>();
         Set<Id> accountId = new Set<Id>();
         for(Contact con: contacts){
             accountId.add(con.AccountId);
         }
         
        List<AggregateResult> quoteLineResult = [
            SELECT COUNT(Id) num, AccountId
            FROM Contact
            WHERE AccountId =: accountId
 GROUP BY AccountId
        ];
         
          for (AggregateResult result : quoteLineResult) {
            accountMap.put(
                (Id) result.get('AccountId'),
                new Account(
                    Id = (Id) result.get('AccountId'),
                    Number_of_Contacts__c = (Decimal) result.get('num')
                )
            );
        }

 if (!accountMap.values().isEmpty()) {
            update accountMap.values();
        }         
    }
    
}