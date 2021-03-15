let newUsers=[];
let userList=[];
class User{
    AddUserToNotSavedList(user){
        newUsers.push(user);
    }
    constructor(registrationDate, lastVisitDate, id){
        this.registrationDate=registrationDate;
        this.lastVisitDate=lastVisitDate;
        this.id=id;
    }
}
const CreateUser=(registrationDate, lastVisitDate, id)=>{
    newUsers.push(new User(registrationDate, lastVisitDate, id));
}
function ClearList(){
    newUsers=[];
}
function SyncUserList(){
    if(!newUsers.length==0){
        let userListLastIndex=userList.length;
        for(let i=0;i<newUsers.length;i++){
            userList[userListLastIndex+i]=newUsers[i];
        }
        ClearList();
    }
    else console.log("Nothing to save");
}

const ReturnUserList=()=>{return userList}

export {CreateUser, SyncUserList, ReturnUserList};