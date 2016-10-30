import React, { Component } from 'react';
import './App.css';

export default class SoundPad extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(clipPath){
    var audio = new Audio(clipPath)
    audio.play();
  }

  render() {
    return (
      <div>
        <button className={this.props.classname} onClick={this.handleClick.bind(this, this.props.clipPath)}> {this.props.name}</button>
      </div>
    );
  }
}
