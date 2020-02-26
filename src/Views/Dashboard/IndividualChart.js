import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


class IndividualChart extends Component {
    render() {
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Individual Taxpayers Registered by month',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [45, 25, 0]
                }
            ]
        };

        return (
            <div>
              <h2 style={{marginBottom:0, color:"rgba(0,0,0,.8)"}}>Individual Taxpayers</h2>
                <Bar
                    data={data}
                    width={100}
                    height={350}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

export default IndividualChart
