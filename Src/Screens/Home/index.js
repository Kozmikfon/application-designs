import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../Assets';

const Home = () => {
  return (
    <SafeAreaView style={Style.background}>
     <View
          style={[
            Style.contain,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            },
          ]}>
          <Text style={Style.firsttitle}> Hello</Text>
          <Text style={[Style.point,{marginRight:15}]}>•••</Text>
        </View>
      <View style={Style.contain}>
        <Text style={Style.secondtitle}> Sign in! </Text>
      </View>

      <View style={Style.buttomscreen}>
        <View style={Style.contain}>
          <Text style={Style.titlegmail}>Gmail</Text>
        </View>
        <View
          style={[
            Style.contain,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            },
          ]}>
          <Text style={Style.email}> baglamam344@gmail.com</Text>
          <Image style={Style.tick} source={Icons.tick} />
        </View>
        <View
          style={{
            marginLeft:15,
            width: 407,
            height: 2,
            opacity: 0.5,
            backgroundColor: 'black',
          }}
        />
        <View style={Style.contain}>
          <Text style={Style.passwordtext}>Password</Text>
        </View>
        <View
          style={[
            Style.contain,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            },
          ]}>
          <Text style={Style.password}>••••••</Text>
          <Image style={Style.tick} source={Icons.hide} />
        </View>
        <View
          style={{
            marginLeft:15,
            width: 407,
            height: 2,
            opacity: 0.5,
            backgroundColor: 'black',
          }}
        />

        <View style={{alignItems: 'flex-end'}}>
          <Text style={{color: '#381B39', fontSize: 20,marginTop:25, marginBottom:60}}>Forgot Password</Text>
        </View>
        <View
          style={[
            Style.buttonsign,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <Text style={Style.signtext}>SIGN IN</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={Style.create}> Don't have account? </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={Style.signup}> Sign Up </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
