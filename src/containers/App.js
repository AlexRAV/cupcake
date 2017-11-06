import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as helloWorldActions from '../actions/helloWorld';
import '../styles/App.css';

class App extends Component {
    render() {
        const { toggleHello } = this.props.helloWorldActions;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title" onClick={toggleHello}>{this.props.hello}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/containers/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hello: state.helloWorld.hello
    }
}

function mapDispatchToProps(dispatch) {
    return {
        helloWorldActions: bindActionCreators(helloWorldActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
