/** @format */

import React, { PureComponent } from "react";
import { Platform, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modalbox";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/SimpleLineIcons";

import { withTheme } from "../../common";
import styles from "./styles";


export default class ModalBox extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    css: PropTypes.any,
    type: PropTypes.string,
  };

  openModal = () => {
    this.modal.open();
  };

  closeModal = () => {
    this.modal.close();
  };

  render() {
    const { type, css } = this.props;
 
    return (
      <Modal
        ref={(modal) => (this.modal = modal)}
        useNativeDriver
        animationDuration={100}
        backdropOpacity={Platform.OS === "android" ? 0.9 : 0.5}
        position="top"
        style={[
          typeof type !== "undefined"
            ? styles.modalReadlater
            : styles.modalBoxWrap,
          css,
        ]}>
        <View style={[styles.wrap]}>
          {this.props.children}
        </View>

        <TouchableOpacity style={styles.iconZoom} onPress={this.closeModal}>
          <Icon
            style={styles.textClose}
            name="close"
            size={22}
            
            backgroundColor="transparent"
          />
        </TouchableOpacity>
      </Modal>
    );
  }
}
