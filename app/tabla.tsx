import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Tabla() {
  const [nStr, setNStr] = useState('');
  const n = Number(nStr);
  const filas = Number.isInteger(n) ? Array.from({ length: 13 }, (_, i) => i + 1) : [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Multiplicar (hasta 13)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número entero"
        keyboardType="numeric"
        value={nStr}
        onChangeText={setNStr}
      />
      <View style={styles.table}>
        {filas.map((i) => (
          <Text key={i} style={styles.row}>
            {n} × {i} = <Text style={styles.bold}>{n * i}</Text>
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700' },
  input: { borderWidth: 1, borderColor: '#d1d5db', padding: 10, borderRadius: 8 },
  table: { marginTop: 8, gap: 8 },
  row: { fontSize: 18 },
  bold: { fontWeight: '700' },
});
