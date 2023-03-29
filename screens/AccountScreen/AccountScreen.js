import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';




const AccountScreen= () => {

  

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-1/166574895_3806642616085758_4592488315871610374_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=gBKXcJeVL5sAX-2CuwA&_nc_ht=scontent.ftun10-1.fna&oh=00_AT_Lp7XlPwI24fxGBEgOelG5J5jtJxZKd67QOTpiqvyS1A&oe=6334B23F',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@A_sma</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>

    
          
   
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Sousse, Tunis</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>53965616</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>mohamed.benromdhane@email.com</Text>
        </View>
        <View style={styles.infoBoxWrapper}>

        <View style={[styles.infoBox, {
            borderLeftColor: 'black',
            borderLeftWidth: 1,            
          }]}>
            
            <Title>$140.50</Title>
            <Caption>Wallet</Caption>
          </View>
   
              
          </View>
   
      </View>
      
      <ScrollView style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple 
        // onPress={myCustomShare}
        >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>MyOrder</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Icons name="location" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>Address</Text>
          </View>
        </TouchableRipple><TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="flag" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>Language </Text>
          </View>
        </TouchableRipple><TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Iconss name="notifications" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>Notification</Text>
          </View>
        </TouchableRipple><TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icons name="info" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>About</Text>
        </View>
        </TouchableRipple><TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="theme-light-dark" color="#4632A1" size={25}/>
            <Text style={styles.menuItemText}>DarkTheme</Text>
          </View>


          



        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:180,
    marginTop:-100,

    
  },
  menuWrapper: {
    marginTop: -9,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});