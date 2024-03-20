  import { View, Text, TouchableOpacity, Image } from "react-native";
import Gado from "../../assets/images/Cow.png";
import Camera from "../../assets/images/camera.png";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./Style";
import { useState } from "react";
import { TextInput } from "react-native";

export const Edit = ({navigation, route}) => {

  const { dadosBoi} = route.params;

  const [nome, setNome] = useState(dadosBoi.nome);
  const [descricaoBoi, setDescricao] = useState(dadosBoi.descricao);
  const [arroba, setArroba] = useState(dadosBoi.arroba);
  const [pesoKG, setPesoKG] = useState(dadosBoi.pesoKG);

  const handleConfirmar = () => {
    console.log(
      "Dados confirmados. Navegar para a próxima tela ou realizar ação."
    );
  };

  return (
    <View style={styles.containerEdit}>
      <View style={styles.titleButton}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.addButton}
        >
          <Ionicons name="chevron-back" size={32} color="black" />
          <Text style={styles.title}>Editar boi</Text>
        </TouchableOpacity>
    
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Identificador (Nome)"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricaoBoi}
          onChangeText={(text) => setDescricao(text)}
        />
        <View style={styles.inputDivisor}>
          <TextInput
            style={[styles.inputField, { marginRight: 30 }]}
            placeholder="Peso (Kg)"
            keyboardType="decimal-pad"
            value={pesoKG}
            onChangeText={(text) => setPesoKG(text)}
          />

          <TextInput
            style={styles.inputField}
            keyboardType="decimal-pad"
            placeholder="Peso (@)"
            value={arroba}
            onChangeText={(text) => setArroba(text)}
          />
        </View>
      </View>

      <View style={styles.selectImageContainer}>
        <Text style={styles.selectText}>Selecionar imagem</Text>
        <Image source={Gado} style={styles.selectImage} />
        <Image source={Camera} style={styles.cameraImage} />
      </View>

      <TouchableOpacity onPress={handleConfirmar} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};
