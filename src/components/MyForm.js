import React, { Component } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import PointsEntryForm from './PointsEntryForm';
import SidesEntryForm from './SidesEntryForm';
import '../App.css';




export default class MyForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectionInfoVisible: true,
            pointsWindowVisible: false,
            sidesWindowVisible: false,
            coordinates: null,
            color1: null,
            color2: null,
            answer: 'triangle type...'
        };
    }

    hideContentSides = () => {
        if (!this.state.sidesWindowVisible)
            this.setState({ sidesWindowVisible: true, pointsWindowVisible: false, selectionInfoVisible: false })
        else
            this.setState({ sidesWindowVisible: false, pointsWindowVisible: false, selectionInfoVisible: true })
    }

    hideContentPoints = () => {
        if (!this.state.pointsWindowVisible)
            this.setState({ sidesWindowVisible: false, pointsWindowVisible: true, selectionInfoVisible: false })
        else
            this.setState({ sidesWindowVisible: false, pointsWindowVisible: false, selectionInfoVisible: true })
    }

    getRandomColor = () => {
        return "#" + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
    }

    changeAnswer = (result, coordinates, color1, color2) => this.setState({ answer: result, coordinates: coordinates, color1: color1, color2: color2 });

    render() {

        const { selectionInfoVisible, pointsWindowVisible, sidesWindowVisible, color1, color2 } = this.state;
        const axis = this.state.coordinates;
        return (
            <div className="container">
                <div className="infoText">
                    <h1>Welcome to the Triangle App</h1>
                    <p>Test if a triangle is scalene, equilateral, isosceles, or neither of these. Choose between two inputs
                        represented by the buttons "coordinates" and "sides" of the triangle.
                    </p>
                </div>
                <div className="btns" style={{ border: '0' }}>
                    <button className="coordinates" onClick={this.hideContentPoints} >Coordinates</button>
                    <button className="sidesBtn" onClick={this.hideContentSides}>Sides</button>
                </div>
                <div className="content">
                    <div className="drawing">
                        <Stage width={400} height={300}>
                            <Layer>
                                {axis && <Line closed points={[axis.a.x, 300 - axis.a.y, axis.b.x, 300 - axis.b.y, axis.c.x, 300 - axis.c.y]}
                                    stroke="black"
                                    draggable='true'
                                    strokeWidth={1}
                                    fillLinearGradientStartPoint={{ x: axis.a.x, y: 300 - axis.a.y }}
                                    fillLinearGradientEndPoint={{ x: axis.c.x, y: 300 - axis.c.y }}
                                    fillLinearGradientColorStops={[0, color1, 1, color2]} />}
                            </Layer>
                        </Stage>
                    </div>
                    <div className="inputs">
                        <h2 style={{ border: '0', display: selectionInfoVisible ? 'flex' : 'none' }} className="hiddenContent">Choose your input as coordinates or side lengths of the triangle</h2>
                        <PointsEntryForm getRandomColor={this.getRandomColor} changeAnswer={this.changeAnswer} style={{ display: pointsWindowVisible ? 'block' : 'none' }} />
                        <SidesEntryForm getRandomColor={this.getRandomColor} changeAnswer={this.changeAnswer} style={{ display: sidesWindowVisible ? 'block' : 'none' }} />
                    </div>
                </div>
                <div className="answer">
                    <h2 id="txtValue">{this.state.answer}</h2>
                </div>
            </div>
        );
    }
}