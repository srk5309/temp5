import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

const Asgidgenerated = ({navigation})=> {
    return (
        <View style={styles.continer}>
            <Text style={styles.weltxt}>Your ASG ID has been</Text>
            <Text style={styles.weltxt}>successfully generated !</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Makepayment')}>
                <Text style={styles.nxttxt}>NEXT</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Asgidgenerated



const styles = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:'#F19922',
        justifyContent:'center',
        alignItems:'center'
    },
    weltxt:{
        color:'#FFFFFF',
        fontFamily:'Roboto-Regular',
        fontSize:30
    },
    nxttxt:{
        fontSize:16,
        color:'#FFFFFF',
        fontFamily:'Roboto-Regular',
        backgroundColor:'#2C3A99',
        paddingHorizontal:40,
        paddingVertical:10,
        marginTop:30,
        borderRadius:20

    }
})




















