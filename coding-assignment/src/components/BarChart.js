
import {Bar} from 'react-chartjs-2'
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



export const BarChart = ()=>{



    


    return <div style={{width: '220px' , height: '180px'}} ><Bar
    data = {{
         labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
         datasets : [
            {
                label: '',
                data: [4, 3, 5, 2, 4, 5, 2],
                backgroundColor: 'skyblue',
                borderColor: 'blue',
                tension: '0.4',
                fill : true,
                pointStyle: 'dash' 
            },
            {
                label: '',
                data: [2, 1, 3, 5, 2, 3, 5],
                backgroundColor: 'blue',
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
