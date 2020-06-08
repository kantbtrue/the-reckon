import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import data from '../utils/_DATA.json';

export default class Settings extends Component {
    state = {
        code: 'DL',
        accType: 'zerodha',
        tradeType: 'interaday',
        isModalActive: this.props.show,
        saveStatus: 'Save'
    };
    componentDidMount() {
        this.props.handleSettings(this.state);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            isModalActive: nextProps.show
        });
    }
    // static getDerivedStateFromProps(props, state){
    //     if ( state.isModalActive !== props.show ) {
    //         return {
    //             ...state,
    //             isModalActive: props.show
    //         }
    //     }

    //     return null;
    // }
    handleSelect = (e) => {
        this.setState({
            ...this.state,
            code: e.target.value
        });
    };
    handleAcc = (e) => {
        this.setState({
            ...this.state,
            accType: e.target.value
        });
    };
    handleTrade = (e) => {
        this.setState({
            ...this.state,
            tradeType: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            saveStatus: 'Saving'
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                saveStatus: 'Saved'
            });
        }, 1000);
        this.props.handleSettings(this.state);        
    };
    handleModalClose = () => {
        this.setState({
            ...this.state,
            isModalActive: false
        });
    };
    render() {
        return (
            <Modal show={this.state.isModalActive} onHide={this.handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="broker-state">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" value={this.state.code} onChange={this.handleSelect} custom>
                                {Object.values(data.states).map(state => {
                                    return (
                                        <option key={state.name} value={state.code}>{state.name}</option>
                                    );
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Account Type</Form.Label>
                            {data.accTypes.map((accType, i) => {
                                return (
                                    <Form.Check key={i} custom type="radio" id={`broker-${accType.slug}-acc`} label={accType.name} name="broker-acc-type" value={accType.slug} onChange={this.handleAcc} checked={this.state.accType === accType.slug} />
                                );
                            })}
                        </Form.Group>
                        <Form.Group controlId="broker-trading-type">
                            <Form.Label>Trading Type</Form.Label>
                            {data.tradingTypes.map((tradingType, i) => {
                                return (
                                    <Form.Check key={i} custom type="radio" id={`broker-${tradingType.slug}-trading`} label={tradingType.name} name="broker-trading-type" onChange={this.handleTrade} value={tradingType.slug}  checked={this.state.tradeType === tradingType.slug} />
                                );
                            })}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" variant="secondary" size="lg" onClick={this.handleModalClose}>Close</Button>
                        <Button type="button" variant="primary" size="lg" onClick={this.handleSubmit}>{this.state.saveStatus}</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

