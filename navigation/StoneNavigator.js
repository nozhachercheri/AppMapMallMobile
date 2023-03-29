import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import Category from '../screens/Category/ControlBar';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// Home Screens

  
  const Tab = createBottomTabNavigator();
const StoneNavigator = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, []);
    
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
  
    


        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } 
          if (route.name === 'Messages') {
            iconName = focused
              ? 'ios-chatbubble-ellipses'
              : 'ios-chatbubble-ellipses-outline';
          }
          if (route.name === 'Cart') {
            iconName = focused
              ? 'md-cart'
              : 'md-cart-outline'; 
          }
          if (route.name === 'Account') {
            iconName = focused
              ? 'md-person'
              : 'md-person-outline';
          }
          
          else if (route.name === 'categories') {
            iconName = focused ? 'md-grid' : 'ios-grid-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8a2be2',
        tabBarInactiveTintColor: 'gray',
      })}               
    >
      <Tab.Screen name="Home" component={HomeScreen}  /> 
      <Tab.Screen name="categories" component={Category} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>

  )
}
export default StoneNavigator