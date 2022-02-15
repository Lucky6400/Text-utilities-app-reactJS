import React from 'react'

export default function About(props) {
  return (
    <div className='container'>
      <div className={`text-center text-${props.mode==='light'?'dark':'light'}`}>
        <h2>About us</h2>
      </div>
      <hr />
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet alias, asperiores quisquam blanditiis doloribus nihil officiis praesentium quas soluta sed, commodi in itaque rerum sapiente voluptatum dolor, ullam sunt?.</p> <p className={`text-${props.mode==='light'?'dark':'light'}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, soluta voluptate? Recusandae ab iure quisquam quidem hic molestias illo fugiat! Suscipit quas in fugiat dolor corporis vel eveniet ipsa numquam!</p>
      <hr />
      <div className="text-center">
        <b className={`text-${props.mode==='light'?'dark':'light'} mx-5`}>Contact</b> <b className={`text-${props.mode==='light'?'dark':'light'} mx-5`}>Feedback</b> <b className={`text-${props.mode==='light'?'dark':'light'} mx-5`}>FAQs</b> <hr />
      </div>
    </div>
  )
}
