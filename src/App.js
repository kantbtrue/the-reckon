import React from 'react';
import Header from './modules/Header';
import Main from './modules/Main';
import Footer from './modules/Footer';
import Settings from './components/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
    state = {
        modalState: false,
        settings: {},
        shares: []
    };
    handleSettings = (obj) => {
        this.setState({
            ...this.state,
            settings: obj
        });
    };
    handleModal = (bool) => {
        this.setState(prevState => ({
            ...prevState,
            modalState: bool
        }));
    };
    handleAddShare = (obj) => {
        this.setState({
            ...this.state,
            shares: this.state.shares.concat(obj)
        });
    };
    render() {
        return (
            <React.Fragment>
                <Header handleModal={this.handleModal} />
                <Main shares={this.state.shares} settings={this.state.settings} handleAddShare={this.handleAddShare} />
                <Footer />
                <Settings show={this.state.modalState} handleModal={this.handleModal} handleSettings={this.handleSettings} />
            </React.Fragment>
        );
    }
}

export default App;
