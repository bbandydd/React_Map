import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as markerAction from '../actions/markerAction'

import Map from '../components/Map'
import MarkerList from '../components/MarkerList'

class App extends Component {
    constructor(props) {
        super(props)
        this.addMarker = this.addMarker.bind(this)
        this.setMapCenter = this.setMapCenter.bind(this)

        // 預設台北101
        this.state = {
            init: {
                center: {lat: 25.0339031, lng: 121.5623212},
                zoom: 13
            }
        }
    }

    componentDidMount() {
        const { markerAction } = this.props

        if (navigator.geolocation) {
            // 設定目前位置
            navigator.geolocation.getCurrentPosition((position) => {
                const location = {lat: position.coords.latitude, lng: position.coords.longitude}

                markerAction.addMarker({
                    position: location,
                    text: '我在這',
                    photo: 'https://goo.gl/E3vjFQ'
                })

                this.setMapCenter(location)
            })
        }
    }

    render() {
        const { dispatch, markers} = this.props

        // 加入使用者列表
        return (
            <div id="app">
                <button onClick={this.addMarker.bind(this)}>加入高雄點</button>
                <Map center={ this.state.init.center } zoom={ this.state.init.zoom } markers={ markers } />
                <MarkerList markers={ markers } setMapCenter={ this.setMapCenter }/>
            </div>
        )
    }

    addMarker() {
        const { markerAction } = this.props
        const markers = [
            {
                position: {lat: 22.6246197, lng: 120.28278},
                text: '鹽埕埔2號出口',
                photo: 'https://goo.gl/q2d8HC'
            }, {
                position: {lat: 22.6233427, lng: 120.2867754},
                text: '樺達奶茶',
                photo: 'https://goo.gl/dsS35b'
            }, {
                position: {lat: 22.6261609, lng: 120.2718653},
                text: '忠烈祠',
                photo: 'https://goo.gl/v4I9dl'
            }
        ]

        markers.map((marker, idx) => {
            markerAction.addMarker(marker)
        })   
    }

    setMapCenter(location) {
        this.setState({
            init: {
                center: location,
                zoom: 13
            }
        })
    }
}

function mapStateToProps(state) {
    return {
        markers: state.markers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        markerAction: bindActionCreators(markerAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
