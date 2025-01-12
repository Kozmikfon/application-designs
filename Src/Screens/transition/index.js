import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Icons, Images} from './assets';

const transition = () => {
  const [buttonName, setButtonName] = useState('All');
  const onPressMenu = button => {
    setButtonName(button);
  };
  const buttons = ['All', 'New', 'Category'];
  const products = [
    {name: 'Kaban', piece: 3, total: 50},
    {name: 'Kazak', piece: 1, total: 50},
    {name: 'Mont', piece: 2, total: 50},
    {name: 'Etek', piece: 5, total: 50},
  ];
  products[0].name;
  return (
    <View style={{flex: 1, backgroundColor: '#FEF7F1'}}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={Icons.menu} style={styles.headerIcon} />
        </TouchableOpacity>
        <View>
          <Image source={Icons.shop} style={styles.headerIcon} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View>
          <Image source={Icons.search} style={styles.searchIcon} />
        </View>
        <View>
          <TextInput
            placeholderTextColor={'white'}
            style={styles.searchTextInput}
            placeholder="Search"
          />
        </View>
      </View>
      <View style={styles.categoryMenu}>
        {buttons.map(button => {
          return (
            <TouchableOpacity
              onPress={() => {
                setButtonName(button);
              }}
              style={
                buttonName == button ? styles.buttonPress : styles.buttonUnPress
              }>
              <Text
                style={
                  buttonName == button ? styles.textPress : styles.textUnPress
                }>
                {button}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.list}>
        <View style={styles.grup}>
          <View style={styles.grupProduct1}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon1Bar}>
                <Image source={Icons.hearth} style={styles.productIcon1} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
          <View style={styles.grupProduct2}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon2Bar}>
                <Image source={Icons.hearth} style={styles.productIcon2} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
        </View>
        <View style={styles.grup}>
          <View style={styles.grupProduct2}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon2Bar}>
                <Image source={Icons.hearth} style={styles.productIcon2} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
          <View style={styles.grupProduct2}>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.productIcon2Bar}>
                <Image source={Icons.hearth} style={styles.productIcon2} />
              </View>
            </View>
            <View>
              <Image source={Images.iceCream} style={styles.grupProductImage} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabMenu}>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.menu} style={styles.tabMenuIcon1} />
          </View>
          <View>
            <Text style={styles.tabMenuText1}>Shop</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.menu} style={styles.tabMenuIcon2} />
          </View>
          <View>
            <Text style={styles.tabMenuText2}>gift</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.menu} style={styles.tabMenuIcon2} />
          </View>
          <View>
            <Text style={styles.tabMenuText2}>Offer</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View>
            <Image source={Icons.menu} style={styles.tabMenuIcon2} />
          </View>
          <View>
            <Text style={styles.tabMenuText2}>Me</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'space-between', margin: 20},
  headerIcon: {
    height: 30,
    width: 30,
    tintColor: '#F9A46C',
  },
  searchIcon: {
    height: 30,
    width: 30,
    tintColor: 'white',
    marginRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9A46C',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  searchTextInput: {color: 'white', fontSize: 20},
  categoryMenu: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  buttonPress: {
    backgroundColor: '#F9A46C',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  buttonUnPress: {
    borderWidth: 1,
    borderColor: '#F9A46C',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  textPress: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  textUnPress: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F9A46C',
  },
  list: {margin: 20},
  grup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  grupProduct1: {
    backgroundColor: '#F9A46C',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  grupProduct2: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 12,
    shadowOffset: {height: 10, width: 10},
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  grupProductImage: {
    width: 150,
    height: 150,
  },
  productIcon1: {width: 15, height: 15, tintColor: '#F9A46C'},
  productIcon1Bar: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productIcon2: {width: 15, height: 15, tintColor: 'white'},
  productIcon2Bar: {
    padding: 5,
    backgroundColor: '#F9A46C',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabMenu: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  tabMenuIcon1: {width: 40, height: 40, tintColor: '#F9A46C'},
  tabMenuText1: {color: '#F9A46C'},
  tabMenuIcon2: {width: 40, height: 40, tintColor: '#FAE3D3'},
  tabMenuText2: {color: '#FAE3D3'},
});
