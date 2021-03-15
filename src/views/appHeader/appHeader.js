import React from 'react';
import AddChartC from '../../controllers/chart/chart';
import {SyncUserList as SaveUsers} from '../../controllers/addUser/userClass';

const AppHeader=()=>{
    return(
        <div className="nav_div">
            <p className="nav_text animate__animated animate__bounceIn">AB TEST REAL</p>
            <div>
                <button className="nav_button_save nav_buttons" onClick={SaveUsers}>Save</button>
                <button className="nav_buttons nav_button_calculate" onClick={AddChartC}>Calculate</button>
            </div>
        </div>
    )
}

export default AppHeader;