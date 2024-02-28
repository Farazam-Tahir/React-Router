import React, { useEffect, useState } from 'react'

const About = () => {

  let [text, setText] = useState();
  useEffect(()=>{
    setTimeout(() => {
      setText('About');
    }, 2000);
  },[text]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default About
