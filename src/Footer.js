import React, { Component } from 'react'
import './Footer.css'


export default class footer extends Component {
  render() {
    return (
      <div className="footer-issam">

        <div className="copyright">
          <p className="droits" >
            ©2018 Team Rocket Company All rights reserved.
        </p>
        </div>
        <div className="reseaux">
        {/* <div className="reseaux"> */}

        
          <a className="twitter" href="https://twitter.com/pokemon"
          //class="twitter-share-button" 
          //data-count="vertical" data-via="InfoWebMaster"
          >
            <img src={require('./Component/twitter.png')} className="social" />
          </a>


          <a className="youtube" href="https://www.youtube.com/user/pokemon"
          // class="twitter-share-button" 
          //data-count="vertical" data-via="InfoWebMaster"
          >
            <img src={require('./Component/youtube.png')} className="social" />
          </a>

          <a className="instagram" href="https://www.instagram.com/pokemon/"
          //class="twitter-share-button" 
          //data-count="vertical" data-via="InfoWebMaster"
          >
            <img src={require('./Component/instagram.png')} className="social" />
          </a>

          <a className="facebook" href="https://www.facebook.com/Pokemon/"
          //class="twitter-share-button" 
          //data-count="vertical" data-via="InfoWebMaster"
          >
            <img src={require('./Component/facebook.png')} className="social" />
          </a>
          </div>
        {/* </div> */}

      </div>
    )
  }
}
