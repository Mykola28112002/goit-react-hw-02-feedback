import { Section } from './Section/Section';
import React, { Component } from "react";

import buttons from '../data/buttons.json';


export class App extends Component {
    
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }
  
  static propTypes = {};

  options = () => {
  }
  onLeaveFeedback = () => { }
  good = () => {console.log('kjdgfhvuiasfg')}
  neutral = () => { }
  bad = () => { }
  total = () => { }
  positivePercentage = () => {}

  render() {
    return <div>
      <Section buttons={buttons}
        state={this.state}
        good={this.good}
      />
    </div>
  }
}