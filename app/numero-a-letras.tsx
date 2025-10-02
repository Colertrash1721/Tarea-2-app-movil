import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function numeroALetras(n: number): string {
  if (!Number.isInteger(n) || n < 1 || n > 1000) return 'Ingrese un número entre 1 y 1000';
  if (n === 1000) return 'mil';
  const u = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const e10_15 = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince'];
  const dPal = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const cPal: Record<number, string> = {
    100: 'cien', 200: 'doscientos', 300: 'trescientos', 400: 'cuatrocientos',
    500: 'quinientos', 600: 'seiscientos', 700: 'setecientos', 800: 'ochocientos', 900: 'novecientos',
  };
  const tens = (m: number): string => {
    if (m < 10) return u[m];
    if (m <= 15) return e10_15[m - 10];
    if (m < 20) return 'dieci' + u[m - 10];
    if (m === 20) return 'veinte';
    if (m < 30) return 'veinti' + u[m - 20];
    const d = Math.floor(m / 10), r = m % 10;
    return r === 0 ? dPal[d] : `${dPal[d]} y ${u[r]}`;
  };
  if (n < 100) return tens(n);
  const c = Math.floor(n / 100) * 100;
  const r = n % 100;
  if (n === 100) return 'cien';
  if (n > 100 && n < 200) return `ciento ${tens(r)}`;
  return r === 0 ? cPal[c] : `${cPal[c]} ${tens(r)}`;
}

export default function NumeroALetras() {
  const [v, setV] = useState('');
  const n = Number(v);
  const texto = v ? numeroALetras(n) : '—';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Números a Letras (1–1000)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        keyboardType="numeric"
        value={v}
        onChangeText={setV}
      />
      <View style={styles.box}>
        <Text style={styles.result}>{texto}</Text>
      </View>
      <Text style={styles.note}>* Conversión local (sin APIs).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700' },
  input: { borderWidth: 1, borderColor: '#d1d5db', padding: 10, borderRadius: 8 },
  box: { padding: 12, backgroundColor: '#f3f4f6', borderRadius: 8 },
  result: { fontSize: 18, fontWeight: '600' },
  note: { color: '#6b7280' },
});
