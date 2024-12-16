<img src="https://raw.githubusercontent.com/fabiooliveira1007/images/refs/heads/main/cover-nearby.png">

# Nearby 📍🗺️

Bem-vindo ao **Nearby**! Este é um aplicativo mobile que permite explorar locais próximos utilizando funcionalidades como mapas interativos e geolocalização em tempo real. O projeto foi desenvolvido para demonstrar habilidades em desenvolvimento mobile com **React Native** e **Expo**, com uma interface moderna e amigável.

## 🚀 Funcionalidades Principais

- **Mapas Interativos:** Visualize e explore locais próximos diretamente no mapa.  
- **Geolocalização em Tempo Real:** Obtenha sua localização com precisão para interações personalizadas.  
- **Painel Interativo:** Informações e ações rápidas com um painel deslizante.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### Dependências Principais

- **Expo** - Framework para desenvolvimento simplificado de aplicativos mobile.  
- **React Native Maps** - Para renderização de mapas nativos no aplicativo.  
- **Expo Location** - Gerenciamento de serviços de localização.  
- **Axios** - Cliente HTTP para consumo de APIs.  

### Desenvolvimento

- **TypeScript** - Tipagem estática para maior segurança no código.  
- **Biome** - Ferramenta para formatação e linting do código.

## 🚧 Como Executar o Projeto

Siga os passos abaixo para rodar o **Nearby** em seu dispositivo:

```bash
# Clone o repositório
git clone https://github.com/fabiooliveira1007/nlw-pocket-mobile

# Acesse o diretório principal do projeto
cd nlw-pocket-mobile
```

### 1. Configurar e iniciar o servidor backend:
```bash
# Acesse a pasta do backend
cd api

# Instale as dependências do servidor
npm install

# Inicie o servidor
npm start
```

Certifique-se de que o servidor backend está rodando antes de iniciar o frontend.

---

### 2. Configurar e iniciar o aplicativo mobile:
```bash
# Abra um novo terminal na raíz do projeto e acesse a pasta do frontend
cd mobile

# Instale as dependências do aplicativo
npm install

# Inicie o aplicativo com Expo
npx expo start
```

⚠️ **Instruções importantes:**

- Este projeto **não funciona na web**. Utilize o aplicativo **Expo Go** no seu dispositivo móvel ou um emulador Android.  
- **Configuração do IP:** Substitua o IP no arquivo `api.ts` pelo endereço IP da sua máquina local para que a aplicação funcione corretamente:  
  ```typescript
  import axios from 'axios';

  export const api = axios.create({
    baseURL: 'http://SEU_IP_LOCAL:3333', // Substitua pelo IP do seu computador
    timeout: 700,
  });
  ```
  
Certifique-se de que o seu dispositivo móvel e seu computador estejam na mesma rede.

Depois de configurar, leia o QR Code no terminal usando o **Expo Go** ou execute no emulador Android.

Explore o **Nearby** e aproveite as funcionalidades de geolocalização em tempo real! 🌍