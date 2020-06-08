import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';

class Addshare extends Component {
    state = {
        share: {
            state: 'buy',
            value: 0,
            qty: 0
        },
        errors: {
            value: {
                state: false,
                message: 'Share value needs to be greater than 0.'
            },
            qty: {
                state: false,
                message: 'Share quantity needs to be greater than 0.'
            },
        }
    };
    handleSelect = (e) => {
        e.preventDefault();
        this.setState({
            share: {
                ...this.state.share,
                state: e.target.value
            }
        });
    };
    handleValue = (e) => {
        e.preventDefault();
        this.setState({
            share: {
                ...this.state.share,
                value: e.target.value
            }
        });
    };
    handleQty = (e) => {
        e.preventDefault();
        this.setState({
            share: {
                ...this.state.share,
                qty: e.target.value
            }
        });
    };
    handleAddShare = (e) => {
        e.preventDefault();
        if ( this.state.share.qty === 0 || this.state.share.value === 0 ) {
            this.setState({
                share: {
                    ...this.state.share
                },
                errors: {
                    value: {
                        ...this.state.errors.value,
                        state: this.state.share.value === 0 && true
                    },
                    qty: {
                        ...this.state.errors.qty,
                        state: this.state.share.qty === 0 && true
                    }
                }
            });
        } else {
            this.props.handleAddShare(this.state.share);
            this.setState({
                share: {
                    state: 'buy',
                    value: 0,
                    qty: 0
                },
                errors: {
                    value: {
                        ...this.state.errors.value,
                        state: false
                    },
                    qty: {
                        ...this.state.errors.qty,
                        state: false
                    }
                }
            });
        };
        document.getElementById('share-state').focus();
    };
    render() {
        return (
            <Form className="p-3 bg-light rounded" onSubmit={this.handleAddShare}>
                <Row className="px-3">
                {this.state.errors.value.state && (
                    <Col xs={12} className="alert alert-danger">{this.state.errors.value.message}</Col>
                )}
                {this.state.errors.qty.state && (
                    <Col xs={12} className="alert alert-danger">{this.state.errors.qty.message}</Col>
                )}
                </Row>
                <Row className="align-items-end">
                    <Col xs="auto">
                        <Form.Group>
                            <Button variant="primary" type="submit" size="lg">
                                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            </Button>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="share-state">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" size="lg" value={this.state.share.state} onChange={this.handleSelect}>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="share-value">
                            <Form.Label>Value({'\u20B9'})</Form.Label>
                            <Form.Control size="lg" type="number" placeholder="Value" value={this.state.share.value||''} onChange={this.handleValue} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="share-qty">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control size="lg" type="number" placeholder="Qty" value={this.state.share.qty||''} onChange={this.handleQty} />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        );
    }
};
export default Addshare;