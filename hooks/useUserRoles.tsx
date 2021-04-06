import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userKey = "@user_rule";
export type UserType = "parent" | "admin" | "garden" | "therapy";
interface UserRuleI {
  role: UserType;
}

const useUserRole = () => {
  const [userData, setUserData] = React.useState<UserRuleI | null | any>(null);
  React.useEffect(() => {
    (async () => {
      const userStorage = await getData(userKey);
      if (userStorage !== null) {
        setUserData(JSON.parse(userStorage));
      } else {
        //todo get user data from ... ???
        const role = { role: "admin" };
        await storeData(userKey, JSON.stringify(role));
        setUserData(role);
      }
    })();
  }, []);

  const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async (key: string) => {
    let data = null;
    try {
      data = await AsyncStorage.getItem(key);
    } catch (e) {
      // saving error
    }
    return data;
  };

  return userData;
};

export default useUserRole;
