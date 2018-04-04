import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        Meteor.call('donut.create', data, (err) => {
            if(!err) {
                FlowRouter.go('donuts.list');
            }
        });
    };

    render() {
        return (
            <main>
                <div className="container-fluid mainheader">
                    <div className="container mainheader-wrapper">
                         <img src="http://design.demos.classicinformatics.com/boss/img/donut-white.png" />
                    </div>
                </div>
                <div className="container-donuts-create">
                    <div className="container-donuts-create-form">
                        <h1 className="heading-main">Add a donut</h1>
                        <p className="heading-main-p">dont take to long</p>
                        <span className="select-donut">Select a donut!</span>
                        <ul className="select-donut-list">
                            <li>
                                <img src="http://design.demos.classicinformatics.com/boss/img/dount_1.png" />
                            </li>
                             <li>
                                <img src="http://design.demos.classicinformatics.com/boss/img/dount_2.png" />
                            </li>
                             <li>
                                <img src="http://design.demos.classicinformatics.com/boss/img/dount_3.png" />
                            </li>
                        </ul>
                        <span className="select-donut">Can you eat this?</span>
                            <div className="radio-styling">
                            <label>
                                <input type="radio" class="option-input radio" name="example" checked />
                                Yes
                            </label>
                            <label>
                                <input type="radio" class="option-input radio" name="example" />
                                No
                            </label>
                            
                            </div>
                        <div className="donuts-form">
                    <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit}>
                        <AutoField name="name" placeholder="Name"/>
                        <ErrorField name="name"/>

                        <AutoField name="price" placeholder="Price"/>
                        <ErrorField name="price"/>

                        <AutoField name="isComestible"/>
                        <ErrorField name="isComestible"/>

                        <button type="submit">
                            Create
                        </button>
                    </AutoForm>
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