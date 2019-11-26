import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import harry from '../assets/harry.jpg';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';


export default function Main({ navigation }) {
  function handleLike() {
    navigation.navigate('Main');
  }

  function handleDislike() {
    navigation.navigate('Main');
  }

  function handleSair() {
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView
      style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image style={styles.foto} source={harry} />
            <View style={styles.footer}>
              <Text style={styles.name}>Harry Potter e a Pedra Filosofal</Text>
              <Text style={styles.bio}>Conheça Harry, filho de Tiago e Lílian Potter, feiticeiros que foram assassinados por um poderosíssimo bruxo, quando ele ainda era um bebê. Com isso, o menino acaba sendo levado para a casa dos tios que nada tinham a ver com o sobrenatural pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais, o terrível Lorde das Trevas.</Text>
            </View>
            <View style={styles.like}>
            <ScrollView horizontal={true}>
            <TouchableOpacity onPress={handleDislike} style={styles.button2}>
                <Image style={styles.botao} source={dislike} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLike} style={styles.button2}>
                <Image style={styles.botao} source={like} />
            </TouchableOpacity>
            </ScrollView>
            </View>
            <TouchableOpacity onPress={handleSair} style={styles.button}>
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEEDE2',
    justifyContent: 'space-between',
  },

  foto: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },

  botao: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },

  name: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
    alignItems: 'center',
  },

  bio: {
    fontSize: 17,
    alignSelf: 'center',
  },

  foto2: {
    height: 110,
    width: 100,
  },

  button: {
    height: 46,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#5DBCD2',
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button2: {
    height: 56,
    width: 80,
    alignSelf: 'center',
    backgroundColor: '#5DBCD2',
    borderRadius: 20,
    marginTop: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },


  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },

  livros: {
    fontSize: 20,
    marginTop: 10,
  },

  like:{
    alignItems: 'center',
  }
});
