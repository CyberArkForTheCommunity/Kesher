import * as React from "react";
import { StyleSheet, Image, Button } from "react-native";
import AppLayout from "../components/AppLayout";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import AppButton from "../components/ui/AppButton";
import Colors from "../constants/Colors";

export default function Corona({ navigation }: any) {
  return (
    <AppLayout navigation={navigation} title="הצהרת קורונה">
      <View style={styles.container}>
        <View style={styles.coronaHeader}>
          <Image source={require("../assets/images/corona_title.png")} />
        </View>
        <View style={styles.coronaBody}>
          <Text>אני מצהיר/ה כדלקמן:</Text>
          <Text>1.מדדתי חום לילדי/ילדתי בסמוך ליציאתו למוסד החינוכי ונמצא כי חום גופו/ה מתחת ל-83 מעלות צלזיוס.</Text>
          <Text>2. ילדי/ילדתי לא משתעל/ת ואין לו/לה קשיים בנשימה, למעט שיעול או קושי בנשימה הנובע ממצב כרוני כגון אסטמה או אלרגיה. לעניין זה נזלת בלבד לא תיחשב תסמין.</Text>
          <Text>3.למיטב ידיעתי אין לילדי שינוי בחוש הטעם או בחוש הריח.</Text>
          <Text>4.למיטב ידיעתי ילדי/ילדתי לא היה/היתה במגע הדוק עם חולה קורונה בשבועיים האחרונים.</Text>
          <Text>5.למיטב ידיעתי לילדי/ילדתי לא היה חום גוף מעל 83 מעלות צלזיוס ב-84 השעות האחרונות.</Text>
          <Text>6.ילדי/ילדתי לא היה/היתה ב-41 הימים האחרונים ב במדינה שהחוזרים ממנה מחויבים בבידוד.</Text>
        </View>
        <AppButton style={styles.btn} title="אני מצהיר" size={18} onPress={() => console.log("Corona!!!")} />
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 15,
  },
  coronaHeader: {
    backgroundColor: Colors.app.purple10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: Colors.app.purple,
    borderWidth: 1,
  },
  coronaBody: {
    backgroundColor: Colors.app.purple10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: Colors.app.purple,
    borderWidth: 1,
    marginTop: 10,
    width: "80%",
  },
  btn: {
    marginTop: 23,
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
    fontFamily: "assistant-bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
