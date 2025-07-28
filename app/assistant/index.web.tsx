import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function AssistantScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Voice Assistant</Text>
        <Text style={styles.subtitle}>Web Preview Mode</Text>
        <Text style={styles.description}>
          The voice assistant requires native functionality that's not available in the web preview.
          To test the full voice assistant experience, please run this app on iOS or Android.
        </Text>
        
        <View style={styles.featureList}>
          <Text style={styles.featureTitle}>Features available on mobile:</Text>
          <Text style={styles.feature}>• Real-time voice conversation</Text>
          <Text style={styles.feature}>• Live audio transcription</Text>
          <Text style={styles.feature}>• Voice activity visualization</Text>
          <Text style={styles.feature}>• Microphone controls</Text>
        </View>

        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    maxWidth: 400,
  },
  featureList: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  feature: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  backButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});