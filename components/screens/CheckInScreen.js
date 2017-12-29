import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import MapView from 'react-native-maps';

class CheckInScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null
    };
  }
  
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude.toFixed(3),
          longitude: position.coords.longitude.toFixed(3)
        });
        console.log('Latitude: ' + this.state.latitude);
        console.log('Longitude: ' + this.state.longitude);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentWillUnmount(){
    // Do any clear up here...
  }

  render() {

    return (
      <View style={styles.container}>
        
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.023,
            longitude: -105.221,
            latitudeDelta: 0.002,    // This is the zoom - expressed in terms of distance between plotted location and corner of view port.
            longitudeDelta: 0.002,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
});

export default CheckInScreen;