# Museu Celeste 🌌 — Cruzeiro Esporte Clube

O **Museu Celeste** é uma aplicação mobile desenvolvida em **React Native** que serve como um tributo interativo à história do Cruzeiro. O projeto combina uma interface visual rica, com fundo estrelado e temática "Dark Mode" azul, a funcionalidades de consulta histórica e engajamento do torcedor.

> Este projeto foi desenvolvido como parte de uma atividade acadêmica, focando no uso de componentes nativos do React Native e manipulação de estados.

## 🚀 Funcionalidades

O aplicativo está dividido em três seções principais:
1.  **Galeria Histórica:** Uma lista performática (`FlatList`) apresentando ídolos como Tostão e Dirceu Lopes, além de títulos lendários.
2.  **Exploração Detalhada:** Sistema de interação via `Modal` que permite ao usuário ler descrições aprofundadas sobre cada marco histórico.
3.  **Memorial do Torcedor:** Um formulário completo para que o usuário registre suas próprias memórias ligadas ao clube.

## 🛠️ Bibliotecas Necessárias

Para que o aplicativo funcione com todos os seus recursos visuais e interativos, é necessário instalar as seguintes dependências da comunidade:

* **@react-native-picker/picker:** Utilizado para as caixas de seleção de categorias e décadas no formulário.
* **@react-native-community/slider:** Utilizado para os seletores deslizantes de nível de emoção e frequência ao estádio.

---

## 📦 Instalação e Execução

Para rodar este projeto localmente, siga estes passos no seu terminal:

1. **Crie o projeto base (caso ainda não tenha feito):**
   ```bash
   npx create-expo-app MuseuCeleste --template blank
