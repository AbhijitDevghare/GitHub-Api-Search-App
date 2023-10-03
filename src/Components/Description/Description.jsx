import { Link, useParams } from "react-router-dom"
import useDescription from "../../Hooks/useDescription"
import "./Description.css"
import Search from "../Search/Search"

function Description({userName})
{
    const paramName = useParams()
    console.log("Use Params",paramName)
    const [detail,setDetails] = useDescription({paramName,userName})

   return (
   <>
      <div className="description-wrapper">
          {(!userName)?<h1>Git Profile</h1>:""}
          {
              
                !detail.isLoading ?         
                <div className="description-box">
                        <img src={detail.avatar} alt="" />
                        <p><u>{detail.login}</u></p>
                        <p>Name : {detail.name}</p>
                 <div>
            
                              <button >
                              {detail.followers}
                                <p>Follower</p>
                              </button>
    

                            <button>
                                 {detail.following}
                                  <p>Following</p>
                             </button>   
                                                   
                </div>
                <p>BIO : {detail.bio}</p>
                
            
    </div>

    
                : "Not Found"
           }
           
           {detail.html_url && <Link to={detail.html_url}>View on Git Hub</Link>}
      </div>
   </>
   )
}
export default Description