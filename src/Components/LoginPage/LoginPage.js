import React, { useState } from 'react';
import './LoginPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {AiOutlineEyeInvisible , AiFillEye} from 'react-icons/ai';
const LoginPage = () => {
    const [state , setState] = useState(false)

    const toggleBtn = () => {
        setState =(preState =>  !preState )
    }

    return (
        <div>
             
            <div className='row'>
            
            <div className='col-sm-6 col-md-5 col-lg-3  pt-5 text-center contentStyle' style={{backgroundColor : '#000633'}}>
             
             <h3 style={{color : '#0096C7', fontSize :'26px'}}><span ><b>G</b> L O B E T E C H</span> <br/>  <b >C</b> O M P A N Y   <b >L</b> I M I T E D</h3>
             <p className=" mt-5 " style={{color : '#fff', fontSize :'16px'}} >Make yourself digitalized & more efficent</p>
        
            <div className='iConStyle'>
            <Link className='text-white 'to="/home"><FontAwesomeIcon icon={faCaretLeft}  size="2x" /></Link> 
            </div>
            </div>

            <div className='col-sm-6 col-md-7 col-lg-9  bgColorTwo p-5'>

                <div className='Box p-5 '>
                    <div className='text-center p-3'>
                        <h2>Welcome</h2>
                    <small>Sign in to your account</small>
                    </div>
                    
                <Form>
      <Form.Group className="mb-3">
   
        <Form.Control type="email" placeholder="Email" />
      
      </Form.Group>

      <Form.Group className="mb-3" >
     
     <div className='input-element-wrapper'>
     <input  className='password-field' type={state ? "text" : "password"} class="form-control" id="inputPassword" placeholder="Password"/>
       <button className='btns' onClick={toggleBtn}>
        { state ? <AiOutlineEyeInvisible/> :
            <AiFillEye/>
           
        }
        
        </button> 
     </div>
      
      </Form.Group>
 
      <div class="d-grid gap-2">
   
      <Button  class="btn btn-primary" variant="primary" type="submit">
        Login
      </Button>
 
</div>
    </Form>
                </div>



               
               <div>
                  
               </div>
            
            </div>
            </div>
            
        </div>
            
   
    );
};

export default LoginPage;