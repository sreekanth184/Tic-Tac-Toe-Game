import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import typicode_instance from '../Services/api'
import User_card from '../component/User_card'
import Album_layout from '../component/Album_layout'
import Todo_layout from '../component/Todo_layout'
import Post_layout from '../component/Post_layout'


function User_page() {
    let [user, setUser]=useState(null);
    let [album, setAlbum] =useState([]);
    let [posts, setPosts] =useState([]);
    let [todo, setTodo] =useState([]);
    let [input, setInput]= useState();

    let {userId}= useParams()
    async function userData(){
        try{
            let res1= await typicode_instance.get(`/users/${userId}`)
            let res2= await typicode_instance.get(`/users/${userId}/albums`)
            let res3= await typicode_instance.get(`/users/${userId}/posts`)
            let res4= await typicode_instance.get(`/users/${userId}/todos`)
            setUser(res1.data)
            setAlbum(res2.data)
            setPosts(res3.data)
            setTodo(res4.data)
        }
        catch(error){
            console.log(error)
        }
    }

    function updateInput(e){
        setInput(e.target.name)
    }

    useEffect(()=>{
        userData()
    },[])

    let output;

    if(input=="Album"){
        output=<Album_layout album={album}/>
    }else if(input=="Todos"){
        output=<Todo_layout todo={todo}/>
    }else if(input=="posts"){
        output=<Post_layout posts={posts}/>
    }else{
        output=<h1>Please select</h1>
    }

  return (
    <>
      { 
      user?<User_card user={user} showlink={false}/>:"Wait for result"
       }
       <button name='Album' onClick={updateInput}>Album</button>
       <button name='Todos' onClick={updateInput}>Todos</button>
       <button name='posts' onClick={updateInput}>Posts</button>
       {output}
    </>
  )
}

export default User_page
