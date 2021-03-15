import React from 'react';
import HideChart from '../../controllers/chart/hidechart'

const AddChart=()=>{
    return(
        <div className="chart" id="modal" onClick={()=>{HideChart()}}>
            <canvas id="myChart" className="chart_canvas"></canvas>
        </div>
    )
}

export default AddChart;