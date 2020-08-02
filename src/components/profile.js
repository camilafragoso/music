import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Profile = (props) => {

    const [profile, setProfile] = useState([]);

    useEffect(()=>{
        axios.get(' https://api.allorigins.win/raw?url=https://api.deezer.com/user/172162613')
        .then(profiledata => {
            setProfile(profiledata.data);
        });
    });  
    
    return (
        <div>
            <h1>Profile</h1>
            <h3>{profile.name}</h3>
            <h4>{profile.country}</h4>
            <img src={profile.picture}></img>
        </div>
    );
}

export default Profile;