import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Account from '../components/Account';


const Router = () => {
    const isUserSignedIn = () => false;

    return (
        isUserSignedIn() ?
            <Text>Congrats! You're signed in.</Text>
            :
            <Account/>
    );
};

const styles = StyleSheet.create({

});

export default Router;