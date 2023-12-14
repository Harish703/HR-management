import React from 'react';
import './Proj.css';

import logo from './images1.jpg';

export default function Proj() {
  return (
    <div id="all">
    <table id="tab">
    <tr>
    <td id="image">
    <div id="img">
        <img src={logo} alt='aroplane' height={550} width={300} ></img>
    </div>
    </td>
    <td id="form">
      <div>
      
      <form >
        <center><h1>Sign in</h1></center>
        <lable>Username</lable><br/>
        <input type='text' class="input" ></input><br/>

        <br/>

        <lable>First Name</lable><br/>
        <input type='text' class="input"></input><br/>

        <br/>

        <lable>Last Name</lable><br/>
        <input type='text' class="input"></input><br/>
        
        <br/>
        
        <lable>Email</lable><br/>
        <input type='email' class="input" placeholder='@gmail.com' ></input><br/>
        
        <br/>
        
        <lable>Mobile Number</lable><br/>
        <input type='tel'class="input" placeholder='+91' pattern='(+91)?[6-9]{3}[0-9]{9}'></input><br/>
        
        <br/>
        
        <lable>Password</lable><br/>
        <input type='password' class="input" minLength={8} maxLength={15} ></input><br/>
        <br/>
        <input type='checkbox'></input>Accepct the <a href="">terms and conditions</a><br/>
        <br/>
        
        <div id="div1">
              <button href='' id="button">Sign in</button>
        </div>
        
        <div id="div2">
             <p><b>or</b>Do you have an account</p>
        </div>
        
        <div id="div3">
        

        <button href='' id="login">Login</button>
        

        </div>
        
      </form>
      
    </div>
    </td>
    
    </tr>
    </table>
    </div>
  )
}