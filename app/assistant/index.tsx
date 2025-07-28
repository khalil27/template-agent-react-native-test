import React from 'react';
import { Platform } from 'react-native';

// Platform-specific imports
const AssistantScreenNative = Platform.OS !== 'web' 
  ? require('./AssistantScreenNative').default 
  : null;

const AssistantScreenWeb = Platform.OS === 'web' 
  ? require('./AssistantScreenWeb').default 
  : null;

export default function AssistantScreen() {
  if (Platform.OS === 'web') {
    return <AssistantScreenWeb />;
  } else {
    return <AssistantScreenNative />;
  }
}