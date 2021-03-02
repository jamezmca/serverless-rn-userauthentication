import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const Account = () => {
    const [userVal, setUserVal] = useState('');
    const [passVal, setPassVal] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to React-flix!</Text>
            <TextInput 
                value={userVal} 
                onChangeText={e => setUserVal(e)} 
                style={styles.accountInput} 
                placeholder="Username"/>
            <TextInput
                value={passVal} 
                onChangeText={e => setPassVal(e)}
                style={styles.accountInput}
                placeholder="Password"/>
            <View style={{display: "flex", flexDirection: "row", marginTop: 30}}>
                <Button title="Sign In"/>
                <Button title="Sign Up"/>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accountInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '75%',
        margin: 10,
        fontSize: 22,
        textAlign: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 30
    }
});

export default Account;