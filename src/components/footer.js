import React from 'react';
import '../App.css';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="row p-0 m-0">
                    <div className="col-sm-12 mt-4">
                        <p className="footer-text">Copyright © {new Date().getFullYear()} Habitale Interiors - All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        )
    };
};



