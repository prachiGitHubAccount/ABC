function beforeSubmit(){
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log('input value', inputDate.value); //string-->date(en_IN);

    let StringToDate = new Date(inputDate.value).toLocaleDateString("en-In");
    outputDate.value = StringToDate;
}