
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#2a8ab7'
      },
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },
  sub: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  itemInput: {
    height: 40,
    padding: 4,
    marginRight: 5,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});