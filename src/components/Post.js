import React, { Component } from 'react';

import {Button} from 'react-bootstrap';
import '../App.css';

export default class Post extends Component {
    
    
    render() {
        return (
          <div>
            <h1 className="display-5">{this.props.post.title}</h1>
            <p className="lead">{this.props.post.body}</p>
            <div id="del">
              <Button variant="danger" onClick = {this.props.onClick.bind(this, this.props.post.title)}>DeletePost</Button>
            </div>
          </div>
        );
    }
}
