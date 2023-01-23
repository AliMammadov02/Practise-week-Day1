import React from 'react'
import './Index.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Index() {
    return (
        <>
            <section className='section4'>
                <h1 className='Message'>Message Us</h1>
                <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia<br /> quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                <Box component="form" autoComplete="off">
                    <TextField id="outlined-basic" label="First Name" variant="outlined" className='firstName' />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" className='lastName' />
                    <div>
                        <TextField id="outlined-basic" label="Subject" variant="outlined" className='subject' />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='email' />
                    </div>
                    <div>
                        <TextField multiline={true}
                            rows={7} id="outlined-basic" label="Right your message here." variant="outlined" className='textArea' />
                    </div>
                </Box>
            </section>
        </>
    )
}

export default Index