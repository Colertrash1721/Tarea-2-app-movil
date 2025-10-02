import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos Personales</Text>
      <View style={styles.card}>
        <Image
          source={require('../assets/images/foto-2x2.jpg')}
          style={styles.foto}
          resizeMode="cover"
        />
        <View style={{ gap: 6 }}>
          <Text style={styles.label}><Text style={styles.bold}>Nombre:</Text> Steven Robinson</Text>
          <Text style={styles.label}><Text style={styles.bold}>Apellido:</Text> Cruz Andujar</Text>
          <Text style={styles.label}><Text style={styles.bold}>Correo:</Text> stevenrobinsoncruz3@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700' },
  card: { flexDirection: 'row', gap: 16, alignItems: 'center', backgroundColor: '#f3f4f6', padding: 12, borderRadius: 12 },
  foto: { width: 120, height: 120, borderRadius: 8, backgroundColor: '#e5e7eb' },
  label: { fontSize: 16 },
  bold: { fontWeight: '700' },
  muted: { color: '#6b7280' },
  code: { fontFamily: 'monospace' },
});
