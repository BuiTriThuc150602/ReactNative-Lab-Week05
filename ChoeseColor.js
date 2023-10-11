import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

export default function ChoeseColor({navigation}) {
    const [colorPicker, setColorPicker] = useState('blue');
    return (
        <View>
            <View style= {styles.decription}>
                <View><Image
                source={require('./assets/vs_' + colorPicker + '.png')}
                style= {styles.imgPhone}  
                resizeMode='contain'             
                /></View>
                <View style = {styles.details}>
                    <Text>Điện Thoại VSmart Joy 3 - Hàng Chính Hãng</Text>
                    <Text>Màu : <Text style={styles.curentColorName}>{colorPicker}</Text></Text>
                    <Text>Cung Cấp Bởi : <Text style={styles.catogeragy}>Tiki Trading</Text></Text>
                    <Text style={styles.price}>1.790.000đ</Text>                    
                </View>
            </View>
            <View style = {styles.choeseColor}>
                <Text style={{fontSize:25}}>Chọn một màu bên dưới:</Text>
                <View style = {styles.color}>
                    <Pressable style = {[styles.color,styles.sliver]} onPress={()=>{setColorPicker("silver")}}></Pressable>
                    <Pressable style = {[styles.color,styles.red]} onPress={()=>{setColorPicker("red")}}></Pressable>
                    <Pressable style = {[styles.color,styles.black]} onPress={()=>{setColorPicker("black")}}></Pressable>
                    <Pressable style = {[styles.color,styles.blue]} onPress={()=>{setColorPicker("blue")}}></Pressable>
                </View>
                <Pressable style = {styles.btnDone} onPress={()=>{navigation.navigate({
                    name : 'Home',
                    params : {curentColor : colorPicker},
                    merge : true,
                })}}>Xong</Pressable>
            </View>
        </View>        
    )
}

const styles = StyleSheet.create({
    decription : {
        flexDirection : 'row',
    },
    imgPhone : {
        width : 150,
        height : 180,
    },
    details : {
        marginLeft : 10,
        paddingVertical : 30,
        flex : 1,
        justifyContent : 'space-between',
    },
    curentColorName : {
        fontWeight : 'bold',
    },
    catogeragy : {
        fontWeight : 'bold',
    },
    price : {
        fontWeight : 'bold',
        fontSize : 20,
    },

    choeseColor : {
        padding : 20,
        flex : 1,
        backgroundColor : '#C4C4C4',
    },
    color : {
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : 20,
    },
    sliver : {
        width : 80,
        height : 80,
        backgroundColor : '#C5F1FB',
    },
    red : {
        width : 80,
        height : 80,
        backgroundColor : '#FF0000',
    },
    black : {
        width : 80,
        height : 80,
        backgroundColor : '#000000',
    },
    blue : {
        width : 80,
        height : 80,
        backgroundColor : '#0000FF',
    },
    btnDone : {
        backgroundColor : '#1952E294',
        padding : 10,
        borderRadius : 10,
        marginTop : 40,
        textAlign : 'center',
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 20,
        borderColor : '#CA1536',
        borderWidth : 1,
    },


})