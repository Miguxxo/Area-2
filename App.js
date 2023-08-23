import React, {useState} from 'react';

import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

function CaculoArea(){
  const resultado = l1 * l2;
  alert('O total da área é: ' + resultado + 'm²');
}

const [l1, setl1] = useState('');
const [l2, setl2] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Calculo de áreas quadradas ou retangulares em m²
      </Text>



      <TextInput style={styles.input}
      placeholder="Digite a medida em m² do lado menor."
      placeholderTextColor='#FFFF00'
      keyboardType="numeric"
      onChangeText={(l1)=>setl1(l1)}
      />

      <TextInput style={styles.input}
      placeholder="Digite medida em m² do lado maior."
      placeholderTextColor='#FFFF00'
      keyboardType="numeric"
      onChangeText={(l2)=>setl2(l2)}
      />

      <TouchableOpacity style={styles.btn} onPress={CaculoArea}>
      <Text style={styles.textbtn}> Calcular o total da área </Text>
      </TouchableOpacity>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: 'center',
    backgroundColor: '#8E2323',
    padding: 8,
  },
  
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0000FF',
    borderRadius:10,    
    marginBottom: 60,
    padding: 15,
  },
  
  btn:{
    alignItems: 'center',
    backgroundColor: '#0000FF',
    padding: 15,
    borderRadius:10,
    margin: 15,
    marginTop: 50,
  },

  textbtn: {
    fontSize:25,
    color: '#70DB93',
  },

  input: {
    fontSize: 17,
    padding: 20,
    backgroundColor: '#a0c225',
    borderRadius: 10,
    margin: 15,
  }


});

