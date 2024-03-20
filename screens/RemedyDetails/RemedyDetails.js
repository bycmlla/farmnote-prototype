import * as react from "react-native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Medicamento from "../../assets/images/medicamento1.png";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./Style";
import { useState } from "react";
import { Modal } from "react-native";

export const RemedyDetails = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.containerDetails}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalTouchable} />
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Tem certeza?
            </Text>
            <Text style={styles.modalText}>
              Você irá deletar permanentemente o procedimento (nome do procedimento em questão)!
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
              >
                <Text style={[{color: 'red'}, styles.modalText]}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.modalTouchable} />
        </View>
      </Modal>
      <View style={styles.titleButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Overview")}
          style={styles.addButton}
        >
          <Ionicons name="chevron-back" size={32} color="black" />
          <Text style={styles.title}>Detalhes</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleDelete}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gadoImage}>
        <Image source={Medicamento} style={styles.cardImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.h1}>Brucelose</Text>
        <Text style={styles.h2}>Infecção bacteriana</Text>
        <View style={styles.divider} />
        <View style={styles.withButton}>
          <View>
            <Text style={[styles.h1, { marginTop: 10 }]}>Aplicação</Text>
            <Text style={styles.h2}>13 bois</Text>
          </View>

          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Ver mais detalhes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.withButton}>
          <View>
            <Text style={[styles.h1, { marginTop: 10 }]}>
              Data da Aplicação
            </Text>
            <Text style={styles.h2}>A aplicação foi realizada em 07/08/2023</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
