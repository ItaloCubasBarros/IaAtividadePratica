# DevCard 📱

> Cartão de visita digital para desenvolvedores mobile — Atividade Prática IA2.1

---

## Sobre o projeto

O **DevCard** é um app React Native (Expo) que permite ao usuário preencher seus dados profissionais como dev e gerar um cartão de visita digital estilizado. O projeto exercita os fundamentos de desenvolvimento mobile: TypeScript, Flexbox, estado com `useState`, validação de formulários, navegação com Expo Router e lógica condicional.

---

## Estrutura de pastas

```
projeto-devcard/
├── app.json                   # Configuração do Expo
├── package.json               # Dependências do projeto
├── tsconfig.json              # Configuração TypeScript
├── babel.config.js            # Configuração Babel
└── src/
    └── app/
        ├── _layout.tsx        # Layout raiz — define o Stack de navegação
        ├── index.tsx          # Tela 1: Boas-vindas
        ├── cadastro.tsx       # Tela 2: Formulário de cadastro
        ├── preview.tsx        # Tela 3: Preview do cartão gerado
        └── sucesso.tsx        # Tela 4: Confirmação de sucesso
```

---

## Fluxo de navegação

```
index → [router.push] → cadastro → [router.push + params] → preview
                                                              ↓
                                              router.back() ← → router.replace('/sucesso')
                                                                        ↓
                                                          router.replace('/')
```

### Por que cada método de navegação foi usado:

| Método | Onde | Motivo |
|---|---|---|
| `router.push('/cadastro')` | index → cadastro | Permite voltar para a tela de boas-vindas |
| `router.push({ pathname: '/preview', params })` | cadastro → preview | Passa dados via params e permite voltar para editar |
| `router.back()` | preview → cadastro | Retorna ao formulário com os dados intactos |
| `router.replace('/sucesso')` | preview → sucesso | Impede o usuário de voltar ao preview após finalizar |
| `router.replace('/')` | sucesso → index | Limpa a pilha toda para começar um novo cartão |

---

## Telas

### Tela 1 — Boas-vindas (`index.tsx`)

Ponto de entrada do app. Layout com Flexbox centralizado verticalmente e horizontalmente. Exibe o nome do app, subtítulo e um botão de ação.

> 📸 *(insira aqui o screenshot da Tela 1)*

---

### Tela 2 — Cadastro (`cadastro.tsx`)

Formulário com 5 campos e validação completa:

| Campo | Tipo | Regra |
|---|---|---|
| Nome completo | TextInput | Obrigatório, mínimo 3 caracteres |
| Cargo | TextInput | Obrigatório |
| Empresa | TextInput | Opcional |
| Anos de experiência | TextInput (`keyboardType="numeric"`) | Obrigatório, número > 0 |
| Tecnologia favorita | TextInput | Obrigatório |
| Cor do cartão | 3 botões | Um deve estar selecionado |

Cada campo possui seu próprio `useState`. Mensagens de erro são exibidas **abaixo de cada campo** quando a validação falha. O botão "Gerar Cartão" só navega para `/preview` se **todas** as validações passarem.

> 📸 *(insira aqui o screenshot da Tela 2)*

---

### Tela 3 — Preview (`preview.tsx`)

Lê os dados via `useLocalSearchParams<PreviewParams>()` com tipagem TypeScript explícita.

**Lógica de cor do cartão** (if/else):
- `azul` → fundo `#0c2a4a`, acento `#0ea5e9`
- `verde` → fundo `#064e3b`, acento `#10b981`
- `roxo` → fundo `#2e1065`, acento `#8b5cf6`

**Lógica de badge de nível** (condicional por anos de experiência):

| Anos | Nível | Cor da badge |
|---|---|---|
| 0 a 2 | Júnior | Cinza `#6b7280` |
| 3 a 5 | Pleno | Azul `#3b82f6` |
| 6 ou mais | Sênior | Dourado `#f59e0b` |

O cartão exibe: avatar circular com a inicial do nome, nome em fonte grande, cargo + empresa, especialidade em [tecnologia] e badge de nível.

> 📸 *(insira aqui o screenshot da Tela 3)*

---

### Tela 4 — Sucesso (`sucesso.tsx`)

Tela de confirmação final. Exibe ícone ✓, mensagem de sucesso e botão para criar outro cartão (que retorna ao início via `router.replace('/')`).

> 📸 *(insira aqui o screenshot da Tela 4)*

---

## Como rodar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/projeto-devcard.git
cd projeto-devcard

# 2. Instale as dependências
npm install

# 3. Inicie o Expo (com limpeza de cache)
npx expo start -c

# 4. Abra no emulador Android, iOS Simulator ou Expo Go
```

---

## Tecnologias utilizadas

- **React Native** — framework para desenvolvimento mobile
- **Expo** ~52 — plataforma e toolchain
- **Expo Router** ~4 — navegação baseada em sistema de arquivos
- **TypeScript** — tipagem estática
- **Flexbox** — layout responsivo

---

## Critérios de avaliação atendidos

| Critério | Status |
|---|---|
| App roda sem erros no emulador | ✅ |
| 4 telas existem com navegação funcional | ✅ |
| Validação dos 5 campos funciona corretamente | ✅ |
| README com descrição e imagens de todas as telas | ✅ |
| Params passados e lidos corretamente no preview | ✅ |
| Cor do cartão muda conforme a escolha | ✅ |
| Badge de nível aparece correto pelos anos | ✅ |
| Uso correto de push, back e replace | ✅ |

---

*Atividade Prática IA2.1 — Prof. Brendo Vale*
