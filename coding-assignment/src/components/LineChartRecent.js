
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS , BarElement, CategoryScale,  Legend, LinearScale, Title, Tooltip, PointElement, LineElement, RadialLinearScale, LineController, Filler } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    PointElement,
    LineElement,
    LineController,
    Filler
)



export const LineChartRecent = ()=>{



    


    return <div style={{width: '280px' , height: '180px'}} ><Line 
    data = {{
         labels: ['Nov 1', 'Nov 2', 'Nov 3', 'Nov 4'],
         datasets : [
            {
                label: '',
                data: [2, 4, 2, 5, 3],
                backgroundColor: 'skyblue',
                borderColor: 'blue',
                tension: '0.4',
                fill : true,
                pointStyle: 'dash' 
            }
         ]
    }}

    // height={'50p/x'}
    // width={'20px'}
    options= {{
        maintainAspectRatio: false,
        
        scales: {
            x : {
                
                grid: {
                    display: false

                }
            },
            y: {
                min: 0,
                display: false,
                grid: {
                    display: false
                }
            },
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }}
    
    /></div>

}
