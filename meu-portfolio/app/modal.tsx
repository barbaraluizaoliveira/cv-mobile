import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import api from '../../meu-portfolio/src/services/api';

interface Pessoa {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  linkedin: string;
}

export default function ModalScreen() {
  const [dados, setDados] = useState<Pessoa | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/pessoas/6')
      .then(response => {
        setDados(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#64FFDA" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Sobre o Desenvolvedor</Text>
        
        <View style={styles.infoCard}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{dados?.nome}</Text>

          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>{dados?.email}</Text>

          <Text style={styles.label}>LinkedIn</Text>
          <Text style={styles.value}>{dados?.linkedin}</Text>
        </View>

        <View style={styles.techCard}>
          <Text style={styles.techTitle}>Stack Tecnológica</Text>
          <Text style={styles.techText}>• Backend: Java (Spring Boot), Node.js, Python</Text>
          <Text style={styles.techText}>• Frontend: Angular, React Native, Expo</Text>
          <Text style={styles.techText}>• Banco de Dados: PostgreSQL, Oracle (PL/SQL)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A192F',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A192F',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#CCD6F6',
    marginBottom: 25,
  },
  infoCard: {
    backgroundColor: '#112240',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    color: '#64FFDA',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  value: {
    color: '#8892B0',
    fontSize: 16,
    marginBottom: 16,
  },
  techCard: {
    backgroundColor: '#172A45',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#233554',
  },
  techTitle: {
    color: '#CCD6F6',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  techText: {
    color: '#8892B0',
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 4,
  },
});