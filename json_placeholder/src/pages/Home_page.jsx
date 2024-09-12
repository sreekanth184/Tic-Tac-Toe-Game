import React from 'react'
import typicode_instance from '../Services/api'
import { useEffect, useState } from 'react'
import User_card from '../component/User_card';

function Home_page() {

    let [data, setData]=useState([]);

    async function fetchData(){
        try{
            let res= await typicode_instance.get(`/users`)
            console.log(res.data)
            setData(res.data)
        }
        catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchData()
    },[])
    

  return (
    <>
    <div>
      { 
      data.length? data.map((user)=><User_card key={user.id} user={user} />):"Wait for result"

       }
       </div>
   </>
  )
}

export default Home_page
