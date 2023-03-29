import react, { useState } from 'react';
import { View, Text,StyleSheet,Pressable} from 'react-native'


const CustomButton = ({onPress,text,type="PRIMARY", bgColor,fgColor}) => {
    return(
<Pressable 
onPress={onPress} 
style={[styles.Container,styles['Container_${type}'],
bgColor? {backgroundColor: bgColor}: {},]} >

<Text style={[styles.text,styles['text_${type}'],
    bgColor? {color: fgColor}: {}]}>{text}</Text>

</Pressable>



    );
};

const styles= StyleSheet.create({
Container :{
   
width: '70%',
padding: 15,
marginVertical:25,
alignItems :'center',
borderRadius:30,


},


    
Container_PRIMARY:{
    backgroundColor:'#3B71F3',


},

Container_TERTIARY:{},


text_TERTIARY:{


},






});


export default CustomButton