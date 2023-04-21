const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Chat from "./screens/Chat";
import IconsaxBoldaddcircle from "./screens/IconsaxBoldaddcircle";
import PlusCircle from "./screens/PlusCircle";
import SpalshScreen from "./screens/SpalshScreen";
import RegisterationForBank from "./screens/RegisterationForBank";
import HomePageOfBuisnessForBank from "./screens/HomePageOfBuisnessForBank";
import HomePageOfBuisnessForInvestor from "./screens/HomePageOfBuisnessForInvestor";
import HomePageOfInvestorForInvestor from "./screens/HomePageOfInvestorForInvestor";
import RegisterForInvestor from "./screens/RegisterForInvestor";
import DrawerForInvestor from "./screens/DrawerForInvestor";
import DrawerForBank from "./screens/DrawerForBank";
import DrawerForBuisness from "./screens/DrawerForBuisness";
import HomePageOInvestorForBuisness from "./screens/HomePageOInvestorForBuisness";
import SchemeForBusness from "./screens/SchemeForBusness";
import HomePageForBuisnessForBuisness from "./screens/HomePageForBuisnessForBuisness";
import HomePageOfBankForBank from "./screens/HomePageOfBankForBank";
import HomePageForBankForBusness from "./screens/HomePageForBankForBusness";
import Post from "./screens/Post";
import RegisterationForBuisness from "./screens/RegisterationForBuisness";
import SignUpForBank from "./screens/SignUpForBank";
import LoginForBank from "./screens/LoginForBank";
import SignUpForInvestor from "./screens/SignUpForInvestor";
import LoginForInvestor from "./screens/LoginForInvestor";
import SignUpForBuisness from "./screens/SignUpForBuisness";
import LoginForBuisness from "./screens/LoginForBuisness";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };
  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>



                <Stack.Screen
                name="SpalshScreen"
                component={SpalshScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Chat"
                component={Chat}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconsaxBoldaddcircle"
                component={IconsaxBoldaddcircle}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlusCircle"
                component={PlusCircle}
                options={{ headerShown: false }}
              />
             
              <Stack.Screen
                name="RegisterationForBank"
                component={RegisterationForBank}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageOfBuisnessForBank"
                component={HomePageOfBuisnessForBank}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageOfBuisnessForInvestor"
                component={HomePageOfBuisnessForInvestor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageOfInvestorForInvestor"
                component={HomePageOfInvestorForInvestor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterForInvestor"
                component={RegisterForInvestor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DrawerForInvestor"
                component={DrawerForInvestor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DrawerForBank"
                component={DrawerForBank}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DrawerForBuisness"
                component={DrawerForBuisness}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageOInvestorForBuisness"
                component={HomePageOInvestorForBuisness}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SchemeForBusness"
                component={SchemeForBusness}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageForBuisnessForBuisness"
                component={HomePageForBuisnessForBuisness}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageOfBankForBank"
                component={HomePageOfBankForBank}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomePageForBankForBusness"
                component={HomePageForBankForBusness}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Post"
                component={Post}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterationForBuisness"
                component={RegisterationForBuisness}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUpForBank"
                component={SignUpForBank}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginForBank"
                component={LoginForBank}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUpForInvestor"
                component={SignUpForInvestor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginForInvestor"
                component={LoginForInvestor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUpForBuisness"
                component={SignUpForBuisness}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginForBuisness"
                component={LoginForBuisness}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
