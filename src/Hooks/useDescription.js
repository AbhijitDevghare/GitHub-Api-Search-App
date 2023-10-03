import axios from "axios"
import { useEffect, useState } from "react"



function useDescription({paramName,userName})
{

    const [detail,setDetails]=useState({
        isLoading:true
       })
    

       async function getdata()
       {
           let response;
           if(userName)
           {
            response = await axios.get(`https://api.github.com/users/${userName}`)

           }else{
                response = await axios.get(`https://api.github.com/users/${paramName.name}`)
           }
          
           const responseData = response.data
           console.log("REsponse Description " , responseData)
    
           const UserData= {
            login:responseData.login,
            name:responseData.name,
            id:responseData.id,
            followers:responseData.followers,
            following:responseData.following,
            bio:responseData.bio,
            avatar:responseData.avatar_url,
            followersList:responseData.followers_url,
            followingList:responseData.following_url,
            company:responseData.company,
            html_url:responseData. html_url,
            isLoading:false
           }
    
          setDetails(UserData)
    
           console.log(detail)
       }
    
       useEffect(()=>{
        getdata()
       },[])


       return [detail,setDetails]
   
}

export default useDescription