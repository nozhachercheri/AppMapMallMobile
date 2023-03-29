import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, Styles, Constants } from "../../common";
import { ImageCache, Rating } from "../../components";
import { HeartIcon,ShoppingCartIcon } from "react-native-heroicons/outline";

import * as Animatable from "react-native-animatable";

import { contacts } from "./Contacts";
// import Icon, { Icons } from '../components/Icons';
// import { Animations } from '../constants/Animations';

const colorAr = [
  "#637aff",
  "#60c5a8",
  "#CCCCCC",
  "#ff5454",
  "#039a83",
  "#dcb834",
  "#8f06e4",
  "skyblue",
  "#ff4c98",
];
const bgColor = (i) => colorAr[i % colorAr.length];
const imageStyle = Styles.image_grid;
const textStyle = Styles.text_list;
const ListItem = ({ item, index, animation, navigation }) => {
  return (
    <Animatable.View animation="fadeInUp" duration={1000} delay={index * 300}>
       
      <View style={styles.listItem}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Screen")}
        >
          {/* <View style={[styles.image, { backgroundColor: bgColor(index) }]} />  */}
          {/* <Image
         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}

          style={[styles.image, imageStyle]}
        /> */}
          <ImageCache
            uri={item.thumbnail_image}
            style={[styles.image, imageStyle]}
          />
          {/** ** add wish list *** */}
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
            <HeartIcon name="heart" size={20} color="red" />
            {/*  {!isInWishList && (
            <FontAwesome name="heart-o" size={20} color="#b5b8c1" />
          )} */}
          </TouchableOpacity>
          <TouchableOpacity>
            {/* {product.on_sale && product.regular_price > 0 && ( */}
            <View style={styles.saleWrap}>
              <Text style={[textStyle, styles.sale_off]}>
             
                 {`${(
                      (100 -
                        Number(item.base_discounted_price)*100 / Number(item.base_price))
                    )}%`} 
              </Text>
            </View>
            {/* )} */}
          </TouchableOpacity>
          <View style={styles.price_wrapper}>
                <Rating
                  rating={Number(item.rating)}
                  size={
                   
                       Styles.FontSize.medium
                      
                  }
                />
                <Text style={[textStyle, styles.textRating]}>
                  {item.max_qty}
                </Text>
              </View>
        </TouchableOpacity>

        <Text style={styles.name}>{item.name}</Text>
     
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
          }}
        >
          <View
            style={[
              styles.price_wrapper,
              // , !isListMode &&
              { marginTop: 0 },
            ]}
          >
              
            <Text
              style={[
                textStyle,
                styles.price,
                // isCardMode &&
                styles.cardPrice,
                // !isListMode &&
                { color: Color.blackTextSecondary },
                { color: Color.black },
              ]}
            >
              {/* {productPrice} */} {item.base_discounted_price}.00$
            </Text>

            <Text
              style={[
                textStyle,
                styles.sale_price,
                // isCardMode &&
                styles.cardPriceSale,
               
              ]}
            >
              {/* {productPriceSale} */} {item.base_price}.00$
            
            </Text>
            <ShoppingCartIcon size={20} color={Color.primary} style={{marginRight:3}} />
          </View>
          
        </View>
 
        {/* <Icon type={Icons.Feather} name="more-vertical" size={20} color={Colors.black} /> */}
      </View>
    </Animatable.View>
  );
};

export default function ListScreen({ route, navigation }) {
  const viewRef = useRef(null);
  //   const animation = Animations[Math.floor(Math.random() * Animations.length)]
  //   console.log('====================================');
  //   console.log(Math.floor(Math.random() * Animations.length), Math.random() * Animations.length, Animations.length);
  console.log("====================================");

  const renderItem = ({ item, index }) => (
    <ListItem item={item} index={index} navigation={navigation} />
  );

  const ListEmptyComponent = () => {
    const anim = {
      0: { translateY: 0 },
      0.5: { translateY: 50 },
      1: { translateY: 0 },
    };
    return (
      <View style={[styles.listEmpty]}>
        <Animatable.Text
          animation={anim}
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 24 }}
          iterationCount="infinite"
        >
          Empty List!
        </Animatable.Text>
      </View>
    );
  };
  //   useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //       viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
  //     })
  //     // ToastAndroid.show(animation+ ' Animation', ToastAndroid.SHORT);
  //     return () => unsubscribe;
  //   }, [navigation])

  return (
    <View style={[Styles.container]}>
         <Image style={styles.background} source={require("../../images/bg1.jpg")} blurRadius={10} />
      <Animatable.View
        ref={viewRef}
        easing={"ease-in-out"}
        duration={500}
        style={Styles.container}
      >
        <FlatList
          data={contacts}
          keyExtractor={(_, i) => String(i)}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={ListEmptyComponent}
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    marginLeft: 2,
    fontSize: 16,
    color: "black",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "rgba(0, 0, 0, .08)",
  },
  listEmpty: {
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {

    height: 204,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: "white",
    margin: 8,
    borderRadius: 10,
  },
  image: {
    height: 120,
    margin: 5,
    borderRadius: 10,
    backgroundColor: Color.primary,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginLeft:55
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
    marginLeft: 5,
    
    marginRight: 10,
    fontSize: Styles.FontSize.small,
  },
  cardPriceSale: {
    fontSize: 15,
    marginTop: 2,
    fontFamily: Constants.fontFamily,
    color:'gray',
  },
  price: {
    color: Color.black,
    fontSize: Styles.FontSize.medium,
  },
  saleWrap: {
    zIndex: 1000,
    position: "absolute",
    right: 2,
    bottom: 20,
    borderRadius: 5,
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
    marginBottom: -10,
    marginRight: 7,
  },
  sale_off: {
    color: Color.lightTextPrimary,
    fontSize: Styles.FontSize.small,
  },
  cardText: {
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
  background: {
    position: "absolute",
    resizeMode: "stretch",
    borderRadius: 5,
    height: '100%',
    width: "100%",

  },
});
