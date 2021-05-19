import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
      },
      title: {
        fontSize: 42,
        margin: 10,
        color: 'white'
      },
      inputView: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
      },
      submitButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 8,
        width: 100,
      },
      submitButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
      },
      signUpText: {
        color: 'white',
        fontSize: 16,
        padding: 16
      }
})
