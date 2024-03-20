import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import wifiIcon from '../assets/assetsPedro/wifi.png';
import batteryIcon from '../assets/assetsPedro/battery.png';
import sinalIcon from '../assets/assetsPedro/sinal.png';

import galleryIcon from '../assets/assetsPedro/galeria.png';
import searchIcon from '../assets/assetsPedro/lupa.png';
import reloadIcon from '../assets/assetsPedro/recarregar.png';
import addIcon from '../assets/assetsPedro/adicionar.png';

import CowIcon from '../assets/assetsPedro/boi.png';
import DrogsIcon from '../assets/assetsPedro/remedio.png';
import ChainIcon from '../assets/assetsPedro/cerca.png';
import HandsIcon from '../assets/assetsPedro/maos.png'; 
import ProfileIcon from '../assets/assetsPedro/perfil.png';

import image from '../assets/assetsPedro/campos.png'; 

const PastureStatus = ({ name, status, amount }) => {
  const navigation = useNavigation(); 
  const handlePressPasto = () => {
    navigation.navigate('Tela2'); 
  };

  return (
    <TouchableOpacity onPress={handlePressPasto}>
      <View style={styles.pastureContainer}>
        <Text style={styles.pastureName}>{name}</Text>
        <Image source={image} style={styles.image} />
        <Text>status: {status}</Text>
        <Text>Quantidade de Bois: {amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const NavBar = ({ onSearch }) => (
  <View>
    <View style={styles.statusBar}>
      <Image source={wifiIcon} style={styles.statusIcon} />
      <Image source={batteryIcon} style={styles.statusIcon} />
      <Image source={sinalIcon} style={styles.statusIcon} />
    </View>

    <View style={styles.navBar}>
      <Text style={styles.title}>PASTOS</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onSearch}>
          <Image source={searchIcon} style={[styles.icon, styles.smallIcon]} />
        </TouchableOpacity>
        <Image source={addIcon} style={[styles.icon, styles.smallIcon]} />
        <Image source={reloadIcon} style={[styles.icon, styles.smallIcon]} />
        <Image source={galleryIcon} style={[styles.icon, styles.smallIcon]} />
      </View>
    </View>
  </View>
);

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavBar}>
      <Image source={CowIcon} style={styles.bottomNavIcon} />
      <Image source={DrogsIcon} style={styles.bottomNavIcon} />
      <Image source={ChainIcon} style={styles.bottomNavIcon} />
      <TouchableOpacity onPress={() => navigation.navigate('Tela3')}>
        <Image source={HandsIcon} style={styles.bottomNavIcon} />
      </TouchableOpacity>
      <Image source={ProfileIcon} style={styles.bottomNavIcon} />
    </View>
  );
};

const Tela1 = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <View style={styles.container}>
      <NavBar onSearch={toggleSearch} />
      {searchVisible ? (
        <View style={styles.searchContainer}>
          <Text style={styles.searchTitle}>Pesquisar Pasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite aqui para pesquisar"
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.closeButton} onPress={toggleSearch}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <PastureStatus name="Pasto 1" status="Livre a 2 dias" amount="2" /> 
          <PastureStatus name="Pasto 2" status="Ocupado a 7 dias" amount="20" />
          <PastureStatus name="Pasto 3" status="Recuperando a 14 dias" amount="0" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  pastureContainer: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  pastureName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 100,
    borderRadius: 5,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  smallIcon: {
    width: 20,
    height: 20,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  bottomNavIcon: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  searchTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Tela1;
