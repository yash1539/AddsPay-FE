import React from 'react'
function Banner() {
const imageUrl= "https://i.postimg.cc/P5gCz1Wc/pexels-marc-mueller-380769.jpg"
    return (
    <div className="object-cover w-full bg-center bg-cover h-[35rem] "
    style= {{backgroundImage:`url(${imageUrl})`}}>
    <div className="flex items-center justify-center w-full h-full bg-blue-800 bg-opacity-50 ">
        <div className="flex justify-between w-full mx-10 ">
            {/* <span className="text-2xl font-semibold text-white uppercase lg:text-3xl"> */}
                <input type='text' className='w-1/4 h-10 border-r-2' placeholder='search listing'  />
                <select className='w-1/4 h-10' placeholder='city'>
                    <option>city</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <select className='w-1/4 h-10' placeholder='state' >
                    <option>state</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button className='bg-white w-1/4 h-10 text-blue-600'>Search</button>
                {/* </span> */}
        </div>
    </div>
</div>
  )
}

export default Banner