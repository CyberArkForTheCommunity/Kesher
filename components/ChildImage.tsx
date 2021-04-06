import React, {useState} from 'react';
import { Image, ImageBackground, StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";
import {ImageData, IMAGES_PER_ROW} from './ChildImageList';
import Layout from './../constants/Layout';

export default function(props: {imageData: ImageData, onImagePressed: (id: Number, state: Boolean) => void} ) {
    const [selectedState, setSelectedState] = useState(props.imageData.selected);
    const windowWidth = Layout.window.width;
    const imageWidth = ((windowWidth - 60) / IMAGES_PER_ROW) - 30;        
    
    const getImageSize = () => {
        return {width: imageWidth, height: imageWidth, borderRadius: imageWidth / 2};
    }

    const getTextSize = () => {
        return {width: imageWidth};
    }

    const onPressButton = (imageData: ImageData) => {
        const newSelectedState = !selectedState;
        setSelectedState(newSelectedState);
        props.onImagePressed(imageData.id, newSelectedState);
    }

    if (selectedState) {
        return (
            <TouchableWithoutFeedback onPress={() => onPressButton(props.imageData)}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../assets/images/happy-little-2.png')}
                        style={[getImageSize(), styles.image]}
                        imageStyle={getImageSize()}>
                        <View style={[getImageSize(), styles.iconContainer]}>
                            <Image 
                                source={require('../assets/icons/selected.png')}
                                style={styles.icon} />
                        </View>
                    </ImageBackground>
                    <Text style={[getTextSize(), styles.text]}>{props.imageData.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <TouchableWithoutFeedback onPress={() => onPressButton(props.imageData)}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/happy-little-2.png')}
                    style={getImageSize()}
                    />
                <Text style={[getTextSize(), styles.text]}>{props.imageData.name}</Text>
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
        justifyContent: "center"
    },
    icon: {
        height: 28,
        width: 28,
    },
    iconContainer: {        
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff60',
      borderColor: '#804ED9',
      borderWidth: 3
    },
    text: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
    }
});
