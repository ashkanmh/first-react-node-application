import React from 'react';
import './Caption.css'

class Caption extends React.Component {
    render () {
        return (<p className="caption">{this.props.caption}</p>);
    }
}

export default Caption;