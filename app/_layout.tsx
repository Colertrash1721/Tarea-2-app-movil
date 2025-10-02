import 'react-native-gesture-handler';
import React from 'react';
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

export default function RootLayout() {
  const [loaded] = useFonts({});

  return (
    // Drawer controla el menú lateral; cada <Drawer.Screen> apunta a un archivo .tsx dentro de app/
    <Drawer
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        name="index"
        options={{ title: 'Página Inicial' }}
      />
      <Drawer.Screen
        name="sumadora"
        options={{ title: 'Sumadora' }}
      />
      <Drawer.Screen
        name="numero-a-letras"
        options={{ title: 'Números a Letras' }}
      />
      <Drawer.Screen
        name="tabla"
        options={{ title: 'Tabla de Multiplicar' }}
      />
      <Drawer.Screen
        name="experiencia"
        options={{ title: 'Experiencia' }}
      />
      {/* Si no usarás las tabs de la plantilla, puedes borrar la carpeta (tabs) */}
    </Drawer>
  );
}
