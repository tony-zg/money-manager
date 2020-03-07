import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
  render(){
    return(
      <div className="footer">
      <SocialIcon className="iconOne" url="http://linkedin.com/in/tonyg06" target="_blank"/>
      <SocialIcon url="https://github.com/TG0606" target="_blank" />
      </div>
    );
  }
}

export default Footer;
