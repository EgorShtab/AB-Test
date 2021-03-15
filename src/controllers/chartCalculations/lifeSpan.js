import {ReturnUserList} from '../addUser/userClass';

let lifeTimeArray=[];

function CreateLifeTimeArray(){
    let userList=ReturnUserList();
    if(userList==undefined) return -1
    else{
        for(let i=0;i<userList.length; i++){
            let indexOfLifeTime=CalculateLifeSpan(userList[i].registrationDate, userList[i].lastVisitDate);
            if(isNaN(lifeTimeArray[indexOfLifeTime])) lifeTimeArray[indexOfLifeTime]=1
            else lifeTimeArray[indexOfLifeTime]++;
        }
        for(let i=0;i<lifeTimeArray.length;i++){
            if(lifeTimeArray[i]!=null) console.log(i+" "+lifeTimeArray[i]);
        }
    }
    lifeTimeArray=[];
}

function CalculateLifeSpan(registrationDate, lastVisitDate){
    registrationDate=new Date(registrationDate);
    lastVisitDate=new Date(lastVisitDate);
    return (lastVisitDate-registrationDate)/86400000//milliseconds in 24 hours amount
}

export default CreateLifeTimeArray;