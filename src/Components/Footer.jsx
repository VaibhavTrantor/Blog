import { Email, Facebook, Instagram, LocationOn, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import "./Footer.scss"
const Footer = () => {
    return (
        <div className='footercontainer'>
            <div className="footerleft">
                <h1 className="footertitle">BlogHome.</h1>
                <p className="footerdescription">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or rendomised words which dont't look even slightly believable</p>
                <div className="footerSocialcontainer">
                    <div className="footerfacebook">
                        <Facebook />
                    </div>
                    <div className="footerInstagram">
                        <Instagram />
                    </div>
                    <div className="footerTwitter">
                        <Twitter />
                    </div>
                    <div className="footerPinterest">
                        <Pinterest />
                    </div>
                </div>
            </div>
            <div className="footercenter">
                <h3 className="centertitle">Useful Links</h3>
                <ul className="footerlist">
                    <li className="footerlistitem">Home</li>
                    <li className="footerlistitem">Tech Blogs</li>
                    <li className="footerlistitem">Lifestyle Blogs</li>
                    <li className="footerlistitem">Nature Blogs</li>
                    <li className="footerlistitem">Travel Blogs</li>
                    <li className="footerlistitem">Cars Blogs</li>
                    <li className="footerlistitem">Bikes Blogs</li>
                </ul>
            </div>
            <div className="footerRight">
                <h3 className="centertitle">Contact</h3>
                <div className="footercontactItem">
                    <LocationOn className='footericon'/> Kota, Rajasthan
                </div>
                <div className="footercontactItem">
                    <Email className='footericon'/> Contact@BlogHome.com
                </div>
            </div>
        </div>
    )
}

export default Footer
