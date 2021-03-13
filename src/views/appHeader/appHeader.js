import React from 'react';

const AppHeader=()=>{
    return(
        <div className="nav_div">
            <p className="nav_text animate__animated animate__bounceIn">AB TEST REAL</p>
            <div>
                <button className="nav_button_save nav_buttons">Save</button>
                <button className="nav_buttons nav_button_calculate">Calculate</button>
            </div>
        </div>
    )
}

export default AppHeader;