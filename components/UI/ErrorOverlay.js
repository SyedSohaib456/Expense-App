import { View,Text,StyleSheet} from 'react-native'
import Button from './Button'
import { GlobalStyles } from '../../constans/styles';
function ErrorOverlay({message ,onConfirm }) {
  return (
 <View style={styles.ctn} >
   <Text style={[styles.text, styles.title]} >An error occured!</Text>
   <Text style={styles.text} >{message}</Text>
   <Button style={styles.errorBtn}  whenPressed={onConfirm}>Okay</Button>
 </View>
  )
}

const styles = StyleSheet.create({
    ctn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text:{
        color:'white',
        textAlign:'center',
        marginBottom:8,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    errorBtn:{
      marginTop:8,
    }
    
});


export default ErrorOverlay
