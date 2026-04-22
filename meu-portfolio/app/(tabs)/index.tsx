import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function HomeScreen() {
  const openWhatsApp = () => {
    // Funcionalidade Extra: Abrir WhatsApp direto
    Linking.openURL('https://wa.me/5581993176138?text=Olá Bárbara, vi seu portfólio!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Bárbara Luiza Oliveira</Text>
        <Text style={styles.title}>Desenvolvedora Full Stack</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.bio}>
          Sólida experiência em Java, JavaScript e Python. Atuando na sustentação de sistemas críticos com Spring Boot e Angular.
        </Text>
      </View>

      {/* Botão de WhatsApp como Funcionalidade Extra */}
      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>Fale Comigo no WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A192F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#64FFDA',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    color: '#CCD6F6',
    marginTop: 5,
  },
  content: {
    backgroundColor: '#112240',
    padding: 20,
    borderRadius: 12,
    marginBottom: 40,
  },
  bio: {
    color: '#8892B0',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#64FFDA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#0A192F',
    fontWeight: 'bold',
    fontSize: 16,
  },
});