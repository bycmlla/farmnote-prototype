import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style.js";

const data = [
  {
    id: 1,
    image: require("../../assets/images/medicamento1.png"),
    nome: "Aftosa",
    aplicacoes: 20,
    ultimoProcedimento: '29/05/2023'
  },
  {
    id: 2,
    image: require("../../assets/images/medicamento2.png"),
    nome: "Brucelose",
    aplicacoes: 2,
    ultimoProcedimento: '07/03/2023'
  }
];

const RenderCard = (item, navigation) => (
  <TouchableOpacity onPress={() => navigation.navigate("RemedyDetails")} style={styles.cardContainer}>
    <View style={styles.imageContainer}>
      <Text style={styles.cardText}>{item.nome}</Text>
      <Image source={item.image} style={styles.cardImage} />
    </View>
    <View style={styles.cardOverlay}>

      <Text style={styles.cardText2}>aplicado em</Text>
      <Text style={styles.cardText2}>{item.aplicacoes} bois</Text>
    </View>
    <View style={styles.cardOverlay}>

      <Text style={styles.cardText2}>data do procedimento:</Text>
      <Text style={styles.cardText2}>{item.ultimoProcedimento}</Text>
    </View>
  </TouchableOpacity>
);

export const Remedy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Procedimentos</Text>
        <View style={styles.iconContainer}>
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
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => RenderCard(item, navigation)}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.gadoContainer}
      />
    </View>
  );
};
