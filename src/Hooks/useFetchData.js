import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
function  useFetchData()
{
        // const [isLoading,setIsloading]=useState(true)
        const [ state,setState ] = useState({
            isLoading:true
          })
      
      
         async function getdata()
         {
           const response = await axios.get("https://api.github.com/users");
           const responseData=await response.data;
           console.log('Response : ',response)
           console.log("Response Data ", response.data)
           const idNameAvatar = responseData.map((data)=>{return {id:data.id,name:data.login,avatar:data.avatar_url}})
           console.log(idNameAvatar)
           setState({
            ...state,
            photoList:idNameAvatar,
            isLoading:false
           })
           
        
      
      
         }
      
        useEffect(()=>{
          getdata()
        },[]) 

        return [state,setState] 
}

export default useFetchData