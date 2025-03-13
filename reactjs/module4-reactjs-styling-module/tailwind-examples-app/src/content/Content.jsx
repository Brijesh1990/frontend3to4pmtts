import React from 'react'

export default function Content() {
  return (
    <div className='container p-10 mt-10 shadow flex flex-row'>

    <div className='w-2/3'>
        <img src="https://i.pinimg.com/originals/fc/01/d6/fc01d6058d64e7f9e25292d1980f8500.gif" alt='image' className='img-fluid' />
    </div>
     <div className='w-full'>
        <h1 className='text-4xl animate-pulse'>Create account</h1>
        <hr  className='w-32 border border-5 border-red-950'/>
        <form>
            <div className='form-group mt-2'>
            <label className="text-xl">Enter Name *</label>
            <input type='text' placeholder='Name *' required  className='form-control p-2 w-full border border-2 border-black'/>
            </div>

            <div className='form-group mt-2'>
            <label className="text-xl">Enter Email *</label>
            <input type='text' placeholder='Email *' required  className='form-control p-2 w-full border border-2 border-black'/>
            </div>

            <div className='form-group mt-2'>
            <label className="text-xl">Select Gender *</label>
            Male :<input type='radio' name='gender' required  className='form-control p-2  border border-2 border-black ms-3' value="male" />

           Female :<input type='radio' name='gender' value="female" required  className='form-control p-2  border border-2 border-black ms-3' />

           other :<input type='radio' name='gender' required  className='form-control p-2  border border-2 border-black ms-3' value="other" />
            </div>


            <div className='form-group mt-2'>
            <label className="text-xl">Select Hobbies *</label>
            Playing :<input type='checkbox' required  className='form-control p-2  border border-2 border-black ms-3' value="playing" />

           Reading :<input type='checkbox' required  className='form-control p-2  border border-2 border-black ms-3' value="reading" />

           Surfing :<input type='checkbox' required  className='form-control p-2  border border-2 border-black ms-3' value="surfing" />
            </div>
           

           
            <div className='form-group mt-2'>
            <label className="text-xl">Upload Photo *</label>
            <input type='file' placeholder='Email *' required  className='form-control p-2 w-full border border-2 border-black'/>
            </div>



            <div className='form-group mt-2'>
            <label className="text-xl">Select state *</label>
            <select name="state" required  className='form-control p-2 w-full border border-2 border-black'>
                <option value="">Gujrat</option>
                <option value="">Uttar pradesh</option>
                <option value="">Rajsthan</option>
                <option value="">Madhya pradesh</option>
            </select>
            </div>

            

            <div className='form-group mt-2'>
            <input type='submit' placeholder='Email *' required  className='form-control p-2 w-60 border border-2 border-b-black bg-black text-white transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'/>

            <input type='reset' placeholder='Email *' required  className='form-control p-2 w-60 border border-2 border-red-600 ms-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'/>
            </div>
        </form>
     </div> 
    </div>
  )
}
