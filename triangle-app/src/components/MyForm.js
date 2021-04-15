import React, { Component } from 'react';
import PointsEntryForm from './PointsEntryForm';
import SidesEntryForm from './SidesEntryForm';
import logo from '../images/a.jpg';
import '../App.css';




export default class MyForm extends Component {


    constructor(props){
        super(props);
        this.state = {
            selectionInfoVisible: true,
            pointsWindowVisible: false,
            sidesWindowVisible: false,
            answer: 'triangle type...'
        };
    }

    hideContentSides=()=>{
        if(!this.state.sidesWindowVisible)
            this.setState({sidesWindowVisible:true, pointsWindowVisible: false, selectionInfoVisible: false})
        else
            this.setState({sidesWindowVisible:false, pointsWindowVisible: false, selectionInfoVisible: true})    
    }

    hideContentPoints=()=> {
        if(!this.state.pointsWindowVisible)
            this.setState({sidesWindowVisible:false, pointsWindowVisible: true, selectionInfoVisible: false})
        else
            this.setState({sidesWindowVisible:false, pointsWindowVisible: false, selectionInfoVisible: true})
    }

    changeAnswer=(result)=> this.setState({answer: result});

    render() {
        
       const {selectionInfoVisible, pointsWindowVisible, sidesWindowVisible} = this.state;
    return (
        <div className="container">
            <div className="infoText">
                <h1>Welcome to the Triangle App</h1>
                <p>Test if a triangle is scalene, equilateral, isosceles, or neither of these. Choose between two inputs
                    represented by the buttons "coordinates" and "sides" of the triangle.
                </p>
            </div>
            <div className="btns" style={{border: '0'}}>
                <button className="coordinates" onClick={this.hideContentPoints} >coordinates</button>
                <button className="sidesBtn" onClick={this.hideContentSides}>sides</button>
            </div>
            <div className="content">
                <div className="drawing">
                    <img src={logo}></img>
                </div>
                <div className="inputs">
                  <h2 style={{border: '0', display: selectionInfoVisible ? 'flex':'none'}} className="hiddenContent">Choose your input as coordinates or side lengths of the triangle</h2>
                  <PointsEntryForm changeAnswer={this.changeAnswer} style={{display: pointsWindowVisible ? 'block':'none'}}/>
                  <SidesEntryForm changeAnswer={this.changeAnswer} style={{display: sidesWindowVisible ? 'block':'none'}}/>
                </div>
		    </div>
	    	<div className="answer">
		    	<h2 id="txtValue">{this.state.answer}</h2>
	    	</div>
	    </div>
    );
        
    }  
        
       
}