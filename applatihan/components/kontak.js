import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

export default function Contact(props) {
  const showDetails = () => {
    Alert.alert(
      'Detail Kontak',
      `Nama: ${props.judul}\nTelpon: ${props.telpon}\nAlamat: ${props.alamat}\nTanggal Lahir: ${props.tanggalLahir}\nJenis Kelamin: ${props.jenisKelamin}`
    );
  };

  return (
    <View style={styles.container}>
      <Image source={props.gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{props.judul}</Text>
        <Text style={styles.telp}>{props.telpon}</Text>
        <Text style={styles.detail}>{props.alamat}</Text>
        <Text style={styles.detail}>{props.tanggalLahir}</Text>
        <Text style={styles.detail}>{props.jenisKelamin}</Text>
      </View>
      <Button title="Details" onPress={showDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
  detail: {
    fontSize: 12,
    color: '#2c3e50',
  },
});
