
import useFetchData from "../../Hooks/useFetchData"
import ProfileList from "../ProfileList/ProfileList"

function FetchData()
{
    const [state,setState] = useFetchData()

   return (
    <>

       
       {(!state.isLoading) ?  <ProfileList photoList={state.photoList}/>: "Loading"}
       {      console.log("Variable photolist " ,state) 
}
    </>
   )
}

export default FetchData