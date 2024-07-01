import React from 'react';
import { ScrollView } from 'react-native';
import Contact from './components/kontak.js';
// Pastikan untuk memeriksa nama file Home.js dan about.js, seharusnya konsisten dengan huruf kecil/kapital

function ContactList() {
  return (
    <ScrollView>
      <Contact 
        gambar={require('./assets/alwi.jpg')}
        judul="Alwi"
        telpon="083811939105"
        alamat="Jl. Merpati No. 5"
        tanggalLahir="1990-01-01"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/entin.jpg')}
        judul="Wahyu Prayogo"
        telpon="081222535789"
        alamat="Jl. Kenari No. 10"
        tanggalLahir="1985-02-14"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image2.png')}
        judul="Ikhsan Muttaqin"
        telpon="081222535789"
        alamat="Jl. Kamboja No. 3"
        tanggalLahir="1992-03-22"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image3.png')}
        judul="Mochamad Zhaldy Fahrezy"
        telpon="081222535789"
        alamat="Jl. Mawar No. 7"
        tanggalLahir="1991-04-18"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image4.png')}
        judul="Ubang"
        telpon="081222535789"
        alamat="Jl. Anggrek No. 9"
        tanggalLahir="1988-05-05"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image5.png')}
        judul="Ilham Mukjizat"
        telpon="081222535789"
        alamat="Jl. Melati No. 12"
        tanggalLahir="1993-06-12"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image6.png')}
        judul="Fazar Pasca Gumilang"
        telpon="081222535789"
        alamat="Jl. Teratai No. 15"
        tanggalLahir="1989-07-20"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image7.png')}
        judul="Rafli Zacky Aridyasa"
        telpon="081222535789"
        alamat="Jl. Daffodil No. 18"
        tanggalLahir="1994-08-25"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image8.jpg')}
        judul="Naufal Zacky Arditya"
        telpon="081222535789"
        alamat="Jl. Anggrek No. 21"
        tanggalLahir="1995-09-30"
        jenisKelamin="Laki-laki"
      />
      <Contact 
        gambar={require('./assets/image9.jpg')}
        judul="Wahyu Prayogo"
        telpon="081222535789"
        alamat="Jl. Kamboja No. 23"
        tanggalLahir="1987-10-12"
        jenisKelamin="Laki-laki"
      />
    </ScrollView>
  );
}

export default function App() {
  return <ContactList />;
}
