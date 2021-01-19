import {Component} from "react";
import {Col, Form, Row} from "react-bootstrap";
import ValidateComponent from "./ValidateComponent"
import CharComponent from "./CharComponent";

class SecondAssignment extends Component<any,any> {

    state = {
        userText: '',
        textSize: null
    }

    handleCharCount = (inputString) => {
        const stringLength = inputString.length
        this.setState({textSize:stringLength})
    }

    handleUserTextChange = (e) => {
        const inputValue = e.target.value

        this.setState({userText: inputValue})
        this.handleCharCount(inputValue)
    }

    handleCharClick = (charIndex) => {
        const newString = this.state.userText.split('').filter((char, index) => index !== charIndex).join('')
        this.setState({userText: newString})
        this.handleCharCount(newString)
    }

    render(){
        return(
            <>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Enter some text</Form.Label>
                            <Form.Control name="userText" type="text" value={this.state.userText}
                                          onChange={this.handleUserTextChange}/>
                        </Form.Group>
                        {this.state.textSize ? <p>Your text is {this.state.textSize} size</p>: null}
                        <ValidateComponent textLength={this.state.textSize}/>
                        {
                            this.state.userText.split('').map(
                                (char,index) =>
                                    <CharComponent key={index}
                                                   stringCharacter={char}
                                                   handleCharClick={() => this.handleCharClick(index)}/>
                            )
                        }

                    </Col>
                </Row>
            </>
        )
    }

}

export default SecondAssignment