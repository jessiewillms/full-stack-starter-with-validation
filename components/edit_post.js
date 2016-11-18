import React from 'react';
import $ from 'jquery';
import styles from './edit_post.scss'
import { browserHistory } from 'react-router';

var Field = ({ label, value, onChange, name }) => <div className={ styles.field }>
  <label>{ label }</label>
  <input type='text' value={ value } name={ name } onChange={ onChange } />
</div>

var Select = ({ label, value, onChange, name }) => <select className={ styles.field }>
  <option type='text' value={ value } name={ name } onChange={ onChange } >{ label }</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>

var EditPost = React.createClass({
  getInitialState: function() {
    var emptyPost = {
      title: '',
      category: '',
      user: '',
      description: '',
      image: '',
      timer: ''
    }
    if (this.props.params.id) {
      var post = this.props.posts.find((post) => post._id == this.props.params.id);
      return {
        isEditing: true,
        post: post || emptyPost
      }
    } else {
      return {
        isEditing: false,
        post: emptyPost
      }
    }
  },

  render: function() {
    return  <div className={ styles.editor }>
      <Field label="Title" value={ this.state.post.title } name='title' onChange={ this.updateField } />
      <Field label="Description" value={ this.state.post.description } name='description' onChange={ this.updateField } />
      <Field label="Image URL" value={ this.state.post.image } name='image' onChange={ this.updateField } />
      <Field label="Category" value={ this.state.post.category } name='category' onChange={ this.updateField } />
      <Field label="Your Name" value={ this.state.post.user } name='user' onChange={ this.updateField } />
      <Field label="Timer" value={ this.state.post.timer } name='timer' onChange={ this.updateField } />

      <Select label="Timer" value={ this.state.post.timer } name='timer' onSelectChange={ this.updateField } />

      <button onClick={ this.save }>Save</button>
    </div>
  },

  save: function() {
    if (this.state.isEditing) {
      var url = '/api/posts/' + this.props.params.id;
      var method = 'PUT';
    } else {
      var url = '/api/posts';
      var method = 'POST';
    }

    $.ajax({
      method: method,
      url: url,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(this.state.post),
      success: () => {
        this.props.onRefresh();
        browserHistory.push('/');
      }
    });
  },

  updateField: function(evt) {
    var post = this.state.post;
    post[evt.target.name] = evt.target.value;
    this.setState({post: post});
  },
  onSelectChange: function(evt){
    var post = this.state.post;
    post[evt.target.name] = evt.target.value; // this might need to be different because select menus
    this.setState({
      post: post
    })
  }
});

module.exports = EditPost;
