import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { configureStore } from "@reduxjs/toolkit";
import fire from'@/assets/img/fire.png'





// actions
export const incrementFollowers = () => {
  return {
    type: 'INCREMENT_FOLLOWERS'
  }
}

// reducers
export const followersReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT_FOLLOWERS':
      return state + 1
    default:
      return state
  }
}


const store = configureStore (
  followersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


class FollowerButton extends React.Component {
  handleOnClick = () => {
    this.props.dispatch(incrementFollowers())
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Image src={fire} alt="followerImg" width={25} height={25} onClick={this.handleOnClick} />
        <p> Followers {this.props.followers}</p>
      </div>
    )
  }
}

// Connect Redux store to React component
const mapStateToProps = state => {
  return { followers: state }
}

const ConnectedFollowerButton = connect(mapStateToProps)(FollowerButton)