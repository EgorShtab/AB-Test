import React from 'react';
import AddUser from '../addUser';
import AppHeader from '../appHeader';
import './app.css';
import Table from '../table';
import AddChart from '../chart';

const App=()=>{
    return(
        <div>
            <AddChart/>
            <AppHeader/>
            <div className="content">
                <AddUser/>
                <Table/>
            </div>
        </div>
    )
}

export default App;