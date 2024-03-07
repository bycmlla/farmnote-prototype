import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style.js";

const data = [
  {
    id: 1,
    image: require("../../assets/images/Cow.png"),
    description1: "Peso\n300.0kg | 10.0@",
    description2: "Taxa de crescimento\n0.0%",
  },
  {
    id: 2,
    image: require("../../assets/images/Cow.png"),
    description1: "Peso\n420.0kg | 14.0@",
    description2: "Taxa de crescimento\n15.0%",
  },
  {
    id: 3,
    image: require("../../assets/images/Cow.png"),
    description1: "Peso\n540.0kg | 18.0@",
    description2: "Taxa de crescimento\n10.0%",
  },
  {
    id: 4,
    image: require("../../assets/images/Cow.png"),
    description1: "Peso\n540.0kg | 10.0@",
    description2: "Taxa de crescimento\n0.0%",
  },
];

const renderCard = ({ item }) => (
  <View style={styles.cardContainer}>
    <Image source={item.image} style={styles.cardImage} />
    <View style={styles.cardOverlay}>
      <Text style={styles.cardText}>{item.description1}</Text>
      <Text style={styles.cardText2}>{item.description2}</Text>
    </View>
  </View>
);

export const Overview = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gado</Text>
        <View style={styles.iconContainer}>
          <EvilIcons name="image" size={35} style={styles.icon} />
          <EvilIcons
            name="search"
            size={36}
            color="black"
            style={styles.icon}
          />
          <View style={styles.reloadIconContainer}>
            <Ionicons
              name="reload"
              size={24}
              color="black"
              style={styles.reloadIcon}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("AddGado")}>
              <Ionicons
                name="add"
                size={32}
                color="black"
                style={styles.addIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.gadoContainer}
      />
    </View>
  );
};
