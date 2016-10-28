import React, { Component } from 'react'
import { connect } from 'react-redux'

import Map from '../components/Map'

class App extends Component {
    constructor(props) {
        super(props);
        this.addMarker = this.addMarker.bind(this)
        this.state = {
            init: {
                center: {lat: 22.6246197, lng: 120.28278},
                zoom: 15
            },
            markers: [
                {
                    position: {lat: 22.6246197, lng: 120.28278},
                    text: '鹽埕埔2號出口',
                    photo: 'https://goo.gl/q2d8HC'
                }, {
                    position: {lat: 22.6233427, lng: 120.2867754},
                    text: '樺達奶茶',
                    photo: 'https://goo.gl/dsS35b'
                }
            ]            
        }
    }

    render() {
        const { dispatch } = this.props;
        console.log(this.state.markers)
        return (
            <div id="app">
                <button onClick={this.addMarker}>忠烈祠</button>
                <Map center={ this.state.init.center } zoom={ this.state.init.zoom } markers={ this.state.markers } />
            </div>
        )
    }

    addMarker() {
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    position: {lat: 22.6261609, lng: 120.2718653},
                    text: '忠烈祠',
                    photo: 'https://goo.gl/v4I9dl'
                }
            ]
        })
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default App
