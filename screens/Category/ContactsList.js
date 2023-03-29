
import React, { useEffect, useRef } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native'

import {Color, Styles, Constants} from '../../common';
import Colors from '../../common';
import {  ImageCache} from "../../components";
// import MyHeader from '../components/MyHeader';
import { contacts } from './Contacts';
import * as Animatable from 'react-native-animatable'
import { HeartIcon } from 'react-native-heroicons/outline';
const imageStyle =  Styles.image_grid;
const textStyle =  Styles.text_list ;
const image_width =Styles.width * 0.9 - 2
// : Styles.width * 0.45 - 2;
const ContactItem = ({ item, index, animation }) => {
  return (
    <Animatable.View
      animation='fadeInUp'
      duration={1000}
      delay={index * 300}
    >
     <TouchableOpacity
        activeOpacity={0.9}
        
        style={[
          styles.container_product,
         // isListMode ? 
          styles.container_list ,
          //: styles.container_grid,
        //   { backgroundColor: background },
        ]}>
        <ImageCache
          uri={item.thumbnail_image}
          style={[styles.image, imageStyle]}
        />
         <TouchableOpacity
          style={styles.btnWishList}
          // onPress={() => {
          //   !isInWishList
          //     ? this.setState({ isInWishList: !isInWishList }, () =>
          //         this.props.addToWishList(product)
          //       )
          //     : this.setState({ isInWishList: !isInWishList }, () =>
          //         this.props.removeWishListItem(product)
          //       );
          // }}
          >
        < HeartIcon name="heart" size={20} color="red" />
          {/*  {!isInWishList && (
            <FontAwesome name="heart-o" size={20} color="#b5b8c1" />
          )} */}
        </TouchableOpacity>
        <TouchableOpacity>
                {/* {product.on_sale && product.regular_price > 0 && ( */}
                <View style={styles.saleWrap}>
                  <Text style={[textStyle, styles.sale_off]}>
                    20%
                    {/* {`-${(
                      (1 -
                        Number(product.price) / Number(product.regular_price)) *
                      100
                    ).toFixed(0)}%`} */}
                  </Text>
                </View>
              {/* )} */}
              </TouchableOpacity>
        <View >
          <Text
            style={[textStyle,
            //  isCardMode &&
              styles.cardText]}>
            {/* {product.name} */}
           {item.name}
          </Text>

          <View
            style={{
              flexDirection: 
              // isCardMode ?
              //  "column" :
                "row",
              justifyContent:
                // displayMode === DisplayMode.ListMode
                  // ? "space-between" :
                   "center",
              alignItems: 
              // isCardMode ? 
              // "center" :
               "flex-start",
              marginTop: 2,
            }}>
            <View
              style={[styles.price_wrapper
              // , !isListMode && 
              ,{ marginTop: 0 }]}>
              <Text
                style={[
                  textStyle,
                  styles.price,
                  // isCardMode && 
                  styles.cardPrice,
                  // !isListMode && 
                  { color: Color.blackTextSecondary },
                  { color: Color.black },
                ]}>
                {/* {productPrice} */} {item. base_discounted_price}.00$
              </Text>

              <Text
                style={[
                  textStyle,
                  styles.sale_price,
                  // isCardMode && 
                  styles.cardPriceSale,
                  { color: Color.black },
                ]}>
                {/* {productPriceSale} */}  {item.base_price}.00$
              </Text>

      
            </View>

          </View>
        </View>
      
      </TouchableOpacity>
      </Animatable.View>
  )
}

export default function ContactList({ route, navigation }) {

  const ItemSeparator = () => <View style={styles.separator} />
  const renderItem = ({ item, index }) => (
    <ContactItem item={item} index={index}  />)
 
  const ListEmptyComponent = () => {
    const anim = {
      0: { translateY: 0 },
      0.5: { translateY: 50 },
      1: { translateY: 0 },
    }
    return (
        <Animatable.View style={[styles.listEmpty]}>
        <Animatable.Text
          animation={anim}
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 24 }}
          iterationCount="infinite">
        
          Empty List!
          </Animatable.Text>
      </Animatable.View>
  
    )
  }

  return (
    <View style={[Styles.container]}>
      {/* <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      /> */}
 
        <FlatList
          data={contacts}
          keyExtractor={(_, i) => String(i)}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={ListEmptyComponent}
        />

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  number: {
    fontSize: 14,
    color: Color.darkGray,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Color.gray,
  },
  listEmpty: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: Color.white,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
  listEmpty: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    height: 250,
    width: Dimensions.get('window').width / 2 - 16,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 150,
    margin: 5,
    borderRadius: 10,
    backgroundColor: Color.primary,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listView: {
    alignItems: "flex-start",
    paddingBottom: Styles.navBarHeight + 10,
  },
  container: {
    flexGrow: 1,
    backgroundColor: Color.background,
  },

  //ProductRows
  container_product: {
      backgroundColor: "white",
      paddingBottom: 10,
      marginHorizontal: Styles.width / 20,
      marginTop: 10,
    },
    container_list: {
      width: Styles.width * 0.9,
      marginLeft: Styles.width * 0.05,
      marginRight: Styles.width * 0.05,
      marginTop: Styles.width * 0.05,
    },
    container_grid: {
      width: (Styles.width * 0.9) / 2,
      marginLeft: (Styles.width * 0.1) / 3,
      marginRight: 0,
      marginTop: (Styles.width * 0.1) / 3,
    },
  
    image_list: {
      width: Styles.width * 0.9 - 2,
      height: Styles.width * 0.9 * Styles.thumbnailRatio,
    },
    image_grid: {
      width: Styles.width * 0.45 - 2,
      height: Styles.width * 0.45 * Styles.thumbnailRatio,
    },
    text_list: {
      color: Color.black,
      fontSize: Styles.FontSize.medium,
      fontFamily: Constants.fontFamily,
    },
    text_grid: {
      color: Color.black,
      fontSize: Styles.FontSize.small,
      fontFamily: Constants.fontFamily,
    },
    textRating: {
      fontSize: Styles.FontSize.small,
    },
    price_wrapper: {
      ...Styles.Common.Row,
      top: 0,
    },
    cardWraper: {
      flexDirection: "column",
    },
    sale_price: {
      textDecorationLine: "line-through",
      color: Color.blackTextDisable,
      marginLeft: 0,
      marginRight: 0,
      fontSize: Styles.FontSize.small,
    },
    cardPriceSale: {
      fontSize: 15,
      marginTop: 2,
      fontFamily: Constants.fontFamily,
    },
    price: {
      color: Color.black,
      fontSize: Styles.FontSize.medium,
    },
    saleWrap: {
      zIndex: 1000,
      position: 'absolute',
      right: 2,
      bottom: 20,
      borderRadius: 5,
      backgroundColor: Color.primary,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 3,
      marginBottom:-10,
       marginRight:7,
    },
    sale_off: {
      color: Color.lightTextPrimary,
      fontSize: Styles.FontSize.small,
    },
    cardText: {
        fontWeight: 'bold',
      fontSize: 20,
      textAlign: "center",
    },
    cardPrice: {
      fontSize: 18,
      marginBottom: 8,
      fontFamily: Constants.fontFamily,
    },
    btnWishList: {
      position: "absolute",
      top: 5,
      right: 5,
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
      width: 30,
      height: 30,
    },
})
