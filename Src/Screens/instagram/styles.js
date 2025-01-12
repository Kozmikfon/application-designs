import {create} from 'domain';
import {title} from 'process';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loginimage: {
    width: 250,
    height: 250,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
  },
  login: {
    marginLeft: 20,
    marginBottom: 50,
  },
  please: {
    marginLeft: 30,
    marginBottom: 30,
  },
  textlogin: {
    fontSize: 35,
    color: '#132230',
    fontWeight: 'bold',
  },
  textplease: {
    fontSize: 15,
    color: '#132230',
  },
  input: {
    color: 'red',
    opacity: 0.8,
    width: '90%',
    height: 40,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  containe: {
    justifyContent: 'center',
    marginLeft: 30,
    backgroundColor: '#fafafa',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 35,
    paddingHorizontal: 10,
    width: '90%',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 21,
  },
  inputContaine: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 35,
    paddingHorizontal: 10,
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
  },
  login: {
    marginLeft: 30,
    marginBottom: 5,
  },
  create: {},
  account: {
    color: '#1A364C',
    marginLeft: 30,
  },
  tick: {
    opacity: 0.5,
    width: 25,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 2,
    marginRight: 45,
  },
  buttonsign: {
    width: '90%',
    backgroundColor: '#1A364C',
    padding: 11,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 50,
    marginBottom: 5,
  },
  signtext: {color: 'white', fontWeight: 'bold', fontSize: 23},

  dont: {
    marginLeft: 15,
    fontSize: 20,
    opacity: 0.6,
    color: 'black',
  },
  containopa: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginTop: 45,
    marginBottom: 20,
  },
  buttton: {
    alignItems: 'center',
    width: '80%',
    height: '65%',
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 49,
  },
  buttonText: {
    fontSize: 36,
    color: 'blue',
    fontWeight: 'bold',
  },
});
