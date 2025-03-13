import React,{Component} from 'react'
// class App extends Component
// {
//   render()
//   {
//     const name="Brijesh";
//     return(
//       <>
//           <h1>My name is :{name}</h1>
//       </>
//     )

//   }

// }

// export default App


// class Car extends Component
// {
//   constructor()
//   {
//     super();
//     this.state={name:"audi"};
//   }
//   render()
//   {
//     return(
//       <>
//         <h1>The name of Car is : {this.state.name}</h1>
//       </>
//     )
//   }
// }



class Car extends Component
{
  constructor()
  {
    super();
    this.state={
      name:"audi",
      age:"25 years",
      owner:"Brijesh Kumar pandey"

    };
  }
  render()
  {
    return(
      <>
        <h2>The name of Car is : <span className='fs-1 text-danger'>{this.state.name} </span><br/> it is <span className='fs-1 text-danger'>{this.state.age}</span> old <br/> The ownership of car is <span className='fs-1 text-danger'>{this.state.owner}</span></h2>
      </>
    )
  }
}

export default Car