import React from 'react'

const Contact = (props) => {
  return (
    <div>
      <div className={`text-center text-${props.mode==='light'?'dark':'light'}`}>
          <h2 className={` text-${props.mode==='light'?'dark':'light'}`}>Contact us</h2>
      </div>
      <b className={` text-${props.mode==='light'?'dark':'light'}`}>Email: user@mail.com </b><br />
      <b className={` text-${props.mode==='light'?'dark':'light'}`}>Phone: +91 XXXXXXXXXX</b> <br />
      <b className={` text-${props.mode==='light'?'dark':'light'}`}>Address: Dreamland, Heaven, Universe (XXX-XXX)</b>
    </div>
  )
}

export default Contact
