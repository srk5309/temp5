import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native'
import back1 from '../assets/back1.png'
import paymentimg from '../assets/paymentimg.png'
import gpayimg1 from '../assets/gpayimg1.png'

const Makepayment = ({navigation})=> {
    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.backimage} source={back1}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.mainpartcontainer}>
                <View style={styles.paymentimgcontainer}>
                    <Image source={paymentimg}></Image>
                </View>
                <View style={styles.headertxtcontainer}>
                    <Text style={styles.headertxt}>ANANT SEWA GROUP</Text>
                    <Text style={styles.headertxt2}>Transfer On Oct {21,2020}</Text>
                </View>
                <View style={styles.moneytxtcontainer}>
                    <Text style={styles.moneytxt}>   51/- </Text>
                    <TouchableOpacity>
                        <Image source={gpayimg1}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomcontainer}>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.makepaymentbtntxt}>Make Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Makepayment



const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#23287D'
    },
    headercontainer:{
        flexDirection:'row',
        // paddingVertical:40,
        flex:.10
    },
    backimage:{
        margin:15
    },
    headertxt:{
        color:'#FFFFFF',
        fontSize:18,
        fontFamily:'Roboto-Regular'
    },
    headertxt2:{
        color:'#F19922',
        fontSize:18,
        fontFamily:'Roboto-Regular'
    },
    headertxtcontainer:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        
    },
    mainpartcontainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:0.70
    },
    paymentimgcontainer:{
        marginBottom:18
    },
    moneytxtcontainer:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'40%',
        // borderColor:'white',
        // borderWidth:5
    },
    moneytxt:{
        fontSize:45,
        fontFamily:'Roboto-Regular',
        color:'#FFFFFF',
    },
    bottomcontainer:{
        backgroundColor:'white',
        flex:0.30,
        justifyContent:'flex-end',
        // height:'30%'
        // borderColor:'white',
        // borderWidth:5,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    makepaymentbtncontainer:{
        // width:'80%'
    },
    makepaymentbtntxt:{
        backgroundColor:'#F19922',
        width:'100%',
        fontSize:20,
        color:'#FFFFFF',
        paddingHorizontal:50,
        paddingVertical:12,
        borderRadius:40
        

    }


})




















