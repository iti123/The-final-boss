import React, {Component} from 'react';
import '../assets/css/bootstrap.css';
import '../assets/css/home.css';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


class Home extends Component {
    render() {
        return (

            <main>
                <div className="container-fluid mainheader">
                    <div className="container mainheader-wrapper">
                         <img src="http://design.demos.classicinformatics.com/boss/img/donut-white.png" />
                    </div>
                </div>    
                    <div className="container mainheader-btn">
                        <div className="col-md-6 col-xs-12 col-sm-6 col-lg-6 login-icon">
                            <img src="http://design.demos.classicinformatics.com/boss/img/login-icon.png" />
                            <a className="btn-donut" href={FlowRouter.url('login')}>Login</a>
                        </div>
                        <div className="col-md-6 col-xs-12 col-sm-6 col-lg-6 register-icon">
                            <img src="http://design.demos.classicinformatics.com/boss/img/register-icon.png" />
                            <a className="btn-donut" href={FlowRouter.url('register')}>Register</a>
                        </div>
                    </div> 
                    <footer className="container main-footer">
                        <div className="row sectionfooter-2">
                                <div className="col-md-6 col-xs-12 col-sm-6 col-lg-6 leftsection">
                                        <span>Don’t forget to call for a donut or subscribe!</span>
                                </div>
                                <div className="col-md-6 col-xs-12 col-sm-6 col-lg-6 rightsection">
                                        <a href="tel:+ 008 045 0477 045">+ 008 045 0477 045</a>
                                        <div className="email-subscribe">
                                            <input type="email" placeholder="Email"/>
                                            <input type="submit" value="Subscribe"/>
                                        </div>
                                </div>
                        </div>
                        <div className="footer-logo">
                            <img src="http://design.demos.classicinformatics.com/boss/img/donut-logo.png" />
                        </div>
                    </footer>
            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
