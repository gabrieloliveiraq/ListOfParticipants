import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      fontSize: 12,
      color: '#31CF67',
      marginTop: 45

    },
    eventDate: {
      fontSize: 12,
      color: '#31CF67',
      marginTop: 10
    },
    eventNameInput: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
    },
    eventDateInput: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FDFCFE',
      padding: 16,
      fontSize: 16,
      marginRight: 12
    },
    buttonText: {
      color: '#FDFCFE',
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 30
    },
    listEmptyText: {
      color: '#FDFCFE',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20

    },
    deleteAllButton: {
      width: 90,
      height: 25,
      borderRadius: 5,
      backgroundColor: '#E23C44',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 276,
      marginBottom: 15

    },
    deleteAllText: {
      textAlign: 'center',
      color: '#FDFCFE',
      fontWeight: 'bold'

    }
  })