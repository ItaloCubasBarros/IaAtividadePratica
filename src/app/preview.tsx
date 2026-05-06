import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, Stack, useLocalSearchParams } from 'expo-router';


type PreviewParams = {
  nome: string;
  cargo: string;
  empresa: string;
  anos: string;
  tecnologia: string;
  cor: 'azul' | 'verde' | 'roxo';
};


function obterCorFundo(cor: string): string {
  if (cor === 'verde') {
    return '#064e3b';
  } else if (cor === 'roxo') {
    return '#2e1065';
  } else {
    return '#0c2a4a';
  }
}


function obterCorAcento(cor: string): string {
  if (cor === 'verde') {
    return '#10b981';
  } else if (cor === 'roxo') {
    return '#8b5cf6';
  } else {
    return '#0ea5e9';
  }
}

function calcularNivel(anos: number): { rotulo: string; cor: string } {
  if (anos <= 2) {
    return { rotulo: 'Júnior', cor: '#8d94a1' };
  } else if (anos <= 5) {
    return { rotulo: 'Pleno', cor: '#3b82f6' };
  } else {
    return { rotulo: 'Sênior', cor: '#f59e0b' };
  }
}


export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } =
    useLocalSearchParams<PreviewParams>();

  const anosNum = Number(anos);

  const corFundo = obterCorFundo(cor);
  const corAcento = obterCorAcento(cor);

  const nivel = calcularNivel(anosNum);

  const inicialNome = nome ? nome.charAt(0).toUpperCase() : '?';

  function handleEditar() {
    router.back();
  }

  function handleFinalizar() {
    router.replace('/sucesso');
  }

  return (
    <>
      <Stack.Screen
        options={{ title: 'Seu DevCard', headerBackTitle: 'Voltar' }}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.secaoTitulo}>Prévia do seu cartão</Text>

        <View style={[styles.cartao, { backgroundColor: corFundo }]}>
          <View style={[styles.cartaoLinhaTop, { backgroundColor: corAcento }]} />

          <View style={styles.cartaoCabecalho}>
            <View
              style={[styles.avatar, { backgroundColor: corAcento }]}
            >
              <Text style={styles.avatarTexto}>{inicialNome}</Text>
            </View>

            <View
              style={[styles.badge, { backgroundColor: nivel.cor + '33' }]}
            >
              <View
                style={[styles.badgePonto, { backgroundColor: nivel.cor }]}
              />
              <Text style={[styles.badgeTexto, { color: nivel.cor }]}>
                {nivel.rotulo}
              </Text>
            </View>
          </View>

          <Text style={styles.cartaoNome}>{nome}</Text>

          <Text style={styles.cartaoCargo}>
            {cargo}
            {empresa ? ` · ${empresa}` : ''}
          </Text>

          <View style={[styles.divisor, { backgroundColor: corAcento + '40' }]} />

          <Text style={styles.cartaoEspecialidade}>
            Especialista em{' '}
            <Text style={{ color: corAcento, fontWeight: '700' }}>
              {tecnologia}
            </Text>
          </Text>

          <Text style={styles.cartaoExperiencia}>
            {anosNum} {anosNum === 1 ? 'ano' : 'anos'} de experiência
          </Text>
        </View>

        <View style={styles.acoesContainer}>
          <TouchableOpacity
            style={styles.botaoEditar}
            onPress={handleEditar}
            activeOpacity={0.8}
          >
            <Text style={styles.botaoEditarTexto}>Editar dados</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoFinalizar}
            onPress={handleFinalizar}
            activeOpacity={0.85}
          >
            <Text style={styles.botaoFinalizarTexto}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },

  secaoTitulo: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 20,
  },

  cartao: {
    borderRadius: 20,
    overflow: 'hidden',
    padding: 24,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },

  cartaoLinhaTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
  },

  cartaoCabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 8,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarTexto: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },

  badgePonto: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  badgeTexto: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  cartaoNome: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 6,
    letterSpacing: -0.5,
  },

  cartaoCargo: {
    fontSize: 15,
    color: '#94a3b8',
    marginBottom: 20,
  },

  divisor: {
    height: 1,
    marginBottom: 16,
  },

  cartaoEspecialidade: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 6,
  },

  cartaoExperiencia: {
    fontSize: 13,
    color: '#ffffff',
  },

  acoesContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  botaoEditar: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    backgroundColor: '#1e293b',
    alignItems: 'center',
  },

  botaoEditarTexto: {
    color: '#94a3b8',
    fontSize: 15,
    fontWeight: '600',
  },

  botaoFinalizar: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#38bdf8',
    alignItems: 'center',
    elevation: 6,
  },

  botaoFinalizarTexto: {
    color: '#0f172a',
    fontSize: 15,
    fontWeight: '700',
  },
});
