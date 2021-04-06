import * as React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ChildImage from './ChildImage';

export interface ImageData {
    id: Number,
    selected: Boolean,
    imageUri: string,
    name: string
};
export const IMAGES_PER_ROW = 3;

export default function() {
    const imagesData = getImagesData(11);

    const toggleImageSelected = (imageId: Number, selected: Boolean) => {
        const data = imagesData.find((imageData: ImageData) => imageData.id === imageId);
        if (data) {
            data.selected = selected;
            console.log(data.id, data.selected);
        }
    }

    const renderItem = ({ item }) => (
        <ChildImage imageData={item} onImagePressed={(imageId: Number, state: Boolean) => toggleImageSelected(imageId, state)} ></ChildImage>
    );

    return (
        <FlatList
            data={imagesData}
            renderItem={renderItem}
            keyExtractor={(item: ImageData) => item.id.toString()}
            numColumns={IMAGES_PER_ROW}
        />        
    );
}

const getImagesData = (num: Number): ImageData[] => {
    const names = ['הילה ביטון', 'מיכל לב', 'איתמר נווה', 'אלכסנדרה דנה גדעון', 'דניאל גד שוורצקוף', 'דיקלה לוי', 'דרור חן', 'רינת סלע', 'תמר לוי', 'יובל מנחם', 'לילך פינק', 'אייל חמו'];
    const data = [];
    for (let i = 1; i <= num; i++) {
        data.push({
            id: i, 
            selected: i%4==0,
            imageUri: '../assets/images/happy-little-1.png',
            name: names[i],
        });
    }
    return data;
};
