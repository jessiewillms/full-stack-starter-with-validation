import React from 'react';
import Post from './post';

var PostList = React.createClass({
  render: function() {
    return  <div>
      <div className='brand'>
        { this.props.posts.map((post) =>
          <Post key={ post._id }
                id={ post._id }
                title={ post.title }
                image={ post.image }
                description={ post.description }
                category={ post.category }
                user={ post.user } />
        )}
      </div>
    </div>
  }
});

module.exports = PostList;
