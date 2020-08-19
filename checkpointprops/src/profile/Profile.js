import React from 'react';
import PropTypes from 'prop-types';


export const Profile=( {children,handleName,fullName='jihen', bio='i am an engineer' , profession='student'})=>{
     
      
      
    return(
        <div>
        <p>{children}</p>
        <button type='submit' onClick={()=>handleName(fullName)} style={{border:'none',outline:'none',width:150,height:50,textTransform:'uppercase',borderRadius:20}}>click me </button>
        </div>
    )
}

Profile.propTypes = {
    
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
  }
