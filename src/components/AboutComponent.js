import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedInstruction: null
        };
    }

    onInstructionSelect(instruction) {
        this.setState({selectedInstruction: instruction});
    }

    renderSelectedInstruction(instruction) {
        if (instruction) {
            return (
                <Card>
                    <CardImg top src={instruction.image} alt={instruction.name} />
                    <CardBody>
                        <CardTitle>{instruction.name}</CardTitle>
                        <CardText>
                            <hr />
                            {instruction.description1} <hr />
                            {instruction.description2} <hr />
                            {instruction.description3}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />
    }

    render() {
        const about = this.props.instructions.map(instruction => {
            return (
                <div key={instruction.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onInstructionSelect(instruction)}>
                        <CardImg width="100%" src={instruction.image} alt={instruction.name} />
                        <CardImgOverlay>
                            <CardTitle>{instruction.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {about}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedInstruction(this.state.selectedInstruction)}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;