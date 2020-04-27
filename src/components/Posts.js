import React, { Component } from 'react';

import Post from './Post';
import {connect} from 'react-redux';
import {fetchPosts, delPost} from '../actions/postActions';

import {ListGroup} from 'react-bootstrap';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  del = (title) => {
    this.props.delPost(title);
  }

  render() {

    return (
      <ListGroup>
        {
          this.props.posts.map((post, index) => 
              <ListGroup.Item key = {index} variant = {index % 2? 'dark' : 'light'}>
                <Post post={post} onClick = {this.del}/>
              </ListGroup.Item>
          )
        }
      </ListGroup>
    );
  }
}

const mapStateToProps = state => ({
    posts : state.posts.items,
    newPost : state.posts.item,
})


export default connect(mapStateToProps, { fetchPosts, delPost })(Posts);


