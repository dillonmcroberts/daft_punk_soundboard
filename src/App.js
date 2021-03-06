import React, { Component } from 'react';
import './App.css';
import SoundPad from './soundpad.js'
import $ from 'jquery';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {scale: "low"}
    this.toggleScale = this.toggleScale.bind(this)
    this.keyPressHandler = this.keyPressHandler.bind(this)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.keyUpHandler = this.keyUpHandler.bind(this)
  }

  keyPressHandler(event){
    event.preventDefault()
    $("."+ event.code).click()
  }

  keyDownHandler(event){
    $("." + event.code).css("backgroundColor", "#26ee5e")
  }

  keyUpHandler(event){
    $("." + event.code).css("backgroundColor", "#18C964")
  }

  componentDidMount(){
    window.addEventListener("keypress", this.keyPressHandler)
    window.addEventListener("keydown", this.keyDownHandler)
    window.addEventListener("keyup", this.keyUpHandler)
  }

  toggleScale(){
    if (this.state.scale === "high"){
      this.setState({scale: "low"})
    }else if (this.state.scale === "low"){
      this.setState({scale: "high"})
    }
  }

  render() {
    if (this.state.scale === "low"){
    return (
      <div className="App">
        <div className="first-set">
          <SoundPad name="Work It" keyboard="q" classname='KeyQ' clipPath="./sounds/work_it.mp3"/>
          <SoundPad name="Make It" keyboard="w" classname='KeyW' clipPath="./sounds/make_it.mp3"/>
          <SoundPad name="Do It" keyboard="e" classname='KeyE' clipPath="./sounds/do_it.mp3"/>
          <SoundPad name="Makes Us" keyboard="r" classname='KeyR' clipPath="./sounds/makes_us.mp3"/>
        </div>
        <div className="second-set">
          <SoundPad name="Harder" keyboard="a" classname='KeyA' clipPath="./sounds/harder.mp3"/>
          <SoundPad name="Better" keyboard="s" classname='KeyS' clipPath="./sounds/better.mp3"/>
          <SoundPad name="Faster" keyboard="d" classname='KeyD' clipPath="./sounds/faster.mp3"/>
          <SoundPad name="Stronger" keyboard="f" classname='KeyF' clipPath="./sounds/stronger.mp3"/>
        </div>
        <div className="third-set">
          <SoundPad name="More than" keyboard="u" classname='KeyU' clipPath="./sounds/more_than.mp3"/>
          <SoundPad name="Hour" keyboard="i" classname='KeyI' clipPath="./sounds/our.mp3"/>
          <SoundPad name="Our" keyboard="o"classname='KeyO' clipPath="./sounds/hour.mp3"/>
          <SoundPad name="Never" keyboard="p" classname='KeyP' clipPath="./sounds/never.mp3"/>
        </div>
        <div className="fourth-set">
          <SoundPad name="Ever" keyboard="j" classname='KeyJ' clipPath="./sounds/ever.mp3"/>
          <SoundPad name="After" keyboard="k" classname='KeyK' clipPath="./sounds/after.mp3"/>
          <SoundPad name="Work is" keyboard="l" classname='KeyL' clipPath="./sounds/work_is.mp3"/>
          <SoundPad name="Over" keyboard=";" classname='Semicolon' clipPath="./sounds/over.mp3"/>
        </div>

        <div className="mod-key">
          <button name="High/Low" className="Space" onClick={this.toggleScale}>Go High <br/><br/><div className="key-text">Spacebar</div></button>
        </div>
      </div>
    );
  } else {
    return(
      <div className="App">
        <div className="first-set">
          <SoundPad name="Work It" keyboard="q" classname='KeyQ' clipPath="./sounds/high/work_it.mp3"/>
          <SoundPad name="Make It" keyboard="w" classname='KeyW' clipPath="./sounds/high/make_it.mp3"/>
          <SoundPad name="Do It" keyboard="e" classname='KeyE' clipPath="./sounds/high/do_it.mp3"/>
          <SoundPad name="Makes Us" keyboard="r" classname='KeyR' clipPath="./sounds/high/makes_us.mp3"/>
        </div>
        <div className="second-set">
          <SoundPad name="Harder" keyboard="a" classname='KeyA' clipPath="./sounds/high/harder.mp3"/>
          <SoundPad name="Better" keyboard="s" classname='KeyS' clipPath="./sounds/high/better.mp3"/>
          <SoundPad name="Faster" keyboard="d" classname='KeyD' clipPath="./sounds/high/faster.mp3"/>
          <SoundPad name="Stronger" keyboard="f" classname='KeyF' clipPath="./sounds/high/stronger.mp3"/>
        </div>
        <div className="third-set">
          <SoundPad name="More than" keyboard="u" classname='KeyU' clipPath="./sounds/high/more_than.mp3"/>
          <SoundPad name="Hour" keyboard="i" classname='KeyI' clipPath="./sounds/high/hour.mp3"/>
          <SoundPad name="Our" keyboard="o" classname='KeyO' clipPath="./sounds/high/our.mp3"/>
          <SoundPad name="Never" keyboard="p" classname='KeyP' clipPath="./sounds/high/never.mp3"/>
        </div>
        <div className="fourth-set">
          <SoundPad name="Ever" keyboard="j" classname='KeyJ' clipPath="./sounds/high/ever.mp3"/>
          <SoundPad name="After" keyboard="k" classname='KeyK' clipPath="./sounds/high/after.mp3"/>
          <SoundPad name="Work is" keyboard="l" classname='KeyL' clipPath="./sounds/high/work_is.mp3"/>
          <SoundPad name="Over" keyboard=";" classname='Semicolon' clipPath="./sounds/high/over.mp3"/>
        </div>

        <div className="mod-key">
          <button name="High/Low" className="Space" onClick={this.toggleScale}> Go Low <br/><br/> <div className="key-text">Spacebar</div></button>
        </div>
      </div>
    )
    }
  }
}

export default App;
