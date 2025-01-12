import {create} from 'domain';
import {title} from 'process';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {backgroundColor: '#B01938', flex: 1},
  firsttitle: {
    fontSize: 35,
    color: 'white',
    marginTop: 38,
    marginLeft: 18,
  },
  secondtitle: {
    marginTop: 10,
    fontSize: 35,
    color: 'white',
    marginLeft: 18,
  },

  contain: {},
  container: {},

  buttomscreen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    marginTop: 150,
  },
  titlegmail: {
    color: '#B81737',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 70,
    marginLeft: 15,
  },
  passwordtext: {
    color: '#B81737',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 30,
  },
  email: {
    marginLeft: 15,
    opacity: 0.5,
    fontSize: 20,
    color: 'black',
  },
  password: {
    marginLeft: 15,
    fontSize: 25,
    color: 'black',
    opacity: 0.5,
  },
  tick: {
    opacity: 0.5,
    width: 25,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 2,
  },
  tickedbar: {},
  linebar: {
    borderWidth: 20,
    width: 200,
    height: 0.1,
    tintColor: 'black',
  },

  buttonsign: {
    width: '85%',
    backgroundColor: '#B01938',
    padding: 20,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft:20,
  },
  signtext: {color: 'white', fontWeight: 'bold', fontSize: 25},

  create: {
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.9,
    marginTop: 150,
  },
  signup: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#3A1A3A',
  },
  point: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});
