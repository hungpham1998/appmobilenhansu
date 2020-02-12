import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={5}
      >
        <View>
          <Image
            source={{ uri: "https://source.unsplash.com/1024x768/?works" }}
            style={styles.img}
          />
        </View>
        <View>
          <Image
            source={{
              uri:
                "https://photo-1-baomoi.zadn.vn/w1000_r1/2019_07_27_291_31613958/2cf8afefc7af2ef177be.jpg"
            }}
            style={styles.img}
          />
        </View>
        <View>
          <Image
            source={{ uri: "https://source.unsplash.com/1024x768/?earth" }}
            style={styles.img}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  img: {
    width: "100%",
    height: "100%"
  }
});
