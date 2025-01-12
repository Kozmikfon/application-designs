import {View, Text, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Style from './styles';
import {Icons} from '../../Assets';

export default Header = () => {
  return (
    <View>
      <View style={{width: '100%', alignItems: 'flex-end'}}>
        <Text style={Style.point}> ... </Text>
      </View>
      <View>
        <Image style={Style.icon} source={Icons.dumble} />
      </View>
      <View style={Style.container}>
        <Text style={Style.title}>mahmut</Text>
      </View>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

