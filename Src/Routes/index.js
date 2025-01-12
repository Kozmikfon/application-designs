import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './StackRoutes';

const index = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default index;