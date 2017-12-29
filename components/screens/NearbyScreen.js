import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PeopleList from '../modules/PeopleList';

class NearbyScreen extends React.Component {
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
  
  componentDidMount(){
    // Load nearby people.
  }

  componentWillUnmount(){
    // Unload anything that needs closing.
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.header1}>People Nearby</Text>
        <PeopleList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  header1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default NearbyScreen;