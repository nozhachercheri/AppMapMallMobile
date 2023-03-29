import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import CustomButton from "../SingInScreen/components/CustomButton";
import { UserIcon,ChevronDownIcon,SearchIcon,AdjustmentsIcon } from "react-native-heroicons/outline";
import Colors from "../../utils/Colors";
import StoneNavigator from "../../navigation/StoneNavigator";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';
import Color from "../../common/Color";
import { Languagegs } from "../../common";
import { HeaderScreen } from "../HeaderScreen/HeaderScreen";
import UserProfile from "../../containers/UserProfile";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  
  const onHomeHandle = () => {
   
    console.log("Heloo");
  };
  return (
    <SafeAreaView style={{flex: 1,marginTop:10, backgroundColor: '#fff'}}>
       <HeaderScreen
        
       
        />
  <UserProfile />
  </SafeAreaView>
  
  );
}
const styles = StyleSheet.create({
  HomeButton: {
    marginTop: 20,
    backgroundColor: Color.primary,
    borderRadius: 5,
    elevation: 1,
  },

});

