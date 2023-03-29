import react, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer,useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// SingIn Screens
import SingInScreen from "../screens/SingInScreen/SingInScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
// Home Screens
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { Init } from "../reducers";
import { ActivityIndicator, View } from "react-native";
import Colors from "../utils/Colors";
import { TailwindProvider } from "tailwindcss-react-native";

import { Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StoneNavigator from "./StoneNavigator";
import CustomDrawer from "./CustomDrawer";
import { DrawerContent } from "./DrawerContent";
import AccountScreen from "../screens/AccountScreen/AccountScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyDrawer =() =>{
  return(
  

<Drawer.Navigator
     drawerContent={props => <DrawerContent {...props} />}
screenOptions={{
  
  headerShown: false,
  drawerActiveBackgroundColor: '#8a2be2',
  drawerActiveTintColor: '#fff',
  drawerInactiveTintColor: '#333',
  drawerLabelStyle: {
    marginLeft: -25,
   
    fontSize: 15,
  },
}}>
<Drawer.Screen
  name="Home"
  component={MyStack}
  options={{
    drawerIcon: ({color}) => (
      <Ionicons name="home-outline" size={22} color={color} />
    ),
  }}
/>
<Drawer.Screen
  name="Profile"
  component={AccountScreen}
  options={{ 
    drawerIcon: ({color}) => (
      <Ionicons name="person-outline" size={22} color={color} />
    ),
  }}
/>
<Drawer.Screen
  name="Messages"
  component={HomeScreen}
  options={{
    drawerIcon: ({color}) => (
      <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
    ),
  }}
/>
<Drawer.Screen
  name="Moments"
  component={HomeScreen}
  options={{
    drawerIcon: ({color}) => (
      <Ionicons name="timer-outline" size={22} color={color} />
    ),
  }}
/>
<Drawer.Screen
  name="Settings"
  component={HomeScreen}
  options={{
    drawerIcon: ({color}) => (
      <Ionicons name="settings-outline" size={22} color={color} />
    ),
  }}
/>
</Drawer.Navigator>
);}
function MyStack() {
  const token = useSelector((state) => state.auth.authToken);
  const [loading , setLoading ] = useState(true); 
  //fetch Api
  const dispatch = useDispatch();
  const init = async() => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);
  if (loading){
    return(
        <View style={{flex:1 ,justifyContent:'center'}}>
         <ActivityIndicator size='large' color={Colors.primary} />   
        </View>
    );
  }
  return (
    <Stack.Navigator>
      {token === null ? (
        <Stack.Screen name="SingIn" component={SingInScreen} />

      ) : (
        <>
          <Stack.Screen name="Home" component={StoneNavigator} />
     
        </>
      )}
      
    </Stack.Navigator>
    
  );
}


export const AppNavigator = () => {
  return (
    <TailwindProvider>
    <NavigationContainer>
 
 <MyDrawer />

    </NavigationContainer>
 </TailwindProvider>
  );
};
