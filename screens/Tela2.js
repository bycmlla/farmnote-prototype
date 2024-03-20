import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PastureForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [isBoi1Selected, setIsBoi1Selected] = useState(false);
  const [isBoi2Selected, setIsBoi2Selected] = useState(false);
  const [isBoi3Selected, setIsBoi3Selected] = useState(false);

  const handleBoi1Select = () => {
    setIsBoi1Selected(!isBoi1Selected);
  };

  const handleBoi2Select = () => {
    setIsBoi2Selected(!isBoi2Selected);
  };

  const handleBoi3Select = () => {
    setIsBoi3Selected(!isBoi3Selected);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Pastos</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nome do Pasto"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={status}
          onChangeText={setStatus}
          placeholder="Status"
        />
      </View>

      <Text style={styles.subtitle}>Selecionar Bois</Text>

      <TouchableOpacity onPress={handleBoi1Select} style={styles.boiContainer}>
        <Text style={styles.boiText}>Boi 01</Text>
        <Text style={styles.boiInfo}>300KG | 10.@ 0,0%</Text>
        <View style={[styles.selectionIndicator, isBoi1Selected && styles.selected]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBoi2Select} style={styles.boiContainer}>
        <Text style={styles.boiText}>Boi 02</Text>
        <Text style={styles.boiInfo}>400KG | 140.@ 15,0%</Text>
        <View style={[styles.selectionIndicator, isBoi2Selected && styles.selected]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBoi3Select} style={styles.boiContainer}>
        <Text style={styles.boiText}>Boi 03</Text>
        <Text style={styles.boiInfo}>540KG | 80.@ 10,0%</Text>
        <View style={[styles.selectionIndicator, isBoi3Selected && styles.selected]} />
      </TouchableOpacity>

      <Text style={styles.subtitle}>Selecionar Imagem</Text>
      <Image source={require('../assets/assetsPedro/camera.png')} style={styles.imageIcon} />

      <View style={styles.navBar}>
        <Text style={styles.confirmText}>CONFIRMAR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  boiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  boiText: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  boiInfo: {
    flex: 1,
  },
  selectionIndicator: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  selected: {
    backgroundColor: 'green',
  },
  imageIcon: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '110%',
    backgroundColor: '#00BF2A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PastureForm;
