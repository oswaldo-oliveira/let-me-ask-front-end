# Let me Ask

Projeto desenvolvido durante um evento da Rocketseat.

## Descrição

Aplicação web para criação e participação de salas de perguntas e respostas em tempo real, com suporte a respostas geradas por IA e gravação de áudio para perguntas por voz.

## Principais Tecnologias

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TanStack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-0467DF?style=for-the-badge&logo=webrtc&logoColor=white)

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **React Router DOM** - Navegação SPA
- **TanStack Query** - Gerenciamento de dados assíncronos
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e primitivos
- **Lucide React** - Biblioteca de ícones
- **Web Audio API** - Gravação e processamento de áudio
- **Zod** - Validação de formulários
- **React Hook Form** - Gerenciamento de formulários

## Funcionalidades

- **Criação de Salas**: Crie salas de perguntas e respostas facilmente
- **Perguntas por Texto**: Envie perguntas por texto para receber respostas
- **Perguntas por Áudio**: Grave perguntas por áudio usando o microfone
- **Respostas com IA**: Receba respostas geradas por inteligência artificial
- **Feedback Visual**: Indicadores visuais de carregamento durante a geração de respostas
- **Interface Responsiva**: Design adaptável para diferentes dispositivos

## Padrão de Projeto

- Estrutura baseada em componentes funcionais React
- Gerenciamento de rotas com React Router
- Gerenciamento de estado assíncrono com React Query
- Estilização utilitária com Tailwind CSS
- Organização de código por domínio em `src/pages`, `src/components` e `src/lib`
- Alias de importação: `@` aponta para `src/`
- Otimistic UI para melhor experiência do usuário

## Setup e Execução

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd let-me-ask-front-end
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. **Acesse a aplicação:**
   - Abra [http://localhost:5173](http://localhost:5173) no seu navegador
   - Permita o acesso ao microfone quando solicitado (necessário para a funcionalidade de gravação de áudio)

> **Requisitos:**
> - API backend rodando em `http://localhost:3333` para funcionamento completo
> - Navegador com suporte à Web Audio API (Chrome, Firefox, Edge, Safari)
> - Permissões de microfone habilitadas para a funcionalidade de gravação de áudio

## Arquitetura e Estrutura do Projeto

```
src/
├── app.tsx                # Componente principal e configuração de rotas
├── components/            # Componentes reutilizáveis
│   ├── question-form.tsx  # Formulário para envio de perguntas por texto
│   ├── question-item.tsx  # Componente de exibição de pergunta individual
│   └── question-list.tsx  # Lista de perguntas da sala
├── http/                  # Camada de comunicação com a API
│   ├── types/             # Tipos para requisições e respostas
│   ├── use-create-question.ts  # Hook para criação de perguntas
│   └── use-room-questions.ts   # Hook para busca de perguntas da sala
├── lib/                   # Bibliotecas e utilitários
└── pages/                 # Páginas da aplicação
    ├── create-room.tsx    # Página de criação de sala
    ├── record-room-audio.tsx  # Página de gravação de áudio
    └── room.tsx           # Página principal da sala de perguntas
```

## Fluxo de Funcionamento

1. **Criação de Sala**: Usuário cria uma nova sala com nome personalizado
2. **Envio de Perguntas**: 
   - Por texto: Usuário digita a pergunta no formulário
   - Por áudio: Usuário grava pergunta usando o microfone
3. **Processamento**: A pergunta é enviada para o backend que utiliza IA para gerar uma resposta
4. **Feedback**: Durante o processamento, um indicador visual é exibido
5. **Resposta**: A resposta gerada pela IA é exibida junto à pergunta

## Integração com IA

O projeto utiliza inteligência artificial para gerar respostas automáticas às perguntas dos usuários:

- **Processamento em Tempo Real**: As respostas são geradas em tempo real pelo backend
- **Optimistic UI**: Feedback visual imediato enquanto a resposta é processada
- **Suporte a Áudio**: Transcrição de perguntas feitas por áudio antes do processamento pela IA
- **Cache Inteligente**: Armazenamento em cache das respostas para melhor performance
- **Tratamento de Erros**: Mecanismos para lidar com falhas na geração de respostas

## Gravação de Áudio

A funcionalidade de gravação de áudio permite que os usuários façam perguntas usando o microfone:

- **Web Audio API**: Utiliza a API nativa do navegador para captura de áudio
- **Feedback Visual**: Indicadores de gravação em andamento e nível de áudio
- **Controles Intuitivos**: Interface simples para iniciar e parar a gravação
- **Conversão Automática**: O áudio é convertido em formato compatível para envio ao servidor
- **Fallback**: Opção de digitar a pergunta caso o navegador não suporte gravação de áudio

---

Desenvolvido com 💜 durante a Rocketseat NLW
