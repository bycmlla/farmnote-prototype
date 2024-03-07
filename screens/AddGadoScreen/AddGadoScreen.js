import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Style";
import Camera from "../../assets/images/camera.png";

export const AddGadoScreen = () => {
  const navigation = useNavigation();
  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const [campo3, setCampo3] = useState("");
  const [campo4, setCampo4] = useState("");

  const handleAddGado = () => {
    console.log("Adicionar gado com os seguintes dados:");
    console.log("Campo 1:", campo1);
    console.log("Campo 2:", campo2);
    console.log("Campo 3:", campo3);
    console.log("Campo 4:", campo4);

    navigation.navigate("Overview");
  };

  const handleConfirmar = () => {
    console.log(
      "Dados confirmados. Navegar para a próxima tela ou realizar ação."
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleButton}>
        <TouchableOpacity onPress={handleAddGado} style={styles.addButton}>
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Adicionar Boi</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Identificador (Nome)"
          value={campo1}
          onChangeText={(text) => setCampo1(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={campo2}
          onChangeText={(text) => setCampo2(text)}
        />
        <View style={styles.inputDivisor}>
          <TextInput
            style={[styles.inputField, { marginRight: 30 }]}
            placeholder="Peso (Kg)"
            value={campo3}
            onChangeText={(text) => setCampo3(text)}
          />

          <TextInput
            style={styles.inputField}
            placeholder="Peso (@)"
            value={campo4}
            onChangeText={(text) => setCampo4(text)}
          />
        </View>
      </View>
      <View style={styles.selectImageContainer}>
        <Text style={styles.selectText}>Selecionar imagem</Text>
        <Image source={Camera} style={styles.selectImage} />
      </View>

      <TouchableOpacity onPress={handleConfirmar} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};
