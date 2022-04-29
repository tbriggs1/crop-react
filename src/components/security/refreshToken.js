import axios from "axios";
import { useEffect } from "react"

const RefreshToken = (props) => {
    
    const four_minute = 240000;

    useEffect(() => {
        const interval = setInterval(() => { 
            console.log("hey")
        axios({
            method: "POST",
            url:"http://localhost:5000/auth",
            data:{
              username: props.creds.username,
              password: props.creds.password
             }
          })
          .then((response) => {
              console.log("test")
              if(props.token){
                props.setToken(response.data.access_token)
              }
          }).catch((error) => {
              console.log(props.creds)
                console.log(props.token)
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          })
    }, 30000);
        return () => clearInterval(interval);
    }, []);
}

export default RefreshToken