import React from "react";
import axios from "axios";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import styles from "../components/styles";

/* const obj = {
  item: {
    title: "Logement entier"
  }
};
const { item } = obj; // extrait la clé item et en fait une variable
console.log(item); // { title: "Logement entier" }
 */
class Home extends React.Component {
  state = {
    rooms: []
  };

  componentDidMount = () => {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        this.setState({
          rooms: response.data.rooms
        });
      });
  };
  render() {
    return (
      <FlatList
        keyExtractor={item => {
          return item._id;
        }}
        data={this.state.rooms}
        // possibilité d'écrire : renderItem={obj => {
        //return <Text>{obj.item.title}</Text>;
        //}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("RoomScreen", {
                  _id: item._id
                });
              }}
            >
              <React.Fragment>
                <Image style={styles.image} source={{ uri: item.photos[0] }} />
                <Text style={styles.price}>{item.price}</Text>

                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>

                <Text style={styles.ratingValue}>{item.ratingValue}</Text>
              </React.Fragment>
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

//<Text>Hello {this.props.navigation.state.params.emailParam}</Text> */}{" "}

export default Home;
