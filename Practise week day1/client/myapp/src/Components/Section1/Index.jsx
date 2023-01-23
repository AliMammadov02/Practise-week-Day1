import React from 'react'
import "./Index.css"

function Index() {
  return (
    <>
        <div className='section1'>
            <div className='section1Left'>
                <h1 className='section1Lefth1'>Learn From The Expert</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime<br/> ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                <div className='section1LeftButton'>ADMISSON NOW</div>
            </div>



            <div className='section1Right'>
                <p className='section1RightP'>Sign Up</p>
                <form className='Form'>
                    <input className='email' placeholder='Email Address'/>
                    <input className='password' placeholder='Password'/>
                    <input className='rePassword' placeholder='Re-type Password'/>
                </form>
                <div className='section1RightButton'>SIGN UP</div>
            </div>

        </div>


    </>
  )
}

export default Index