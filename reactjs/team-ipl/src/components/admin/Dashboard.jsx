import React,{useState,useEffect} from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Dashboard() {
// count total manage contact us data on admin datashboard
const[contactdata,setData]=useState(0);
// applied use effects
useEffect(()=>{
 axios.get(`http://localhost:3000/contact-us`).then((response)=>{
     setData(response.data);  
 })
},[]);
    
// const data = [
//     ["Element", "Density", { role: "style" }],
//     ["Copper", 8.94, "#b87333"], // RGB value
//     ["Silver", 10.49, "silver"], // English color name
//     ["Gold", 19.3, "gold"],
//     ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
//   ];

const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };


  // animations chart

  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }


  function getData() {
    return [
      ["Age", "Weight"],
      ...Array.from({ length: 16 }, () => [getRandomNumber(), getRandomNumber()]),
    ];
  }
  const options1={
  title: "Company Performance",
  legend: { position: "bottom" },
  animation: {
    duration: 1000,
    easing: "out",
  },
  vAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
  hAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
}; 
  
  const [chartData, setChartData] = useState(getData);
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData(getData());
      setYear((y) => y - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [setChartData]);
return (

    
    <div className='w-full p-2'>
    {/* <h1 className='text-4xl text-pink-600 ms-5'>Biece Icecream Dashboard</h1> */}
    <div className='flex flex-row w-full'>
     <div className='w-full p-3 bg-pink-600 mt-7 m-5'>
        <h1 className='text-2xl mt-2 text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-3 bg-green-600 mt-7 m-5'>
     <h1 className='text-2xl mt-2 text-white'>Total Contacts <span className='bi bi-person text-danger'><Link to="/admin-login/manage-contacts"><span className='w-5 bg-red-800 text-white p-2 rounded-full text-lg'>{contactdata.length}</span></Link></span></h1>
     </div>
     <div className='w-full p-3 bg-yellow-500 mt-7 m-5'>
     <h1 className='text-2xl mt-3 text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
    </div>

    <div className='flex flex-row w-full'>
     <div className='w-full p-3 bg-blue-600 mt-7 m-5'>
     <h1 className='text-2xl mt-3 text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-3 bg-red-600 mt-7 m-5'>
     <h1 className='text-2xl text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-5 mt-3 bg-black mt-7 m-5'>
     <h1 className='text-2xl text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
    </div>

    <div className='w-full mt-0 m-0 flex flex-row'>
    <div className='w-1/2'> 
    {/* <Chart chartType="ColumnChart" width="100%" height="100%" data={data} /> */}
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

     </div>
     <div className='w-1/2'>
   
    <Chart chartType="ScatterChart"
        width="100%"
        height="90%"
        data={chartData}
        options1={options}
      />
      <div style={{ width: "100%", textAlign: "center" }}>{year}</div>
      </div>
    </div>

    </div>


  )
}
