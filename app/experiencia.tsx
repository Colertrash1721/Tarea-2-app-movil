import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YT_VIDEO_ID = 'FCoVB_aUBl0';

export default function Experiencia() {
  const playerRef = useRef<any>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiencia Personal</Text>
      <Text style={styles.note}>
        Explica tu experiencia realizando la tarea. El video no debe exceder 5 minutos.
      </Text>
      <View style={styles.video}>
        <YoutubePlayer ref={playerRef} height={520} play={false} videoId={YT_VIDEO_ID} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700' },
  note: { color: '#374151' },
  video: { borderRadius: 12, overflow: 'hidden', backgroundColor: '#000' },
  mini: { color: '#6b7280' },
});
