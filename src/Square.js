/**
 * Created by Walter on 2017/5/5.
 */

import React from 'react';
import './index.css';

class Square extends React.Component {

    render() {
        let clsName = "square";
        if(this.props.lightsUp === true) {
            clsName += ' lights-up';
        }
        return (
            <button className={clsName} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }

}

export default Square;