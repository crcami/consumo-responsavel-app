# 💧⚡♻️ Consumo Responsável App

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react\&logoColor=white\&labelColor=20232a)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite\&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
![SPA](https://img.shields.io/badge/App-Single%20Page%20Application-0A0A0A)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)](#-deploy-no-github-pages)
![Node 18+](https://img.shields.io/badge/Node-18%2B-339933?logo=node.js\&logoColor=white)
![Status](https://img.shields.io/badge/Status-MVP%20em%20evolu%C3%A7%C3%A3o-1d9bf0)

Aplicação React + Vite (TypeScript) para educação e monitoramento do consumo doméstico — água, energia e resíduos — com foco em clareza, metas e evolução contínua.

---

## Sumário

- [💧⚡♻️ Consumo Responsável App](#️-consumo-responsável-app)
  - [Sumário](#sumário)
  - [Visão geral](#visão-geral)
    - [Objetivos](#objetivos)
  - [Funcionalidades (MVP)](#funcionalidades-mvp)
  - [Arquitetura \& Tecnologias](#arquitetura--tecnologias)
  - [Como rodar localmente](#como-rodar-localmente)
  - [Build de produção](#build-de-produção)
  - [🌐 Deploy no GitHub Pages](#-deploy-no-github-pages)
  - [Qualidade \& Boas práticas](#qualidade--boas-práticas)
  - [Roadmap](#roadmap)
  - [Scripts](#scripts)
  - [Contribuindo](#contribuindo)

---

## Visão geral

O Consumo Responsável é uma iniciativa com múltiplos projetos que se complementam:

* **App Web (este repositório):** interface para visualizar métricas, registrar consumo, definir metas e acompanhar evolução.
* **Conteúdo Educativo (planejado):** dicas práticas, desafios semanais e materiais de apoio.
* **Dados & Integrações (planejado):** API para ingestão de leituras e integração com dispositivos/fornecedores, com anonimização.

### Objetivos

* Tornar simples entender e reduzir o consumo doméstico.
* Transformar dados em insights acionáveis (metas, alertas, comparações).
* Educar com dicas contextualizadas e gamificação leve.
* Escalar para múltiplos domínios (água, energia, resíduos) sem fricção para o usuário.

---

## Funcionalidades (MVP)

* Dashboard com indicadores por período (diário/semanal/mensal).
* Metas por categoria (ex.: kWh/mês, m³/mês).
* Registros manuais de consumo e observações.
* Dicas contextuais quando exceder média ou meta.
* PWA (base): instalação como app e `npm run preview`.
* Roteamento SPA com fallback `404.html` (compatível com GitHub Pages).

> Veja o roadmap abaixo para próximas entregas.

---

## Arquitetura & Tecnologias

* **Frontend:** React + Vite (TypeScript)
* **UI/UX:** Radix UI (componentes), lucide-react (ícones)
* **Formulários:** react-hook-form
* **Gráficos:** recharts
* **Build:** `@vitejs/plugin-react-swc`, aliases em `vite.config.ts`

Estrutura sugerida (resumo):

```
src/
  assets/                 # imagens e estáticos
  components/             # componentes reutilizáveis
  features/               # domínios (water, energy, waste, goals, tips)
  pages/                  # páginas (Home, Dashboard, Settings)
  hooks/                  # hooks customizados
  lib/                    # utilitários (formatters, storage, api)
  styles/                 # estilos globais
  App.tsx
  main.tsx
```

---

## Como rodar localmente

**Pré-requisitos**

* Node.js 18+ (recomendado 20)
* NPM (ou Yarn/Pnpm — adapte os comandos)

**Instalação e desenvolvimento**

```bash
npm install
npm run dev
```

A aplicação sobe em `http://localhost:3000/` (conforme `server.port`).

---

## Build de produção

```bash
npm run build
npm run preview
```

O build é gerado em `build/`.

---

## 🌐 Deploy no GitHub Pages

Este projeto está preparado para GitHub Pages via Actions.

1. Confirme o workflow em `.github/workflows/deploy.yml` (build + upload + `deploy-pages`).
2. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça push na branch `main` ou rode manualmente em **Actions**.

**Importante:** o `vite.config.ts` usa:

```ts
base: process.env.BASE_PATH || '/'
```

O workflow deve definir `BASE_PATH` como `/<nome-do-repo>/` (ou `/` se o repositório for `<usuario>.github.io`) antes do `npm run build`.

**Domínio personalizado (opcional)**

* DNS: CNAME `app.seudominio.com` → `<usuario>.github.io`
* Settings → Pages → Custom domain: informe o domínio e ative **Enforce HTTPS**
* No deploy, gere `build/CNAME` com o domínio

---

## Qualidade & Boas práticas

* Código (nomes, comentários e docstrings) em inglês.
* Clean code: componentes coesos; hooks para lógica de estado/efeitos.
* Acessibilidade: semântica, labels e foco visível.
* Performance: lazy loading por rota/feature (roadmap).

---

## Roadmap

* [ ] Água: metas por m³ e comparativo com média histórica
* [ ] Energia: custo estimado (tarifa configurável) e pico/vale
* [ ] Resíduos: registro por categoria (orgânico, reciclável)
* [ ] Alertas: notificações quando ultrapassar meta
* [ ] Gamificação: conquistas e desafios semanais
* [ ] Sincronização: múltiplos perfis e persistência em nuvem
* [ ] Exportação: CSV/JSON dos registros
* [ ] Integrações: leitura automática (fornecedores/IoT)

---

## Scripts

* `npm run dev` — inicia servidor de desenvolvimento
* `npm run build` — gera build em `build/`
* `npm run preview` — pré-visualiza o build localmente

---

## Contribuindo

Contribuições são bem-vindas. Abra uma issue para discutir ideias/bugs ou envie um PR com melhorias.

---


