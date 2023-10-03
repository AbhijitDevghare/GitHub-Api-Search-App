import { useState } from "react"
import PhotoCard from "../PhotoCard/PhotoCard"
import Search from "../Search/Search"
import "./ProfileList.css"
import Description from "../Description/Description"

function ProfileList({photoList})
{
  const [searchInput,setSearchInput] = useState("")
  return (
        
      <div className="Home-Page-Wrapper">

       <h1>GitHub Profiles</h1>
      <Search updateSearch={setSearchInput} />

      {(!searchInput)  ? 
           <div className="Profile-List">
             { photoList && photoList.map((photo)=><PhotoCard key={photo.id} avatarUrl={photo.avatar} name={photo.name}/>)}
           </div>
            : <Description userName={searchInput}/>}


      </div>
      
     )
}

export default ProfileList