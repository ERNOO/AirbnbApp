import React from "react";
import axios from "axios";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import styles from "../components/styles";
import MapView from "react-native-maps";

class Room extends React.Component {
  state = {
    room: {},
    isLoading: true
  };

  static navigationOptions = { title: "Airbnb", header: null };

  render() {
    if (this.state.isLoading) {
      return <Text>isLoading</Text>;
    } else {
      return (
        <React.Fragment>
          <Image
            style={styles.image}
            source={{ uri: this.state.room.photos[0] }}
          />

          <Text style={styles.price}>{this.state.room.price}</Text>

          <Text style={styles.title}>{this.state.room.title}</Text>
          <Text style={styles.description}>{this.state.room.description}</Text>

          <Text style={styles.ratingValue}>{this.state.room.ratingValue}</Text>

          <MapView
            style={{
              flex: 1
            }}
            initialRegion={{
              latitude: 48.856614,
              longitude: 2.3522219,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </React.Fragment>
      );
    }
  }

  componentDidMount = () => {
    //console.log();
    axios
      .get(
        "https://airbnb-api.now.sh/api/room/" +
          this.props.navigation.state.params._id
      )
      .then(response => {
        this.setState({
          room: response.data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  };
}
export default Room;
