import React from 'react'

const Notification = ({status}) => {
  return (
    <>
        {status.show && status.type === 'wrong_gen' ? <div className='notification'>Wrong generation or check your spelling!</div> : <div></div>}
        {status.show && status.type === 'same_guess' ?  <div className='notification'>You already made that guess!</div> : <div></div>}
    </>
  )
}

export default Notification