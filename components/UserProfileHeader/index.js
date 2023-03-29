/** @format */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Languagegs, Languages, withTheme } from "../../common";
import styles from "./styles";

class UserProfileHeader extends PureComponent {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  loginHandle = () => {
    if (this.props.user.name === Languages.Guest) {
      this.props.onLogin();
    } else {
      this.props.onLogout();
    }
  };

  render() {
    const { user } = this.props;
   // const avatar = Tools.getAvatar(user);
    const {
      theme: {
        colors: { background, text },
      },
    } = this.props;

    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <View style={styles.header}>
          <Image   source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtF3o2PvqxOMHgdrpj_YRItsLBjxyTeNZu_Q&usqp=CAU'}}
           style={styles.avatar} />
          <View style={styles.textContainer}>
            {/* <Text style={[styles.fullName, { color: text }]}>{user.name}</Text> */}
            <Text style={[styles.fullName, { color: text }]}>Mohamed</Text>
            {/* <Text style={[styles.address, { color: text }]}>
              {user ? user.address : ""}
            </Text> */}
            <Text style={[styles.address, { color: text }]}>
              Nabeul
            </Text>
            <TouchableOpacity onPress={this.loginHandle}>
              <Text style={styles.loginText}>
                {/* {user.name === Languages.Guest
                  ? Languages.Login
                  : Languages.Logout} */}
                  {Languagegs.Logout}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withTheme(UserProfileHeader);
