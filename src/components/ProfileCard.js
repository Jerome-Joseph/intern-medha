import React from 'react'
import { useEffect, useState } from 'react';

 const ProfileCard = (props) => { 

 const [articles, setArticles] = useState([{}])

 const fetchData = async()=>{
      const response = await fetch(`https://api.meetworks.in/users/get_unique_jobseeker_profile`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
         }, 
         body: JSON.stringify({ jobseeker_id:"614b410c2c4b197356a37f18"})
         });
         const data = await response.json()
         setArticles(articles.concat(data))
         console.log(data[0].jobseeker_name)
         console.log(articles)
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            This is profile section
        </div>
        
    )
}

export default ProfileCard
