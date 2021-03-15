import {CreateUser} from '../addUser/userClass'

let i=0;

function GetDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    
    return mm + '/' + dd + '/' + yyyy;
}

function CheckDates(){
    const minDate= new Date("01.01.2000");
    const maxDate= new Date(GetDate());

    let temp=document.getElementById("registrationDate").value;
    const a=new Date(temp);
    temp=document.getElementById("lastActivity").value;
    const b= new Date(temp);

    if(isNaN(a)) return false;
    if(isNaN(b)) return false;
    if(a>b) return false;
    if(a<minDate) return false;
    if(b>maxDate) return false;

    return true;
}

function AddUserC(registrationDate, lastVisitDate){
    let invalidMessage=document.getElementById("validDate");
    if(CheckDates()){
        invalidMessage.innerHTML="";
        let registrationDate=document.getElementById("registrationDate").value;
        let lastVisitDate=document.getElementById("lastActivity").value;
        AppendUser(registrationDate, lastVisitDate);
        CreateUser(registrationDate, lastVisitDate, i);
    }
    else{
        invalidMessage.innerHTML="You have entered invalid date. Please try again!";
    }
}

function AppendUser(registrationDate, lastVisitDate){
    let temp=document.getElementById('addUserTable');

    let newUser=document.createElement('tr');

    let userID=document.createElement('td');
    userID.innerHTML=i;

    let registrationDateHTMLElement=document.createElement('td');
    registrationDateHTMLElement.innerHTML=registrationDate;

    let lastVisitDateHTMLElement=document.createElement('td');
    lastVisitDateHTMLElement.innerHTML=lastVisitDate;

    newUser.append(userID, registrationDateHTMLElement, lastVisitDateHTMLElement);

    temp.append(newUser);
    i++;
}


export default AddUserC;