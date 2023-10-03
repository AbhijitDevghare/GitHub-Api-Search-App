import { Link } from "react-router-dom"
import "./PhotoCard.css"
function PhotoCard({avatarUrl,name})
{
    return ( 
        <Link  to={`/${name}`}>
           
           <div className="imgDiv">
              <img src={avatarUrl} alt="Loading" />
              <p>{name}</p>
              </div> 

        </Link>
    )
}

export default PhotoCard