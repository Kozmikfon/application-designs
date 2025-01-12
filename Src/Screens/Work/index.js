import {Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../Assets'; // Sadece Images içe aktarılıyor

const Work = () => {
  return (
    <SafeAreaView>
      <View
        style={[
          Style.menu,
          {
            flexDirection: 'row',
          },
        ]}>
        <Image style={Style.menu} source={Icons.menu} />
        <Image style={Style.flag} source={Icons.flag} />
        <Text style={Style.englishtext}> English </Text>
      </View>
    </SafeAreaView>
  );
};

export default Work;
