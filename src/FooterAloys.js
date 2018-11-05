import React, { Component } from 'react'
import './FooterAloys.css'


export default class FooterAloys extends Component {
render() {
return (
<div className="footer-aloys">

 <div className="copyright">
<p className="droits" >
©2018 Team Rocket Company All rights reserved.
</p>
</div> 

<div className="reseaux">


<a className="twitter" href="https://twitter.com/pokemon"><img src={require('./Component/twitter.png')} className="social" /></a>


<a className="youtube" href="https://www.youtube.com/user/pokemon"><img src={require('./Component/youtube.png')} className="social" /></a>

<a className="instagram" href="https://www.instagram.com/pokemon/"><img src={require('./Component/instagram.png')} className="social" /></a>

<a className="facebook" href="https://www.facebook.com/Pokemon/"><img src={require('./Component/facebook.png')} className="social" /></a>


</div>
</div>

)
}
}