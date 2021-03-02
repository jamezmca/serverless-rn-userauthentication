import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Router from './components/Router';
import ebconfig from "./ebconfig"
import { EasybaseProvider, useEasybase } from "easybase-react"

export default function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Router />
    </EasybaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
