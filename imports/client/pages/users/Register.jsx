import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor() {
        super();

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <main className="cc-main">
                 <div className="container-fluid mainheader">
                    <div className="container mainheader-wrapper">
                         <img src="http://design.demos.classicinformatics.com/boss/img/donut-white.png" />
                    </div>
                </div> 
                <div class="formsubmit-donut register">
                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>
                    <div class="loginfield">
                        <AutoField name="email"/>
                        <ErrorField name="email"/>
                    </div>
                    <div class="loginfield">    
                        <AutoField name="password" type="password"/>
                        <ErrorField name="password"/>
                    </div>
                    <div class="loginfield">    
                        <AutoField name="confirm_password" type="password"/>
                        <ErrorField name="confirm_password"/>
                    </div>    
                    <button type="submit">
                        Register
                    </button>
                </AutoForm>
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

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;