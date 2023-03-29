import { StyleSheet, View,Text  } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {  ScrollView, ImageBackground, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  LocationMarkerIcon,
  EyeIcon,
  CheckIcon,
  UserIcon,
  LockClosedIcon,
} from "react-native-heroicons/solid";
import CustomImput from "./components/CustomImput";
import CustomButton from "./components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, CheckBox, Input, ListItem ,SocialIcon} from "react-native-elements";


const { width, height } = Dimensions.get("screen");
const Login = ({ navigator }) => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const nameicon = useState("user");
  const [Password, setPassword] = useState("");
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    //<SafeAreaView>
    <View
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../assets/dd.png")}
        style={{
          height: Dimensions.get("window").height / 2.5,
        }}
      >
        <View style={styles.brandView}>
          <LocationMarkerIcon size={70} style={{ color: "#ffffff" }} />
          <Text style={styles.brandViewText}>Map Mall </Text>
        </View>

        <View style={styles.buttomView}>
          <View style={{ padding: 20 }}></View>
        </View>
      </ImageBackground>

      <View style={styles.ContView}>
        <Text style={{ color: "#8a2be2", fontSize: 34, marginTop: -20 }}>
          {" "}
          WELCOME{" "}
        </Text>
        <Text>
          Don't have an account?
          <Text style={{ color: "#8a2be2", fontStyle: "italic" }}>
            {" "}
            {""} Register now
          </Text>
        </Text>
        <View style={{ marginTop: 50 }}></View>
      </View>
      <View style={styles.inputView}>
        <Text style={{ color: "grey", marginLeft: 10 }}> Email</Text>
        <Input
          placeholder="example@gmail.com"
          //  errorStyle={{ color: "red" }}
          //   errorMessage="ENTER A VALID EMAIL ERROR HERE"
          leftIcon={<UserIcon size={24} color="#8a2be2" />}
          rightIcon={<CheckIcon size={24} color="#8a2be2" />}
        />

        {/* <CustomImput
          placeholder="Email"
          value={Email}
          setValue={setEmail}
          secureTextEntry={false}
          errorStyle={{ color: 'red' }}
          errorMessage={'ENTER A VALID ERROR HERE'}
      
          /> */}
        {/* <Text style={{ color: '#8a2be2' }}> Password </Text> */}
        {/* <CustomImput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry={true} /> */}
        <Text style={{ color: "grey", marginLeft: 10 }}>Password</Text>

        <Input
          placeholder="**********"
            // errorStyle={{ color: "red" }}
            //  errorMessage="ENTER A VALID PASSWORD ERROR HERE"
          secureTextEntry={true}
          leftIcon={<LockClosedIcon size={24} color="#8a2be2" />}
          rightIcon={<EyeIcon size={24} color="#8a2be2" />}
        />
      </View>
      {/* 
        <Input
        placeholder="Comment"
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        style={styles}
        onChangeText={value => this.setState({ comment: value })}
       /> */}

      <View style={{ flex: 1, marginLeft: -10, marginTop: -26 }}>
        <ListItem >
          <CheckBox checked={false} color="#8a2be2" />
          <Text style={{ color: "#8a2be2", marginLeft: -30 }}>Remember Me</Text>
          <Text style={{ color: "grey", marginLeft: 60 }}>Forgot Password</Text>
        </ListItem>
      </View>
      <View style={styles.buttonView}>
        <CustomButton bgColor="#8a2be2" fgColor="white" text="Sign In" />
      </View>
 
             
                <View style={styles.SocialView}>
                <Text color="#8898AA" size={12} style={{ textAlign:'center',marginTop:15}}>
                  Sign up with
                </Text>
                <ListItem >
                <SocialIcon  type="facebook" />
                <SocialIcon type="twitter"  />
                <SocialIcon type="google" />
                </ListItem>
                    </View>
      {/* <View style={{flex:1}}>
      <Text style={{ textAlign:'center'}}>Or Login With</Text>
      <View style={{}} >
        <Button icon style={{}} rounded>
            <Icon
            type="MaterialCommunityIcons"
            name="facebook"
            style={{color:'#ffffff'}}
            />

        </Button>
       </View>
      </View> */}
    </View>
    // </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  buttomView: {
    backgroundColor: "white",

    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  ContView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    marginLeft: 15,
    marginTop: -40,
  },
  buttonView: {
    marginTop: -40,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: "row",
  },
  SocialView: {
    marginTop: -40,

    justifyContent: "center",
    alignItems: "center",
  },
});
