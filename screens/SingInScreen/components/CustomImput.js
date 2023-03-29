
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomImput = ({ value, setValue,placeholder,secureTextEntry,message }) => {

    return (
        <View style={styles.container}>
            
            <Input 
            value={value}
            onChangeText={setValue}
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            errorStyle={{ color: 'black' }}
            errorMessage={message}
            leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    //   backgroundColor:'while',
    //  with:'100%',
    //  borderColor:'#e8e8e8',
    //  borderWidth:1,
    //  borderRadius:5,
    //  paddingHorizontal:10,
    //  marginVertical:5
    },
    input: {
   
        // width: '70%',
        // padding: 7,
        // marginVertical:1,
        // alignItems :'center',
        // borderRadius: 4,
    }


});
export default CustomImput