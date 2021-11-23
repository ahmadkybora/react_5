import React, { Component } from 'react';
import image from './banner.jpg';

class Banner extends Component {
    render() { 
        return (
            <div className="container-fluid mt-3">
                <img 
                    className="w-100"
                    src={image} 
                />
            </div>
        );
    }
}
 
export default Banner;