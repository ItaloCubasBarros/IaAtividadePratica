import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, Stack } from 'expo-router';

export default function Sucesso() {
  function handleCriarOutro() {
    
    router.replace('/');
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <View style={styles.iconeContainer}>
          <Text style={styles.icone}>✓</Text>
        </View>

        <Text style={styles.titulo}>Cartão criado com sucesso!</Text>

        <Text style={styles.subtitulo}>
          Seu DevCard está pronto. Compartilhe com a comunidade dev!
        </Text>

        <View style={styles.separador} />

        <TouchableOpacity
          style={styles.botao}
          onPress={handleCriarOutro}
          activeOpacity={0.85}
        >
          <Text style={styles.botaoTexto}>Criar outro cartão</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },

  iconeContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#064e3b',
    borderWidth: 3,
    borderColor: '#10b981',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },

  icone: {
    fontSize: 44,
    color: '#10b981',
    fontWeight: '900',
  },

  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f8fafc',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 12,
  },

  subtitulo: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },

  separador: {
    width: 48,
    height: 2,
    backgroundColor: '#334155',
    borderRadius: 1,
    marginBottom: 28,
  },

  infoContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 20,
    gap: 12,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#334155',
  },

  infoTexto: {
    fontSize: 14,
    color: '#94a3b8',
    lineHeight: 20,
  },

  botao: {
    alignSelf: 'stretch',
    backgroundColor: '#38bdf8',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 6,
  },

  botaoTexto: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '700',
  },
});
