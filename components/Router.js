import { useEasybase } from 'easybase-react';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Account from '../components/Account';


const Router = () => {
    const { isUserSignedIn, signOut } = () => useEasybase();

    return (
        isUserSignedIn() ?
            <View style={styles.container}>
                <Text>Congrats! You're signed in.</Text>
                <Button title="Sign Out" onPress={signOut} />
            </View>
            :
            <Account />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Router;