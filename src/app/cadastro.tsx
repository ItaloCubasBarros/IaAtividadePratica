import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router, Stack } from 'expo-router';

type CorCartao = 'azul' | 'verde' | 'roxo';

const opcoesCor: { valor: CorCartao; rotulo: string; hex: string }[] = [
  { valor: 'azul', rotulo: 'Azul', hex: '#0ea5e9' },
  { valor: 'verde', rotulo: 'Verde', hex: '#10b981' },
  { valor: 'roxo', rotulo: 'Roxo', hex: '#8b5cf6' },
];
export default function Cadastro() {
  const [nome, setNome] = useState<string>('');
  const [cargo, setCargo] = useState<string>('');
  const [empresa, setEmpresa] = useState<string>('');
  const [anos, setAnos] = useState<string>('');
  const [tecnologia, setTecnologia] = useState<string>('');
  const [cor, setCor] = useState<CorCartao>('azul');

  const [erroNome, setErroNome] = useState<string>('');
  const [erroCargo, setErroCargo] = useState<string>('');
  const [erroAnos, setErroAnos] = useState<string>('');
  const [erroTecnologia, setErroTecnologia] = useState<string>('');


  function validarFormulario(): boolean {
    let formularioValido = true;

    if (nome.trim().length < 3) {
      setErroNome('Nome deve ter pelo menos 3 caracteres.');
      formularioValido = false;
    } else {
      setErroNome('');
    }

    if (cargo.trim().length === 0) {
      setErroCargo('Cargo é obrigatório.');
      formularioValido = false;
    } else {
      setErroCargo('');
    }

    const anosNum = Number(anos);
    if (anos.trim() === '' || isNaN(anosNum) || anosNum <= 0) {
      setErroAnos('Informe um número de anos válido (maior que 0).');
      formularioValido = false;
    } else {
      setErroAnos('');
    }

    if (tecnologia.trim().length === 0) {
      setErroTecnologia('Tecnologia favorita é obrigatória.');
      formularioValido = false;
    } else {
      setErroTecnologia('');
    }

    return formularioValido;
  }

  function handleGerarCartao() {
    const valido = validarFormulario();

    if (!valido) {
      return;
    }

    router.push({
      pathname: '/preview',
      params: {
        nome: nome.trim(),
        cargo: cargo.trim(),
        empresa: empresa.trim(),
        anos: anos.trim(),
        tecnologia: tecnologia.trim(),
        cor,
      },
    });
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Seus dados', headerBackTitle: 'Voltar' }} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.secaoTitulo}>Digite as suas Informações profissionais</Text>

        <View style={styles.campoContainer}>
          <Text style={styles.label}>
            Nome completo <Text style={styles.obrigatorio}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, erroNome ? styles.inputErro : null]}
            placeholder="Ex: Ana Souza"
            placeholderTextColor="#475569"
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words"
            maxLength={60}
          />
          {erroNome !== '' && <Text style={styles.textoErro}>{erroNome}</Text>}
        </View>

        <View style={styles.campoContainer}>
          <Text style={styles.label}>
            Cargo <Text style={styles.obrigatorio}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, erroCargo ? styles.inputErro : null]}
            placeholder="Ex: Desenvolvedora Mobile"
            placeholderTextColor="#475569"
            value={cargo}
            onChangeText={setCargo}
            autoCapitalize="words"
            maxLength={60}
          />
          {erroCargo !== '' && <Text style={styles.textoErro}>{erroCargo}</Text>}
        </View>

        <View style={styles.campoContainer}>
          <Text style={styles.label}>
            Empresa <Text style={styles.opcional}>(opcional)</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: TechCorp"
            placeholderTextColor="#475569"
            value={empresa}
            onChangeText={setEmpresa}
            autoCapitalize="words"
            maxLength={60}
          />
        </View>

        <View style={styles.campoContainer}>
          <Text style={styles.label}>
            Anos de experiência <Text style={styles.obrigatorio}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, erroAnos ? styles.inputErro : null]}
            placeholder="Ex: 3"
            placeholderTextColor="#475569"
            value={anos}
            onChangeText={setAnos}
            keyboardType="numeric"
            maxLength={2}
          />
          {erroAnos !== '' && <Text style={styles.textoErro}>{erroAnos}</Text>}
        </View>

        <View style={styles.campoContainer}>
          <Text style={styles.label}>
            Tecnologia favorita <Text style={styles.obrigatorio}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, erroTecnologia ? styles.inputErro : null]}
            placeholder="Ex: React Native"
            placeholderTextColor="#475569"
            value={tecnologia}
            onChangeText={setTecnologia}
            maxLength={40}
          />
          {erroTecnologia !== '' && (
            <Text style={styles.textoErro}>{erroTecnologia}</Text>
          )}
        </View>

        <View style={styles.campoContainer}>
          <Text style={styles.label}>Cor do cartão</Text>
          <View style={styles.coresContainer}>
            {opcoesCor.map((opcao) => {
              const selecionada = cor === opcao.valor;
              return (
                <TouchableOpacity
                  key={opcao.valor}
                  style={[
                    styles.botaoCor,
                    { borderColor: opcao.hex },
                    selecionada && { backgroundColor: opcao.hex },
                  ]}
                  onPress={() => setCor(opcao.valor)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.botaoCorTexto,
                      selecionada && styles.botaoCorTextoSelecionado,
                    ]}
                  >
                    {opcao.rotulo}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity
          style={styles.botaoGerar}
          onPress={handleGerarCartao}
          activeOpacity={0.85}
        >
          <Text style={styles.botaoGerarTexto}>Gerar Cartão</Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
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
    paddingBottom: 16,
  },

  secaoTitulo: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 20,
  },

  campoContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 8,
  },

  obrigatorio: {
    color: '#f87171',
  },

  opcional: {
    color: '#475569',
    fontWeight: '400',
  },

  input: {
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#f8fafc',
  },
  inputErro: {
    borderColor: '#f87171',
  },

  textoErro: {
    marginTop: 6,
    fontSize: 12,
    color: '#f87171',
    lineHeight: 16,
  },

  coresContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  botaoCor: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },

  botaoCorTexto: {
    fontSize: 14,
    fontWeight: '600',
    color: '#94a3b8',
  },

  botaoCorTextoSelecionado: {
    color: '#0f172a',
  },

  botaoGerar: {
    backgroundColor: '#38bdf8',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    elevation: 6,
  },

  botaoGerarTexto: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '700',
  },
});
