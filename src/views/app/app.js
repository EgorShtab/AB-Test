import React from 'react';
import AddUser from '../addUser';
import AppHeader from '../appHeader';
import './app.css';
import Table from '../table';

const App=()=>{
    return(
        <div>
            <AppHeader/>
            <div className="content">
                <AddUser/>
                <Table/>
            </div>
        </div>
    )
}

export default App;