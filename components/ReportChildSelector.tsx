import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import ChildImage from "./ChildImage";
import {ImageData, IMAGES_PER_ROW} from "./ChildImageList";

export default function ReportChildSelector({ onSelect = (f: any) => f }) {
  const imagesData = getImagesData(11);

  const onImageClicked = (imageId: Number, selected: Boolean) => {
    const data = imagesData.find((imageData: ImageData) => imageData.id === imageId);
    if (data) {
      onSelect(data);
    }
  };

  const renderItem = ({ item }) => <ChildImage imageData={item} disableToggle={true} onImagePressed={(imageId: Number, state: Boolean) => onImageClicked(imageId, state)}></ChildImage>;

  return <FlatList data={imagesData} renderItem={renderItem} keyExtractor={(item: ImageData) => item.id.toString()} numColumns={IMAGES_PER_ROW} />;
}

const getImagesData = (num: Number): ImageData[] => {
  const names = [
    "הילה ביטון",
    "מיכל לב",
    "איתמר נווה",
    "אלכסנדרה דנה גדעון",
    "דניאל גד שוורצקוף",
    "דיקלה לוי",
    "דרור חן",
    "רינת סלע",
    "תמר לוי",
    "יובל מנחם",
    "לילך פינק",
    "אייל חמו",
  ];
  const data = [];
  for (let i = 1; i <= num; i++) {
    data.push({
      id: i,
      selected: false,
      imageUri: "../assets/images/happy-little-1.png",
      name: names[i],
    });
  }
  return data;
};
