import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import history from './history';

class Header extends Component {
  // shouldComponentUpdate() {
  //   return true;
  // }
  // _handleLogout() {
    //  this.props.logoutUser();
    //  history.push("/");
    //  this.setState({state: this.state});
  // }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (<li><a href="/auth/google">Login with Google</a></li>);
      default:
        return (<li><a href="/api/logout">Logout</a></li>);
        // return (<li><a onClick={() => this._handleLogout() }>Logout</a></li>);
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="left brand-logo" to={this.props.auth ? '/surveys' : '/'}>
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

// const mapStateToProps = (state) => {
//   return { auth: state.auth };
// };
export default connect(mapStateToProps, actions)(Header);
