import React from 'react';
import { ScrollView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

export default function Cadastro({ navigation }) {
    function handleConfirma() {
        navigation.navigate('Login');
    }

    function handleSair() {
        navigation.navigate('Login');
    }

    return (
        <ScrollView
            behavior='padding'
            enable={Platform.OS == 'ios'}
            style={styles.container}>


            <Image source={logo} />
            <TextInput
                placeholder="Nome Completo "
                style={styles.input} />
            <TextInput
                placeholder="Data de Nascimento"
                style={styles.input} />
            <TextInput
                placeholder="Sexo"
                style={styles.input} />
            <TextInput
                placeholder="Nome de usuário "
                style={styles.input} />
            <TextInput
                placeholder="E-mail"
                style={styles.input} />
            <TextInput
                placeholder="Senha"
                style={styles.input} />
            <TextInput
                placeholder="Confirmar Senha"
                style={styles.input} />
            <TextInput
                placeholder="Genêros de Interesse"
                style={styles.input} />

            <TouchableOpacity onPress={handleConfirma} style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPree={handleSair} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AEEDE2',
    },

    input: {
        height: 46,
        width: 300,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        width: 300,
        alignSelf: 'center',
        backgroundColor: '#b3c0d0',
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'Arial'
    }
});
