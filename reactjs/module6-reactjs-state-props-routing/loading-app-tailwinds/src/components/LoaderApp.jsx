import React,{ useState,useEffect} from 'react'
import loaderimg from '../loader.gif'
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';
export default function LoaderApp() {
    // destructuring of data
    const[loader,setLoader]=useState(true);
    // create a function or hooks of useEffect to load promises for loader
    useEffect(()=>{
    //call a function for loader to load for a time
    setTimeout(()=>{
       setLoader(false);
    },3000)
    });
  return (
     loader ?

    <>
      <div className='loader-app'>
        <img src={loaderimg} alt='loader-photo' />
      </div>   
    </> 

     :

    <div className='container-fluid'>
    <Header />
    <Slider />
    <Content />
    <Footer />
    </div>


  )
}
