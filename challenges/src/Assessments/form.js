// login, signup page,
// validate form
// check if it is loged in or not
// write a form to have all in one form

import {useState } from "react";
import { Input, Box, Grid, Button, ThemeProvider } from "theme-ui";
import theme from './theme';
import axios from 'axios';

export default function Form(props) {

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [alert, setAlert] = useState('')

    // const handleValidate = (data, type)=>{

    // }

    const handleInput = (e) =>{
        setAlert(null)
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
        
            default:
                break;
        }
    }
    const handleSubmit = async (e) =>{
        
        console.log(password)
        if(!password || password.length< 8){
          setAlert("Password should be long enough")
        }
        if(email && !email.includes("@")){
            setAlert("not valid email")
        }
        //console.log("set")
   
        try {
            // const result = await axios.post('url',{
            //      password,
            //      email
            //  })
        //    console.log(result.data)

            
        } catch (error) {
            console.log(error)
        }

        
    }


  return (
    <div>
    <ThemeProvider theme={theme}>
      <Grid gap={3} columns={[1,2,3]} sx={{alignItems: 'center', justifyContent: 'center' }}>
        <Box></Box>
        <Box>
            {alert}
        <Input
        sx={{margin: '1rem'}}
         name="email"
         placeholder="email"
         onChange={handleInput}
        />
          <Input 
         sx={{margin: '1rem'}}
         name="password"
         placeholder="password"
         onChange={handleInput}
        />
        <Button
         sx={{margin: '1rem', backgroundColor: 'primary' }}
         onClick={handleSubmit}
         
        >
         submit
        </Button>

  
        </Box>
        <Box></Box>
      </Grid>
      </ThemeProvider>
    </div>
  );
}
