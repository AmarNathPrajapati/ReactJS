import React from 'react'
import App from '../App';
import MadeGoal from './MadeGoal';

const Goal = (props) => {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }else{
        return <App/>;
    }
  }

export default Goal