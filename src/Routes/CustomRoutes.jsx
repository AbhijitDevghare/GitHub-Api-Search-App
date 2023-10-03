import { Routes,Route } from "react-router-dom"
import FetchData from "../Components/FetchData/FetchData"
import Description from "../Components/Description/Description"

function CustomRoutes()
{
    
    return (
        
        <Routes>
            <Route path="/" element={<FetchData/>}/>
            <Route path={"/:name"} element={<Description/>}/>
        </Routes>
        
    )
}

export default CustomRoutes