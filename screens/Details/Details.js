import { View, Text, TouchableOpacity, Image } from "react-native";
import Gado from "../../assets/images/Cow.png";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./Style";

export const Details = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerDetails}>
      <View style={styles.titleButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Overview")}
          style={styles.addButton}
        >
          <Ionicons name="chevron-back" size={32} color="black" />
          <Text style={styles.title}>Detalhes</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Edit', { dadosBoi: {nome: "Boi 03", descricao: "Boi velho", pesoKG: "540", arroba: "18"}})}>
            <MaterialCommunityIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gadoImage}>
        <Image source={Gado} style={styles.cardImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.h1}>Boi 03</Text>
        <Text style={styles.h2}>Boi velho</Text>
        <View style={styles.divider} />
        <View style={styles.withButton}>
          <View>
            <Text style={[styles.h1, { marginTop: 10 }]}>Peso</Text>
            <Text style={styles.h2}>540 kg</Text>
            <Text style={styles.h2}>18.0 @</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Edit', { dadosBoi: {nome: "Boi 03", descricao: "Boi velho", pesoKG: "540", arroba: "18"}})} style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Atualizar Peso</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.withButton}>
          <View>
            <Text style={[styles.h1, { marginTop: 10 }]}>
              Taxa de Crescimento
            </Text>
            <Text style={styles.h2}>10.0%</Text>
          </View>

          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Ver Histórico</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <Text style={[styles.h1, { marginTop: 10 }]}>Ultima Atualização</Text>
        <Text style={styles.h2}>Ultima Atualização em 27/05/2023</Text>
        <View style={styles.divider} />
      </View>
    </View>
  );
};
