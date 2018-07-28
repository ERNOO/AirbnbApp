import React from "react";
import axios from "axios";

import {
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TextInput
} from "react-native";

class Form extends React.Component {
  static navigationOptions = { title: "Airbnb", header: null };

  state = {
    email: "arno@airbnb-api.com",
    password: "password01"
  };

  onChange = (key, value) => {
    this.setState({
      [key]: value // key est considéré comme une variable afin de modifier le state `name` ou `password`
    });
  };

  SubmitForm = () => {
    axios
      .post(
        "https://airbnb-api.now.sh/api/user/log_in",
        {
          email: this.state.email,
          password: this.state.password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        this.props.navigation.navigate("HomeScreen", {
          emailParam: this.state.email
        });
      });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#FC5C63",
          marginTop: 0,
          flex: 1,
          overflow: "hidden"
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              height: 100,
              width: 100,
              marginTop: 40,
              display: "flex",

              marginHorizontal: "auto"
            }}
            source={require("../../src/images/Home.png")}
          />

          <Text
            style={{
              marginTop: 20,
              color: "white",
              fontSize: 45,
              fontWeight: "400",
              textAlign: "center"
            }}
          >
            Welcome
          </Text>
        </View>
        <TextInput
          returnKeyType={"next"}
          style={{
            height: 44,
            color: "#fff",
            fontSize: 20,
            alignItems: "center",
            marginHorizontal: 40,
            marginTop: 60,
            borderBottomColor: "white",
            borderBottomWidth: 1
          }}
          value={this.state.email}
          onChangeText={text => this.onChange("email", text)}
        />

        <TextInput
          returnKeyType={"next"}
          style={{
            height: 40,
            color: "#fff",
            fontSize: 10,
            alignItems: "center",
            marginHorizontal: 40,
            marginTop: 30,
            borderBottomColor: "white",
            borderBottomWidth: 1
          }}
          value={this.state.password}
          onChangeText={text => this.onChange("password", text)}
        />

        <View
          style={{
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.SubmitForm();
            }}
          >
            <Text
              style={{
                marginTop: 30,
                fontSize: 20,
                color: "#FC5C63",
                padding: 10,
                backgroundColor: "white",
                borderRadius: 40
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Form;
