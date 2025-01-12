import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../Assets';

const instagram = () => {
  return (
    <SafeAreaView>
      <View style={Style.container}>
        <Image style={Style.loginimage} source={Images.insta} />
      </View>
      <View style={Style.login}>
        <Text style={Style.textlogin}>Login</Text>
      </View>
      <View style={Style.please}>
        <Text style={Style.textplease}>Please Sign in to continue</Text>
      </View>

      <View style={Style.containe}>
        <View style={Style.inputContainer}>
          <Image style={Style.icon} source={Icons.user} />

          <TextInput
            style={Style.input}
            placeholder="Username"
            placeholderTextColor="#87929A"
          />
        </View>
        <View style={Style.inputContaine}>
          <Image style={Style.icon} source={Icons.padlock} />

          <TextInput
            style={Style.input}
            placeholder="Password"
            placeholderTextColor="#87929A"
          />
        </View>
      </View>
      <View
        style={[
          Style.create,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          },
        ]}>
        <Text style={Style.account}> Create account</Text>
        <Image style={Style.tick} source={Icons.switc} />
      </View>

      <View style={Style.containopa}>
        <TouchableOpacity
          style={Style.buttton}
          activeOpacity={0.9} // Opaklık efekti
        >
          <Text style={Style.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          Style.create,
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={[Style.dont, {color: 'black', fontSize: 20}]}>
          {' '}
          Don't have account?{' '}
        </Text>
        <Text style={{color: 'black', fontSize: 20, marginRight: 50}}>
          {' '}
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default instagram;
