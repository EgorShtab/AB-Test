import React from 'react';

const Table=()=>{
    return(
        <div>
            <table className="content_table">
                <thead>
                    <tr className="content_table_titles">
                        <td className="td" >User ID</td>
                        <td className="td" >Date Registration</td>
                        <td className="td" >Date Last Activity</td>
                    </tr>
                </thead>
                <tbody id="addUserTable">
                </tbody>
            </table>
        </div>
    )
}

export default Table;