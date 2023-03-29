/** @format */

import React, { Component } from "react";
import { View, Image, TouchableOpacity, Dimensions, Text } from "react-native";
import { connect } from "react-redux";
//import { toast } from "@app/Omni";
import { Tools, Languages, Images } from "../../common";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./styles";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const slideHeight = viewportHeight * 0.65;
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const slideInnerContainer = {
  width: itemWidth,
  height: slideHeight,
  borderRadius: 6,
  overflow: "hidden",
  paddingHorizontal: itemHorizontalMargin,
  paddingBottom: 18, // needed for shadow
};
const  categories  =  [
  {
    category: 55,
    image: require("../../images/banner/bag.png"),
    colors: ["#4facfe", "#00f2fe"],
    label: "sport",
  },
  {
    category: 21,
    image: require("../../images/banner/man.png"),
    colors: ["#43e97b", "#38f9d7"],
    label: "T-Shirts",
  },
  {
    category: 208,
    image: require("../../images/intro/01.1.bg.png"),
    colors: ["#fa709a", "#fee140"],
    label: "Clothing",
  },
  {
    category: 26,
    image: require("../../images/categories_icon/ic_dress.png"),
    colors: ["#7F00FF", "#E100FF"],
    label: "Dresses",
  },
  {
    category: 24,
    image: require("../../images/categories_icon/ic_glasses.png"),
    colors: ["#30cfd0", "#330867"],
    label: "Bags",
  },
];
// const [categoo, setCategoo] = React.useState('');
// function getCtegoo(){

//   setCategoo(categories);
//   console.warn(categories)
// };
class CategoryCarousel extends Component {
  // showCategory = (category) => {
  //   const { setSelectedCategory, onViewCategory } = this.props;
  //   setSelectedCategory({
  //     ...category,
  //     mainCategory: category,
  //   });
  //   onViewCategory({ mainCategory: category });
  // };


  renderItem = ({ item, index }) => {
    // if (item.image == null) return <View />;

    // const image =
    //   item.image !== null
    //     ? { uri: item.image.src }
    //     : Images.categoryPlaceholder;

    // warn(item.image.src);

    return (
      <View style={slideInnerContainer}>
        <LinearGradient
          style={[styles.linearGradient, { width: itemWidth }]}
          colors={["rgba(0,0,0, 0)", "rgba(0, 0, 0, 0.8)"]}
        />
        <Image source={item.image} style={styles.image} />

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.titleView}>
          <Text style={styles.title}>
            {/* {Tools.getDescription(item.name, 200)} */}
            
          </Text>
          <Text numberOfLines={2} style={styles.count}>
            {item.label + " " +item.label}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {

    return (
      
      <Carousel
        layout={"stack"}
        layoutCardOffset={18}
        renderItem={this.renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideOpacity={0.4}
        contentContainerCustomStyle={styles.sliderContainer}
        removeClippedSubviews={false}
        loop={true}
        data={categories}
      />
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//    // categories: state.categories.list,
//   //  netInfo: state.netInfo,
//   };
// };

// function mergeProps(stateProps, dispatchProps, ownProps) {
//   const { netInfo } = stateProps;
//   const { dispatch } = dispatchProps;
//  // const { actions } = require("@redux/CategoryRedux");

//   return {
//     ...ownProps,
//     ...stateProps,
//     // fetchCategories: () => {
//     //   //if (!netInfo.isConnected) return toast(Languages.noConnection);
//     //   actions.fetchCategories(dispatch);
//     // },
//     // setActiveLayout: (value) => dispatch(actions.setActiveLayout(value)),
//     // setSelectedCategory: (category) =>
//     //   dispatch(actions.setSelectedCategory(category)),
//   };
// }

export default CategoryCarousel;
