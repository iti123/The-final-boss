import React, {Component} from 'react';
import '../assets/css/bootstrap.css';
import '../assets/css/home.css';



class bestdonuts extends Component {
    render() {
        return (

            <main>
                <div className="container-fluid mainheader">
                    <div className="container mainheader-wrapper">
                         <img src="http://design.demos.classicinformatics.com/boss/img/donut-white.png" />
                    </div>
                </div>
                <div className="banner-best-donuts">
                      <div className="banner-text">
                        <h2>Best donut in the city!</h2>
                        <p>Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see sitting. Up twenty limits as months. Inhabit so perhaps of in to certain.</p>    
                      </div>  
                </div>
                    <div className="container-fluid donuts-three">
                        <div className="row">    
                            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 donuts-three-1">
                                <h3>Dispatched entreaties boisterous say why stimulated. Certain forbade picture now prevent carried she get see</h3>
                                <p>Old unsatiable our now but considered travelling impression. In excuse hardly summer in basket misery. By rent an part need. At wrong of of water those linen. Needed oppose seemed how all. Very mrs shed shew gave you.</p>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 donuts-three-2">
                                <h3>Civility vicinity graceful is it at. Improve up at to on mention perhaps raising. </h3>
                                <p>She travelling acceptance men unpleasant her especially entreaties law. Law forth but end any arise chief arose. Old her say learn these large. Joy fond many ham high seen this. Few preferred continual sir led incommode neglected.</p>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4 donuts-three-3">
                                <h3>Certain forbade picture now prevent carried she get see sitting. Up twenty limits as months.</h3>
                                <p>Up twenty limits as months. Inhabit so perhaps of in to certain.</p>
                            </div>
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

bestdonuts.propTypes = {};
bestdonuts.defaultProps = {};

export default bestdonuts;
