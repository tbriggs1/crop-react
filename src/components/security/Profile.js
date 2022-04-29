import { useEffect, useState } from 'react'
import axios from "axios";

function Profile(props) {

  const [profileData, setProfileData] = useState(null)
  useEffect(() => {
    axios({
      method: "GET",
      url:"http://localhost:5000/user",
      headers: {
        Authorization: 'JWT ' + props.token
      }
    })
    .then((response) => {
      console.log(response.data)
      const res =response.data
      props.setCreds(({
        username: res.username,
        password: res.password}))
      setProfileData(res.firstname)
    }).catch((error) => {
      console.log("error")
    }
  )}, []);

  return (
    <div className="Profile">

              <h1>Hello! {profileData}</h1>
    </div>


  
  );
}

export default Profile;

