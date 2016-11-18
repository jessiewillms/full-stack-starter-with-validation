import React from 'react';
import styles from './header.scss';
import { Link } from 'react-router';

var Header = React.createClass({
  render: function() {
    return  <div>
      <div className={ styles.header } >
        <div className={ styles.brand }>
          <Link to='/'>New quiz app</Link>
        </div>
        <div className={ styles.actions }>
          <Link to='/post'>Post new quiz!!</Link>
        </div>
      </div>

    </div>
  }
});

module.exports = Header;
