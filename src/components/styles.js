import React, { Component } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    /* backgroundSize: "cover", */
    flex: 1,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    position: "absolute"
  },
  title: {
    fontSize: 15,
    marginTop: 10,
    color: "black",
    fontWeight: "bold"
  },
  description: {
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    height: 44,
    paddingLeft: 20,
    color: "black"
  },
  price: {
    // flexDirection: "column",
    height: 44,
    marginTop: 40,
    borderRadius: 22,
    position: "relative"
  },
  ratingValue: {
    color: "#FF5B5E"
  }
});

export default styles;
