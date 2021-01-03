import React, { Component } from 'react';
import "../index.css"
import "bootstrap/dist/css/bootstrap.css"
import { SocialIcon } from 'react-social-icons';

function Footer(){
	const philomath_playstore = "https://bit.ly/PhilomathAPP";
return(
<footer>
<div style={{width:100+"%", height:80+"px", backgroundColor:"black", position:"absolute",bottom:0}} className="btn-success">
    <br></br>
 

<div style={{display:"flex", justifyContent:"space-evenly"}}>
	
    <div>
	<SocialIcon url="http://facebook.com/UpGradGlobal" style={{ height: 25, width: 25}}/>
    </div>
    <div>
	<p className="copyright-text"> &copy; Upgrad </p>
    </div>
    <div>
	<SocialIcon url="https://twitter.com/UpGrad_Edu" style={{ height: 25, width: 25}}/>
    </div>

</div>
</div>
</footer>
)

}
export default Footer;