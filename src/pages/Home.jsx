import { useEffect } from "react";
import { useNavigate } from "react-router";

function Home() {
    const navigate= useNavigate()

    useEffect(() => {
      navigate("1")
    }, [])
    

    return ( 
        <div>
        </div>
     )
}

export default Home;