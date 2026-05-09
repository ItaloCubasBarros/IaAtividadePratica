DevCard 📱

> Cartão de visita digital para desenvolvedores mobile — Atividade Prática IA2.1 Brando Vale.



## Sobre o projeto

O **DevCard** é um app React Native (Expo) que permite ao usuário preencher seus dados profissionais como dev e gerar um cartão de visita digital estilizado. O projeto exercita os fundamentos de desenvolvimento mobile: TypeScript, Flexbox, estado com `useState`, validação de formulários, navegação com Expo Router e lógica condicional.


Imagens do Aplicativo:
<img width="770" height="1600" alt="WhatsApp Image 2026-05-08 at 21 37 18" src="https://github.com/user-attachments/assets/b789025f-ea9b-47d1-8a81-fa3f7096bd95" />
<img width="778" height="1600" alt="WhatsApp Image 2026-05-08 at 21 37 19" src="https://github.com/user-attachments/assets/321ad53a-d523-4ced-bf1c-0c0715a53668" />
<img width="786" height="1600" alt="WhatsApp Image 2026-05-08 at 21 37 19 (1)" src="https://github.com/user-attachments/assets/ca260853-ed3a-4ca5-87d5-5336a08166e7" />
<img width="792" height="1600" alt="WhatsApp Image 2026-05-08 at 21 37 19 (2)" src="https://github.com/user-attachments/assets/c9126004-6a9e-4cb7-a858-9bf5f26b2e7d" />


| Método | Onde | Motivo |
|---|---|---|
| `router.push('/cadastro')` | index → cadastro | Permite voltar para a tela de boas-vindas |
| `router.push({ pathname: '/preview', params })` | cadastro → preview | Passa dados via params e permite voltar para editar |
| `router.back()` | preview → cadastro | Retorna ao formulário com os dados intactos |
| `router.replace('/sucesso')` | preview → sucesso | Impede o usuário de voltar ao preview após finalizar |
| `router.replace('/')` | sucesso → index | Limpa a pilha toda para começar um novo cartão |


*Italo Cubas Barros*
*Atividade Prática IA2.1 — Prof. Brendo Vale*
