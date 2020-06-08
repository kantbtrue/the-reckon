import React from 'react';
import Addshare from '../components/Addshare';
import totIntraBrokerage from '../utils/formula';
import data from '../utils/_DATA.json';
import { Row, Col, Container, Table } from 'react-bootstrap';

const Main = (props) => {
        let totBrokerage = props.shares.length !== 0 ? props.shares.reduce((acc, share, i) => {
            return acc = acc + totIntraBrokerage(share.qty, share.value, share.state, data.states[props.settings.code].stampDuty);
        }, 15.95) : 0;
        return (
            <main className="main" id="main">
                <section className="section">
                    <Container>
                        <Table bordered responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>State</th>
                                    <th>Value({'\u20B9'})</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.shares.map((share, i) => {
                                    return (
                                        <tr key={i++} className={share.state === 'buy' ? 'table-info text-info' : 'table-success text-success'}>
                                            <td>{i++}</td>
                                            <td>{share.state.toUpperCase()}</td>
                                            <td>{share.value}</td>
                                            <td>{share.qty}</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td colSpan="4">
                                        <Addshare handleAddShare={props.handleAddShare} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Row>
                            <Col>
                                <div className="border-top border-gray py-3 text-right">
                                    <h2 style={{fontSize: '30px'}}>Total Brokerage: {totBrokerage}</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        );
};
export default Main;