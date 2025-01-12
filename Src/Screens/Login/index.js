import {Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../Assets'; 
import {Header} from '../../Components'; 



const Login = () => {
  return (
    <SafeAreaView style={Style.background}>
      <View style={{alignItems: 'center'}}>
      <Header title="Mahmut" />
        <View>
          <Text style={Style.welcome}> Welcome Back</Text>
        </View>
        <View style={Style.buttonsign}>
          <Text style={Style.buttonTextsign}> Sign in</Text>
        </View>
        <View style={Style.buttonUp}>
          <Text style={Style.buttonTextup}> Sign Up</Text>
        </View>
        <View style={Style.container}>
          <Text style={Style.lastTitle}>Login with Social Media </Text>
        </View>
        
        <View style={Style.buttonBar}>
          <View style={Style.buttonImage}>
            <Image style={Style.iconbutton} source={Icons.face} />
          </View>
          <View style={Style.buttonImage}>
            <Image style={Style.iconbutton} source={Icons.instagram} />
          </View>
          <View style={Style.buttonImage}>
            <Image style={Style.iconbutton} source={Icons.twitter} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
