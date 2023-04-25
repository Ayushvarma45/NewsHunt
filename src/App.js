
import './App.css';
import React, { Component } from 'react'
import { Navbar } from './component/Navbar';
import {News} from './component/News'
import {
  BrowserRouter as Router,
  Switch ,
  Routes,
  Route,
  Link,
  Redirect,Navigate
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize=6;
  apiKey = process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (

      <div>
      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
   
      <Routes>
      <Route eaxct path="/" element={< News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route eaxct path="/Business" element={< News setProgress={this.setProgress} apiKey = {this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route eaxct path="/Entertainment" element={< News setProgress={this.setProgress} apiKey = {this.apiKey}key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route eaxct path="/general" element={< News setProgress={this.setProgress} apiKey = {this.apiKey}key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route eaxct path="/Health" element={< News setProgress={this.setProgress} apiKey = {this.apiKey} key="health"  pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route eaxct path="/Science" element={< News setProgress={this.setProgress} apiKey = {this.apiKey}key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route eaxct path="/Sports" element={< News setProgress={this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route eaxct path="/Technology" element={< News setProgress={this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
        
        </Routes>
      
      </Router>
       </div>
    )
  }
}

export default App;


