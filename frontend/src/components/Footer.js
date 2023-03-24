import React from "react";
import '../footer.css';

const Footer = () => {

    return (
        <footer className="footer footer-center bg-primary text-primary-content">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
            <div>
                <img width="140" height="140" alt="#" src="https://firebasestorage.googleapis.com/v0/b/static-images-ee67c.appspot.com/o/logoJlmz.png?alt=media&token=2692feb9-eb92-44c6-bfd1-a99359ce0fe7" className="inline-block fill-current" />
                <p className="font-bold">
                    Jose Luis Muñoz Zuta <br />Software Engineer
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div className="wrapper py-2">
                <div className="navbar">
                    <div className="navbar__item -purple mx-2">
                        <span className="navbar__icon">
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                    <div className="navbar__item -navy-blue mx-2">
                        <span className="navbar__icon">
                            <i className="fa-brands fa-linkedin"></i>
                        </span>
                    </div>
                    <div className="navbar__item -black mx-2">
                        <span className="navbar__icon">
                            <i className="fa-brands fa-github"></i>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;