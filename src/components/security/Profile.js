import { useEffect, useState } from 'react'
import axios from "axios";

function Profile(props) {

  const [profileData, setProfileData] = useState(null)
  useEffect(() => {
    axios({
      method: "GET",
      url:"http://51.89.220.72:5000/user",
      headers: {
        Authorization: 'JWT ' + props.token
      }
    })
    .then((response) => {
      console.log(response.data)
      const res =response.data
      setProfileData(res.firstname)
      console.log("hi")
    }).catch((error) => {
      console.log("error")
    }
  )});

  return (
    <div className="Profile">

              <h1>Hello! {profileData}</h1>
    </div>


  
  );
}

export default Profile;

