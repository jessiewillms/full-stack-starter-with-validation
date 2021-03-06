import React from 'react';
import styles from './post.scss';
import { Link } from 'react-router';

var Post = React.createClass({
  render: function() {
    return  <div className={ styles.column } >
      <div className={ styles.post }>
        <div className={ styles.user }>{ this.props.user } posted:</div>
        <div className={ styles.image }><img src={ this.props.image } /></div>
        <div className={ styles.category }>{ this.props.category }</div>
        <div className={ styles.title }>{ this.props.title }</div>
        <div className={ styles.description}>{ this.props.description }</div>
        <div className={ styles.timer}>{ this.props.timer }</div>
        <div className={ styles.actions }>
          <Link to={ '/edit/' + this.props.id }>Edit</Link>
        </div>
      </div>
    </div>
  }
});

module.exports = Post;
