
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS , BarElement, CategoryScale,  Legend, LinearScale, Title, Tooltip, PointElement, LineElement, RadialLinearScale, LineController, Filler } from 'chart.js';
import { useEffect, useState } from 'react';

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

    const [bardata, Setbardata] = useState([]);


   useEffect(()=>{

    async function getdata (){


        let res = await fetch ('http://localhost:8080/bar');

        let res2 = await res.json();

        Setbardata(res2.data);

    }
    getdata();

   }, [])

   

   let myArr1  = bardata.map((elem)=>{
    return elem.key1;
   })

   let myArr2  = bardata.map((elem)=>{
    return elem.key2;
   })


    return <div style={{width: '220px' , height: '180px'}} ><Bar
    data = {{
         labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
         datasets : [
            {
                label: '',
                data: myArr1,
                backgroundColor: 'skyblue',
                borderColor: 'blue',
                tension: '0.4',
                fill : true,
                pointStyle: 'dash' 
            },
            {
                label: '',
                data: myArr2,
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
