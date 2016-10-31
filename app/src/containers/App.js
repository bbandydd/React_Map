import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as markerAction from '../actions/markerAction'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Map from '../components/Map'
import MarkerList from '../components/MarkerList'

/* 
    Todos:
    1. FB Login
    2. Chat Room
    3. Firebase
*/

const style = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2d2b2b',
        position: 'relative', 
        overflow: 'hidden'
    },
    content: {
        position: 'absolute', 
        left: 0, 
        top: 0, 
        width: '100%', 
        height: '100%',
        zIndex: 0
    },
    list: {
        position: 'absolute', 
        right: 0, 
        top: 0, 
        width: '30%', 
        height: '100%',
        opacity: 0.9,
        zIndex: 1
    },
    functionButton: {
        position: 'absolute', 
        right: '30%', 
        top: 0, 
        width: '3%', 
        height: '100%',
        zIndex: 1,
        textAlign: 'center'
    }
}

const zoom = 12

class App extends Component {
    constructor(props) {
        super(props)
        this.addMarker = this.addMarker.bind(this)
        this.setMapCenter = this.setMapCenter.bind(this)

        // 預設台北101
        this.state = {
            init: {
                center: { lat: 25.0339031, lng: 121.5623212 },
                zoom: zoom
            }
        }
    }

    componentDidMount() {
        const { markerAction } = this.props

        if (navigator.geolocation) {
            // 設定目前位置
            navigator.geolocation.getCurrentPosition((position) => {
                const location = { lat: position.coords.latitude, lng: position.coords.longitude }

                markerAction.addMarker({
                    position: location,
                    text: '我在這',
                    photo: 'https://goo.gl/IBEpr8'
                })

                this.setMapCenter(location)
            })
        }
    }

    render() {
        const { dispatch, markers} = this.props

        return (
            <div style={style.container}>
                <div style={style.content}>
                    <Map center={this.state.init.center} zoom={this.state.init.zoom} markers={markers} />
                </div>
                <div style={style.list}>
                    <MarkerList markers={markers} setMapCenter={this.setMapCenter} />
                </div> 
                <div style={style.functionButton}>
                    <FloatingActionButton mini={true} onClick={this.addMarker.bind(this)}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }

    addMarker() {
        const { markerAction } = this.props
        const markers = [
            {
                position: { lat: 22.6246197, lng: 120.28278 },
                text: '鹽埕埔2號出口',
                photo: 'https://goo.gl/q2d8HC'
            }, {
                position: { lat: 22.6233427, lng: 120.2867754 },
                text: '樺達奶茶',
                photo: 'https://goo.gl/dsS35b'
            }, {
                position: { lat: 22.6261609, lng: 120.2718653 },
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
                zoom: zoom
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
