import React, { Component } from 'react'
import { connect } from 'react-redux';
import {createPosts} from '../actions/postActions';

import {Button, Form} from 'react-bootstrap';
import '../App.css';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            body : '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const body = this.state.body;
        const new_post = {
            title,
            body,
        };
        this.setState({
            title : '',
            body : '',
            display : '',
        })
        this.props.createPosts(new_post);
    }

    getStyle = () => {
        this.setState({
            display : this.state.display ? '' : 'true',
        })
    }

    render() {
        return (
          <div>
            <div id="add">
              <Button variant="info mb-2" onClick={this.getStyle}>
                Add Post
              </Button>
            </div>
              <Form
                onSubmit={this.onSubmit}
                style={{ display: this.state.display ? "block" : "none" }}
              >
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Post Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    name="body"
                    value={this.state.body}
                    onChange={this.onChange}
                    placeholder="Post Body"
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="subm1">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
          </div>
        );
    }
}

export default connect(null, {createPosts})(AddPost);
