import React from 'react'
import './LandingPage.css'
import cartmanimg from '../../Assets/cartman.png'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import { Grid } from '@mui/material';


const LandingPage = () => {
    const[display,setDisplay] = React.useState(true)

   

  return (
    <>
    <Grid className='landing-page-main'>
        <Grid className='landing-page-left'>
            <Grid className="landing-page-left-box">
                <Grid className="landing-page-left-box-image">
                    <img src={cartmanimg} alt="" height={'245px'}/>
                </Grid>
                <Grid className="landing-page-left-box-text">
                    <h3>online book shopping</h3>
                </Grid>
            </Grid>
        </Grid>
        <Grid className='landing-page-right'>
            <Grid className="landing-page-right-box">
                { display ? <SignIn setDisplay={setDisplay}/> : <SignUp setDisplay={setDisplay}/>}
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}

export default LandingPage