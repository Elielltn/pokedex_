# ✅ Pokédex Interativa - JavaScript

Este é um projeto de **Pokédex**, desenvolvido com **HTML, CSS e JavaScript**, utilizando a [PokéAPI](https://pokeapi.co/) para buscar e exibir dados de Pokémon. A aplicação permite explorar uma lista de Pokémon, pesquisar por nome ou ID e visualizar detalhes completos em uma interface limpa e responsiva. 💻✨

---

## 🚀 Funcionalidades

- 📌 **Pesquisar Pokémon** por nome ou ID.
- 📜 **Listagem paginada** com 12 Pokémon por vez, com botão "Carregar Mais".
- 🔍 **Detalhes do Pokémon**, incluindo altura, peso, habilidades, categoria e tipos.
- 🎨 **Interface responsiva**, adaptada para desktops e dispositivos móveis.
- ⚡ **Navegação dinâmica** entre a lista principal e páginas de detalhes.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** para estrutura das páginas 🏗️
- **CSS3** para estilização visual 🎨
- **JavaScript (ES6+)** para interatividade e chamadas à API ⚡
- **PokéAPI** para dados dos Pokémon 🌐

---

## ⚙️ Funcionamento do JavaScript

O JavaScript gerencia toda a lógica da aplicação:

1. **Carregamento de Pokémon**: Faz chamadas à PokéAPI para buscar listas paginadas ou Pokémon específicos.
2. **Pesquisa dinâmica**: Filtra Pokémon por nome ou ID, limpando e atualizando a interface.
3. **Criação de cards**: Gera cartões de Pokémon dinamicamente no DOM com imagens, nomes e tipos.
4. **Detalhes do Pokémon**: Exibe informações detalhadas (altura, peso, habilidades, etc.) em uma página dedicada.
5. **Paginação**: Incrementa o offset para carregar mais Pokémon ao clicar em "Carregar Mais".

---

## 🔧 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Acesse o diretório**:
   ```bash
   cd seu-repositorio
   ```
3. **Inicie um servidor local**:
   - Use o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code, ou
   - Execute:
     ```bash
     python -m http.server 8000
     ```
4. Abra `http://localhost:8000` no navegador.

**Nota**: Não é necessário instalar dependências, pois o projeto usa JavaScript puro.

---

## 📂 Estrutura do Projeto

```
seu-repositorio/
├── index.html          # Página principal com lista de Pokémon
├── pokemon.html        # Página de detalhes do Pokémon
├── main.js             # Lógica da página principal
├── app.js              # Lógica central (API e renderização)
├── script.js           # Lógica alternativa para busca de Pokémon
├── styles/
│   ├── global.css      # Estilos globais
│   ├── index.css       # Estilos da página principal
│   ├── pokemon.css     # Estilos da página de detalhes
└── README.md           # Documentação do projeto
```

---

## 🔧 Melhorias Futuras

- **Adicionar um spinner de carregamento** para melhorar a experiência do usuário.
- **Implementar filtros** por tipo ou geração de Pokémon.
- **Melhorar acessibilidade** com ARIA labels e navegação por teclado.
- **Adicionar suporte offline** com cache de dados da API.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch (`git checkout -b sua-feature`).
3. Faça suas alterações e commit (`git commit -m "Adiciona feature"`).
4. Envie para o repositório remoto (`git push origin sua-feature`).
5. Abra um Pull Request.

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🌟 Agradecimentos

- [PokéAPI](https://pokeapi.co/) por fornecer os dados dos Pokémon.
- [Phosphor Icons](https://phosphoricons.com/) pelo ícone de busca.