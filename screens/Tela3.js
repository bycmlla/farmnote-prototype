import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


import CowIcon from '../assets/assetsPedro/boi.png';
import DrogsIcon from '../assets/assetsPedro/remedio.png';
import ChainIcon from '../assets/assetsPedro/cerca.png';
import HandsIcon from '../assets/assetsPedro/maos.png';
import ProfileIcon from '../assets/assetsPedro/perfil.png';

const Tela3 = () => {
  const navigation = useNavigation(); 

  const [modoCompra, setModoCompra] = useState(true);

  const handleToggleModoCompra = () => {
    setModoCompra(!modoCompra);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra e Venda</Text>

      <View style={styles.modeContainer}>
        <TouchableOpacity
          onPress={handleToggleModoCompra}
          style={[styles.modeButton, modoCompra && styles.selectedMode]}
        >
          <Text style={styles.modeButtonText}>Compra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => !modoCompra && handleToggleModoCompra()}
          style={[styles.modeButton, !modoCompra && styles.selectedMode]}
        >
          <Text style={styles.modeButtonText}>Vender</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoRowContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Peso Total (KG)</Text>
          <Text style={styles.infoValue}>720.0</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Peso Médio</Text>
          <Text style={styles.infoValue}>24.0</Text>
        </View>
      </View>

      <View style={styles.infoRowContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Valor da Arroba(KG)</Text>
          <Text style={styles.infoValue}>30</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Preço do Arroba(R$)</Text>
          <Text style={styles.infoValue}>290</Text>
        </View>
      </View>

      <Text style={styles.subTitle}>Peso Médio</Text>

      <View style={styles.infoRowContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}> 360.0 KG</Text>
          <Text style={styles.infoTitle}> 12 @</Text>
        </View>
      </View>
      <Text style={styles.subTitle}>Valor</Text>

      <View style={styles.infoRowContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}> R$ 6.960</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modeButton: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  },
  selectedMode: {
    backgroundColor: 'green',
  },
  modeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tela3;
