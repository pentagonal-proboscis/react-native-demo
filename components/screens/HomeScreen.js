import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      realTimeLatitude: null,
      realTimeLongitude: null,
      iceBroken: false,
      clickCount:0,
      gestureText: 'none',
      error:null,
    };
  }
  
  onSwipeUp(gestureState) {
    this.setState({gestureText: 'You swiped up!'});
  }

  iceMessage(){
    if(this.state.iceBroken)
    {
      return <Text>THE ICE IS BROKEN!</Text>;
    }
    return <Text>No it is yet to be broken...</Text>;
  }

  buttonMessage(){
    if(!this.state.iceBroken)
    {
      return "BREAK ICE!";
    }
    return "Form the ice...";
  }

  breakTheIce = () => {
    this.setState({
      iceBroken: !this.state.iceBroken,
      clickCount: this.state.clickCount + 1
    });
  }

  componentDidMount(){
    console.log('made it here');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.warn('then here');
        this.setState({
          latitude: position.coords.latitude.toFixed(3),
          longitude: position.coords.longitude.toFixed(3),
          altitude: position.coords.altitude.toFixed(3),
          heading: position.coords.heading,
          speed: position.coords.speed,
          error: null,
        });
        console.warn('and here?');
        console.log('Latitude 1:' + this.state.latitude);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          realTimeLatitude: position.coords.latitude.toFixed(3),
          realTimeLongitude: position.coords.longitude.toFixed(3),
        });
      }
    )
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <View style={styles.container}>
        <Text style={styles.header1}>Ice Breaker...</Text>
        <Text>"Introductions made easy"</Text>
        <Text></Text>
        <Text>This is where you are:</Text>
        <Text>Latitude is: {this.state.latitude}</Text>
        <Text>Longitude is: {this.state.longitude}</Text>
        <Text>Altitude is: {this.state.altitude} meters</Text>
        <Text>Heading is: {this.state.heading}</Text>
        <Text>Speed is: {this.state.speed}</Text>
        <Text></Text>
        <Text>In realtime:</Text>
        <Text>Latitude is: {this.state.realTimeLatitude}</Text>
        <Text>Longitude is: {this.state.realTimeLongitude}</Text>
        <Text></Text>
        <Text>Has the ice been broken?</Text>
        {this.iceMessage()}
        <Button onPress={this.breakTheIce} title={this.buttonMessage()} color="#841584" accessibilityLabel="Push this button to start breaking the ice with nearby future connections!"/>

        <Text>Click count: {this.state.clickCount}</Text>

        <GestureRecognizer onSwipeUp={this.onSwipeUp} config={config}>
        <Text>Gesture is: {this.state.gestureText}</Text>
        </GestureRecognizer>
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
});

export default HomeScreen;