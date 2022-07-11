
import "./register.css";
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';

function Register(){

  return(

 

 <div className="Container">
  <div>

   
  </div>



 <div className=" Structure ">



<h1 className =" Board "><b>BoardMe</b></h1>

  

  <h1 className=" Signed  ">Already Signed up?</h1>
  <p className =" Title ">All users on MySpace will know that there are millions of  people<br></br> out there.Every day besides so many people<br></br>  joining this community</p>

  <button className =" Button ">LOG IN</button>



  </div>


     <div className ="Structure2">

          <h1 className ="SingUp">Sign Up for an Account</h1>
          <p className="Lets">Lets get you set up so you can start creating your<br></br>first on boarding experience<br></br></p>

          <form> 
              
            <label className ="FirstName"><b>First Name</b></label>

            <br></br>

            <input className="inputFirst " type="First Name" placeholder="Your first name"/>
            
            <br></br>

            <label className ="Lastname"><b>Last Name</b></label>

            <br></br>

            <input className="inputLast" type="Email" placeholder="Your last name "/>

              <br></br>

              <label className="Email"><b> Email</b></label>
           
            <br></br>

          <input  className=" inputEmail" type="Email" placeholder="Enter your email "/>
      
          <br></br>

          <label className ="Password"><b>password</b></label>

          <br></br>

          <input className="inputPass" type="Password" placeholder="Enter your password "/>

          <br></br>

          <input  type="checkbox"  name="remember"/>I accept Boardme's  <span className="Condition">Terms & Conditions</span>

          <br></br>
          
          <button className =" button2 "><b>SIGN UP </b></button>
          <p className=" SighUp ">Or sign up using</p>

          <button className=" googlebutton "><FcGoogle size='25px' color ='lightblue'/></button>
          <button className="faceButton"><FaFacebookF size='25px' color='blue'/></button>
          <button className="twitterButton"><BsTwitter size ='25px' color='blue'/></button>

        </form>

   </div>

  </div>
  


  );

}
   export default Register;
    