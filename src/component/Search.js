import React, { useState } from 'react'
import "./styel.scss"

const Search = () => {
const Lis=(props)=>{
    return(
        <>
            <div className='valuee'>{props.values}</div>
        </>
    )
}


    const[val,setval]=useState("")
    let count=0;
    // const  [presarr,setarr]=useState(["orange","apple","grape","dragonfurit","cherry","banana","mango"])
    const arr=["orange","apple","grape","dragonfurit","cherry","banana","mango"]
    const fil=(e)=>{
        setval(e.target.value)
  
   
    }
  return (
        <><div className="conai">
            <h1>Search filter</h1>
            <input onChange={fil} value={val} type="text" placeholder='search' />
            {arr.filter((valsf)=>{
                if(val==""){
                    return valsf
                }
                else if(valsf.includes(val)){
                    return valsf
                }
            }).map((vals,ind)=>{
                return <Lis values={vals} key={ind}/>
            })}
            {console.log("hi")}
            </div>
        </>
  )
  

}

export default Search