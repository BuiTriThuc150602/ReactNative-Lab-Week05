import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Screen1({navigation, route}) {
  var curentColor = route.params?.curentColor || "blue";
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgPhone}
          source={require("./assets/vs_" + curentColor + ".png")}
        />
      </View>
      <View style={styles.decsription}>
        <Text style={styles.productName}>
          Điện Thoại VSmart Joy 3 - Hàng Chính Hãng
        </Text>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
            <Image style={styles.star} source={require("./assets/star.png")} />
          </View>
          <Text style={styles.ratingText}>Xem thêm (239 đánh giá)</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>1.790.000đ</Text>
          <Text style={styles.discount}>1.790.000đ</Text>
        </View>
        <Text style={styles.text}>Ở đâu rẻ hơn hoàn tiền</Text>
        <Pressable style={styles.selectColor} onPress={()=>navigation.navigate("ChoeseColor")}>Chọn màu sắc <Image style={styles.toLeftVector} source={require("./assets/toLeft.png")}/></Pressable>
      <Pressable style = {styles.btnBuy}>Mua ngay</Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : "100vw",
    height : "100vh",
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgPhone: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
  decsription: {
    flex: 1,
    paddingHorizontal: 20,
  },
  productName: {
    marginBottom : 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 20,

  },
  rating: {
    flexDirection: "row",
  },
  star: {
    width: 23,
    height: 25,
    resizeMode: "contain",
  },
  ratingText: {
    fontStyle: "italic",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 20,

  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
  discount: {
    textDecorationLine: "line-through",
  },
  text: {
    fontWeight: "bold",
    color: "red",
    marginBottom : 20,

  },
  selectColor: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    boxShadow: "5px 5px 15px #888888",
  },
  toLeftVector : {
    position : "absolute",
    right : 10,
    width : 10,
    height : 10,
    resizeMode : "contain",
    },
    btnBuy : {
    backgroundColor : "red",
    color : "white",
    textAlign : "center",
    fontSize: 28,
    borderRadius : 10,
    boxShadow : "5px 5px 15px #888888",
    padding : 8,
    marginTop : 50,
       
    }
});

