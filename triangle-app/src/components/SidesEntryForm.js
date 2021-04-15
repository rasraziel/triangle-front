import React, {Component} from 'react';
import axios from '../connections';
import '../App.css';


export default class SidesEntryForm extends Component{


    constructor(props){
        super(props);
        this.state = {
            ab:'',
            bc:'',
            ca:'',
        };
    }

	onABChange=(e)=> this.setState({ab: e.target.value});
    onBCChange=(e)=> this.setState({bc: e.target.value});
    onCAChange=(e)=> this.setState({ca: e.target.value});

    calculate = () => {
        
    const data ={
		"ab": this.state.ab,
		"bc": this.state.bc,
		"ca": this.state.ca
	}

    axios.post("sides", data)
         .then(resp=>{
             console.log(resp);
			 this.props.changeAnswer(resp.data);
        }).catch(error=>{
            console.log(error);
			this.props.changeAnswer("This is not a triangle!");
        }).finally(()=>this.setState({ab:'',bc:'', ca:''}));

    }

    render(){
	
	
    return (
				<div className="sides" style={this.props.style}>
					<p>Insert the side values for the triangle. As a default, line coordinates are connected
						to construct a triangle. (0-300)</p>
					<form action="/">
						<label for="fname">side A</label>
						<input type="number" id="sideA" value={this.state.ab} onChange={this.onABChange} placeholder="e.g.40" min="0" max="300" required></input>
						<span className="validity"></span>
						<br/>

						<label for="lname">side B</label>
						<input type="number" id="sideB" value={this.state.bc} onChange={this.onBCChange} placeholder="e.g.40" min="0" max="300" required></input>
						<span className="validity"></span>
						<br/>

						<label for="lname">side C</label>
						<input type="number" id="sideC" value={this.state.ca} onChange={this.onCAChange} placeholder="e.g.160" min="0" max="300" required></input>
						<span className="validity"></span>
					</form>
					<button className="calcBtn" onClick={this.calculate} style={{marginTop: '60px'}}>Calculate</button>
				</div>
			);
}
}
