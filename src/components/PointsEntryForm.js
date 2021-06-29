import React, { Component } from 'react';
import axios from '../connections';
import '../App.css';

export default class PointsEntryForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            aX: '',
            bX: '',
            cX: '',
            aY: '',
            bY: '',
            cY: ''
        };
    }

    onAXChange = (e) => this.setState({ aX: e.target.value > 300 ? 300 : Math.abs(e.target.value) });
    onBXChange = (e) => this.setState({ bX: e.target.value > 300 ? 300 : Math.abs(e.target.value) });
    onCXChange = (e) => this.setState({ cX: e.target.value > 300 ? 300 : Math.abs(e.target.value) });
    onAYChange = (e) => this.setState({ aY: e.target.value > 300 ? 300 : Math.abs(e.target.value) });
    onBYChange = (e) => this.setState({ bY: e.target.value > 300 ? 300 : Math.abs(e.target.value) });
    onCYChange = (e) => this.setState({ cY: e.target.value > 300 ? 300 : Math.abs(e.target.value) });


    validate = () => {

    }

    calculate = () => {

        const data = {
            "a": { "x": this.state.aX, "y": this.state.aY },
            "b": { "x": this.state.bX, "y": this.state.bY },
            "c": { "x": this.state.cX, "y": this.state.cY }
        }

        axios.post("points", data)
            .then(resp => {
                console.log(resp);
                const color1 = this.props.getRandomColor();
				const color2 = this.props.getRandomColor();
                this.props.changeAnswer("Triangle: " + resp.data, data, color1, color2);
            }).catch(error => {
                console.log(error);
                this.props.changeAnswer("This is not a triangle!");
            }).finally(() => this.setState({ aX: '', bX: '', cX: '', aY: '', bY: '', cY: '' }));

    }


    render() {
        const { aX, bX, cX, aY, bY, cY } = this.state;
        const disabled = (aX === '' || bX === '' || cX === '' || aY === '' || bY === '' || cY === '') ? true : false;
        return (
            <div className="points" style={this.props.style}>
                <p>Insert x and y coordinates of the 3 vertices of the triangle. (0-300)</p>

                <form action="/">
                    <label htmlFor="fname">Vertex point A (x, y)</label><br />
                    <input type="number" id="side1_posX" value={this.state.aX} onChange={this.onAXChange} placeholder="e.g.40" min="0" max="300" step="0.01"
                        required></input>
                    <span className="validity"></span>

                    <input type="number" id="side1_posY" value={this.state.aY} onChange={this.onAYChange} placeholder="e.g.40" min="0" max="300" step="0.01"
                        required></input>
                    <span className="validity"></span>
                    <br />

                    <label htmlFor="lname">Vertex point B (x, y)</label><br />
                    <input type="number" id="side2_posX" value={this.state.bX} onChange={this.onBXChange} placeholder="e.g.40" min="0" max="300" step="0.01"
                        required></input>
                    <span className="validity"></span>
                    <input type="number" id="side2_posY" value={this.state.bY} onChange={this.onBYChange} placeholder="e.g.120" min="0" max="300" step="0.01"
                        required></input>
                    <span className="validity"></span>
                    <br />

                    <label htmlFor="lname">Vertex point C (x, y)</label><br />
                    <input type="number" id="side3_posX" value={this.state.cX} onChange={this.onCXChange} placeholder="e.g.160" min="0" max="300" step="0.01"
                        required></input>
                    <span className="validity"></span>
                    <input type="number" id="side3_posY" value={this.state.cY} onChange={this.onCYChange} placeholder="e.g.140" min="0" max="300" step="0.01"
                        required></input>
                    <span className="validity"></span>
                </form>
                <button className="calcBtn" disabled={disabled} onClick={this.calculate}>Calculate</button>
            </div>
        );
    }
}