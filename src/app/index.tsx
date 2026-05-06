import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, Stack } from 'expo-router';

export default function Index() {
  function handleCriarCartao() {
    router.push('/cadastro');
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{'</>'}</Text>
        </View>

        <Text style={styles.titulo}>DevCard</Text>

        <Text style={styles.subtitulo}>
          Seu cartão de visita digital de desenvolvaadsdsdsedor mobile
        </Text>

        <View style={styles.separador} />

        <TouchableOpacity
          style={styles.botao}
          onPress={handleCriarCartao}
          activeOpacity={0.85}
        >
          <Text style={styles.botaoTexto}>Criar meu cartão</Text>

        </TouchableOpacity>

        <Text style={styles.subtitulos}>
          Aplicações Móveis: Aula 7.
        </Text>
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

  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: 24,
    backgroundColor: '#1e3a5f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#334155',
  },

  icon: {
    fontSize: 32,
    color: '#38bdf8',
    fontWeight: 'bold',
  },

  titulo: {
    fontSize: 48,
    fontWeight: '800',
    color: '#f8fafc',
    letterSpacing: -1,
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },

  subtitulos: {
    fontSize: 14,
    color: '#ffffff',
    
    lineHeight: 22,
    
  },

  separador: {
    width: 48,
    height: 3,
    backgroundColor: '#38bdf8',
    borderRadius: 2,
    marginBottom: 24,
  },

  descricao: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 48,
  },

  botao: {
    backgroundColor: '#38bdf8',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    elevation: 6,
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
