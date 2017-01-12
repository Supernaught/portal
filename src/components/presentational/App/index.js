import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Header from '../Header';
import logo from './logo.svg';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  // <img src={logo} className="App-logo" alt="logo" />
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('app', className)} {...props}>
          <Header />
          <div className="app-header">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
