import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";
import { ImageData } from "./ChildImageList";
import Layout from "./../constants/Layout";

interface ChildProps {
  rows?: Number;
  imageData: ImageData;
  disableToggle: Boolean;
  onImagePressed: (data: any) => void;
}

export default function ({ rows = 3, disableToggle = false, imageData, onImagePressed }: ChildProps) {
  const [selectedState, setSelectedState] = useState(imageData.selected);
  const windowWidth = Layout.window.width;
  const imageWidth = (windowWidth - 60) / +rows - 30;

  const getImageSize = () => {
    return { width: imageWidth, height: imageWidth, borderRadius: imageWidth / 2 };
  };

  const getTextSize = () => {
    return { width: imageWidth };
  };

  const onPressButton = (imageData: ImageData) => {
    let newSelectedState = selectedState;
    if(!disableToggle) {
        newSelectedState = !selectedState;
        setSelectedState(newSelectedState);
    }
    onImagePressed(imageData);
  };

  if (selectedState) {
    return (
      <TouchableWithoutFeedback onPress={() => onPressButton(imageData)}>
        <View style={styles.container}>
          <ImageBackground source={{ uri: imageData.imageUri }} style={[getImageSize(), styles.image]} imageStyle={getImageSize()}>
            <View style={[getImageSize(), styles.iconContainer]}>
              <Image source={require("../assets/icons/selected.png")} style={styles.icon} />
            </View>
          </ImageBackground>
          <Text style={[getTextSize(), styles.text]}>{imageData.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => onPressButton(imageData)}>
      <View style={styles.container}>
        <Image source={{ uri: imageData.imageUri }} style={getImageSize()} />
        <Text style={[getTextSize(), styles.text]}>{imageData.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
  },
  icon: {
    height: 28,
    width: 28,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff60",
    borderColor: "#804ED9",
    borderWidth: 3,
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
});
