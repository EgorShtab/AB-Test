import React from 'react';
import AddUserC from '../../controllers/addUser/addUserController'
const AddUser=()=>{
        return(
            <div className="content_addform">
                <div className="content_addform_input">
                    <p className="content_addform_text" value>Registration date</p>
                    <input type="date" id="registrationDate"/>
                    <p className="content_addform_text">Last activity</p>
                    <input type="date" id="lastActivity"/>
                    <p id="validDate" className="content_addform_invalidDate animate__bounceIn"></p>
                </div>
                <button className="content_addform_button" onClick={()=>AddUserC()}>+</button>
            </div>
    )
}

export default AddUser;
