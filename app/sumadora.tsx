import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Sumadora() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const r = (Number(a) || 0) + (Number(b) || 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumadora</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} keyboardType="numeric" value={a} onChangeText={setA} placeholder="Primer número" />
        <Text style={styles.op}>+</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={b} onChangeText={setB} placeholder="Segundo número" />
        <Text style={styles.op}>=</Text>
        <Text style={styles.result}>{r}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  input: { borderWidth: 1, borderColor: '#d1d5db', padding: 8, borderRadius: 8, width: 120 },
  op: { fontSize: 20, fontWeight: '700' },
  result: { fontSize: 22, fontWeight: '700', minWidth: 60 },
});
