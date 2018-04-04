import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '/imports/db';

class DonutsList extends React.Component {
    constructor() {
        super();
        this.removeDonut = this.removeDonut.bind(this);
        this.editDonut = this.editDonut.bind(this);
    }

    isDonutOwner = (donut) => {
        return donut.userId === Meteor.userId()
    };

    editDonut = (_id) => {
        FlowRouter.go('donuts.edit', {_id: _id});
    };

    removeDonut = (_id) => {
        Meteor.call('donut.remove', _id);
    };

    render() {
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                 <div className="container-fluid mainheader">
                    <div className="container mainheader-wrapper">
                         <img src="http://design.demos.classicinformatics.com/boss/img/donut-white.png" />
                    </div>
                </div>
                <div className="container dount-create">
                    <a href="" onClick={() => FlowRouter.go('donuts.create')}>Create a donut</a>
                </div>
                <div className="container dount-listing">
                    <ul>
                        
                    
                {
                    donuts.map(donut => {
                        return (
                            <li key={donut._id}>
                                <div className="imgaedount">
                                    <img src="http://design.demos.classicinformatics.com/boss/img/dount-list-1.png" />
                                </div>
                                <div className="dount-text">
                                    <span>{donut.name}</span>
                                    <p>10.09.2099</p>
                                </div>
                                {
                                    this.isDonutOwner(donut) &&
                                    <div className="dount-removelisting">
                                        <a href="" onClick={() => this.removeDonut(donut._id)}>Remove</a>
                                    </div>
                                }
                                {
                                    this.isDonutOwner(donut) &&
                                    <div className="dount-editlisting">
                                        <a href="" onClick={() => this.editDonut(donut._id)}>Edit</a>
                                    </div>
                                }
                                <div className="dpunt-price">
                                    <span>{donut.price}</span>
                                </div> 
                            </li>
                        )
                    })
                }
                </ul>
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
            </div>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);

