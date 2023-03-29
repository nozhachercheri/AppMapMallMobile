// Import react
import React from 'react';
// Import react-native components
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
//icon
import { Ionicons } from '@expo/vector-icons';
//Colors
import Colors from '../../utils/Colors';
//Search Item component
import SearchItem from './SearchItem';
import Animated, {   Easing as OldEasing, // @ts-ignore 
EasingNode } from 'react-native-reanimated';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
const { Value, timing } = Animated;
// Calculate window size
const { width, height } = Dimensions.get('window');
const Easing = EasingNode || OldEasing;
export class HeaderScreen extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      isFocused: false,
      keyword: '',
      productsFilter: '',
    };
    // animation values
    this._input_box_translate_x = new Value(width);
    this._back_button_opacity = new Value(0);
    this._content_translate_y = new Value(height);
    this._content_opacity = new Value(0);
  }
  
  //Search
  searchFilterFunction = (searchText) => {
    const data = this.props.products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    this.setState({ keyword: searchText, productsFilter: data });
  };

  _onFocus = () => {
    // update state
    this.setState({ isFocused: true });
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };
    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };
    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start();
    timing(this._back_button_opacity, back_button_opacity_config).start();
    timing(this._content_translate_y, content_translate_y_config).start();
    timing(this._content_opacity, content_opacity_config).start();
    // force focus
    this.refs.input.focus();
  };
  _onBlur = () => {
    // update state
    this.setState({ isFocused: false });
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 50,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start();
    timing(this._back_button_opacity, back_button_opacity_config).start();
    timing(this._content_translate_y, content_translate_y_config).start();
    timing(this._content_opacity, content_opacity_config).start();
    // force blur
    this.refs.input.blur();
  };

  render() {
   
    const headerPlatform = 50;
    
   
   
    // const ViewPlatForm = Platform.OS === "android" ? SafeAreaView : View;
    return (
      <>
        <SafeAreaView
          style={{ ...styles.header_safe_area, ...this.props.style }}
        >
          <Animated.View
            style={[
              styles.header,
              // {                                                                                             heiden header translety Y
              //   transform: [
              //     {
              //       translateY: _header_translate_y,
              //     },
              //   ],
              //   opacity: _header_opacity,
              // },
            ]}
          >
            <View style={styles.header_inner}>
              <TouchableOpacity
                // onPress={() => this.props.navigation.toggleDrawer()}
              >
                <Ionicons
                  name='ios-menu'
                  size={30}
                  color={Colors.primary}
                />
              </TouchableOpacity>
              <View>
                <Image
                  source={require('../../images/logo_with_text.png')}
                  style={{
                    width: height < 668 ? 130 : 120,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={1}
                underlayColor={'#ccd0d5'}
                onPress={this._onFocus}
                style={styles.search_icon_box}
              >
                <Ionicons name='ios-search' size={20} color={Colors.white} />
              </TouchableOpacity>
              <Animated.View
                style={[
                  styles.input_box,
                  { transform: [{ translateX: this._input_box_translate_x }] },
                ]}
              >
                <Animated.View style={{ opacity: this._back_button_opacity }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    underlayColor={'#ccd0d5'}
                    onPress={this._onBlur}
                    style={styles.back_icon_box}
                  >
                    <Ionicons
                      name='ios-arrow-back'
                      size={25}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                </Animated.View>
                <TextInput
                  ref='input'
                  placeholder='Rechercher un produit'
                  clearButtonMode='always'
                  value={this.state.keyword}
                  onChangeText={(value) => this.searchFilterFunction(value)}
                  style={styles.input}
                />
              </Animated.View>
            </View>
          </Animated.View>
        </SafeAreaView>
        <Animated.View
          style={[
            styles.content,
            {
              opacity: this._content_opacity,
              transform: [{ translateY: this._content_translate_y }],
            },
          ]}
        >
          <View style={styles.content_safe_area}>
            {this.state.keyword === '' ? (
              <View style={styles.image_placeholder_container}>
                <Image
                  source={require('../../images/logo_with_text.png')}
                  style={styles.image_placeholder}
                />
                <Text style={styles.image_placeholder_text}>
                Entrez le mot-clé{'\n'}
                pour chercher :D
                </Text>
              </View>
            ) : (
              <View
                style={{
                  marginHorizontal: 20,
                  marginTop:
                    Platform.OS === 'android' ? 0 : height < 668 ? 0 : 60,
                }}
              >
                {this.state.productsFilter.length === 0 ? (
                  <Text style={styles.image_placeholder_text}>
                   Aucun produit trouvé
                  </Text>
                ) : (
                  <FlatList
                    data={this.state.productsFilter}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                      return (
                        <SearchItem
                          item={item}
                          navigation={this.props.navigation}
                        />
                      );
                    }}
                  />
                )}
              </View>
            )}
          </View>
        </Animated.View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    position: 'absolute',
    backgroundColor: Colors.white,
    width,
    height: 50,
    top:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : height > 736
        ? 40
        : 20,
  },
  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  search_icon_box: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.white,
    width: width,
  },
  back_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.light_grey,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
    marginHorizontal: 20,
  },
  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    zIndex: 999,
  },
  content_safe_area: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 80 : 40,
    paddingBottom: 80,
    backgroundColor: Colors.white,
  },
  content_inner: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.light_grey,
  },
  image_placeholder_container: {
    flexDirection: 'column',
    marginTop: 100,
  },
  image_placeholder: {
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  image_placeholder_text: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
  },
  item_icon: {
    marginRight: 15,
  },
});
