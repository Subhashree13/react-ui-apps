import React from 'react'
import Profile from './Profile'
//import ProfileClass from './ProfileClass';
//react optimises the render of the two child components in dom by batching these nno matter what number of child components we wrap in a parent.
//both the render and commit phase of the child components are batched.
const About = () => {
  return (
    <div>About Us Page!!
       <Profile/>
    </div>
  )
}

export default About