import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

// Lazy load platform-specific components
const AssistantScreenWeb = React.lazy(() => import('./AssistantScreenWeb'));
const AssistantScreenNative = Platform.OS !== 'web' 
  ? React.lazy(() => import('./AssistantScreenNative'))
  : null;

// Loading fallback component
function LoadingFallback() {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

export default function AssistantScreen() {
  if (Platform.OS === 'web') {
    return (
      <React.Suspense fallback={<LoadingFallback />}>
        <AssistantScreenWeb />
      </React.Suspense>
    );
  } else {
    return (
      <React.Suspense fallback={<LoadingFallback />}>
        <AssistantScreenNative />
      </React.Suspense>
    );
  }