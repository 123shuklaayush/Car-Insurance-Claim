import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Twitter, YoutubeSearchedFor } from '@mui/icons-material';
import './Home/Footer.css'
function Footer() {
  return (
    <div className='foot'>
      <div className="footer-logo">
        <FacebookIcon className='footer-icon'/>
        <InstagramIcon className='footer-icon'/>
        <Twitter className='footer-icon' />
        <YouTubeIcon className='footer-icon'/>
      </div>
      <div className="copy-right">
      <p>© 2023 ABC Corporation. All rights reserved.This message indicates that the content and materials on the website are protected by copyright, and any unauthorized use or reproduction of the content is prohibited. It is a standard way to assert your ownership over the website's original content and protect your intellectual property rights.</p>
      </div>
    </div>
  )
}

export default Footer
