import React, { Component } from 'react'
import { connect } from 'react-redux'

import Map from '../components/Map'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            init: {
                center: {lat: 22.6246197, lng: 120.28278},
                zoom: 15
            },
            marks: [
                {
                    position: {lat: 22.6246197, lng: 120.28278},
                    text: '鹽埕埔2號出口'
                }, {
                    position: {lat: 22.6233427, lng: 120.2867754},
                    text: '樺達奶茶'
                }
            ]            
        }
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div id="app">
                <Map center={ this.state.init.center } zoom={ this.state.init.zoom } marks={ this.state.marks } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default App
