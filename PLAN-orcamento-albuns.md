# PLAN: Orçamento de Álbuns (Buds Mídia)

## ✅ Decisões de Arquitetura (Socratic Gate Resolvido)

- **Navegação por Categoria:** O site utilizará uma página única com **abas (tabs) no topo**, permitindo que o cliente alterne rapidamente entre "Linha Oficial", "Casamento/15 Anos" e "Newborn" sem recarregar a página.
- **Formatação do WhatsApp:** O sistema calculará em tempo real os valores e gerará uma mensagem detalhada, listando as escolhas do cliente e exibindo a **soma dos preços detalhados/estimados** no texto final.
- **Imagens dos Álbuns:** A implementação inicial utilizará **placeholders/mockups visuais minimalistas**. O código será estruturado de forma que o usuário (fotógrafo) possa substituir os arquivos na pasta `assets/images` facilmente no futuro.

---

## 1. Overview
Desenvolver um site de orçamento de álbuns fotográficos ("Buds Mídia") tipo Single Page Application (SPA), usando apenas HTML, CSS (Vanilla) e JS. O objetivo é simular uma experiência "app-like" (mobile-first), permitindo que o cliente escolha seu pacote (Essencial, Prime, Signature/Luxo), visualize detalhes (com gatilhos psicológicos) e seja direcionado ao WhatsApp do fotógrafo com o orçamento formatado.

## 2. Project Type
**WEB** (com forte foco Mobile-First).
*Agent Primário:* `frontend-specialist`

## 3. Success Criteria
- [ ] O site carrega rápido e não depende de frameworks pesados (Vanilla JS + CSS).
- [ ] A interface é moderna, responsiva e otimizada 100% para celulares (App-like feel).
- [ ] O fluxo de escolha de categoria (Oficial, Casamento, Newborn) muda dinamicamente os pacotes disponíveis.
- [ ] O botão final redireciona para o WhatsApp com uma mensagem pré-formatada correta.
- [ ] Implementa a estratégia psicológica de Ancoragem (3 opções lado a lado/em carrossel para forçar a escolha do pacote "Prime/Clássico").

## 4. Tech Stack
- **HTML5:** Estrutura semântica do app.
- **CSS3 Vanilla:** Sem dependências extras como Tailwind, foco em variáveis globais, flexbox/grid e micro-animações (para o app feel).
- **JavaScript Vanilla:** Para gerenciar o estado da categoria, atualizar os preços em tempo real e montar a URL do WhatsApp.
- **Hospedagem:** Vercel (Gratuito, rápido, integração fácil via CLI).

## 5. File Structure
```text
.
├── index.html       # Arquivo principal do site
├── css
│   └── style.css    # Estilos globais e componentes
├── js
│   ├── data.js      # Dados dos álbuns e preços (separado para fácil edição)
│   └── main.js      # Lógica de seleção e envio para o WhatsApp
├── assets
│   └── images/      # Imagens dos álbuns
└── vercel.json      # Configuração simples de roteamento (se necessário)
```

## 6. Task Breakdown

### Task 1: Estruturar Banco de Dados Local (`js/data.js`)
- **Agent:** `frontend-specialist` (Skill: `clean-code`)
- **Dependencies:** Nenhuma
- **Priority:** P0
- **INPUT:** Os textos e pacotes passados no prompt.
- **OUTPUT:** Um arquivo JavaScript contendo os objetos de todas as categorias, álbuns, preços e adicionais.
- **VERIFY:** Console não exibe erros e a estrutura dos dados cobre 100% dos cenários (Oficial, Casamento, Newborn).

### Task 2: Layout Base e Tema Visual (`css/style.css` & `index.html`)
- **Agent:** `frontend-specialist` (Skill: `frontend-design`)
- **Dependencies:** Nenhuma
- **Priority:** P0
- **INPUT:** Requisitos mobile-first.
- **OUTPUT:** Arquivo `index.html` básico com cabeçalho (Header) tipo app, e o arquivo CSS com variáveis de cor, tipografia e tema moderno/clean (vidro, sombras suaves).
- **VERIFY:** A página abre no celular sem overflow horizontal e exibe as cores da marca Buds Mídia.

### Task 3: Componentes de Seleção e Carrossel (`index.html` & `css/style.css`)
- **Agent:** `frontend-specialist`
- **Dependencies:** Task 1, Task 2
- **Priority:** P1
- **INPUT:** Estrutura visual para as 3 opções (Essencial, Prime, Signature).
- **OUTPUT:** Abas de categorias (Oficial, Casamentos, Newborn) e Cards de Álbuns (com destaque para a opção do meio - Prime/Clássico).
- **VERIFY:** O cliente pode clicar entre as categorias e o visual se adapta corretamente no mobile.

### Task 4: Lógica de Carrinho e WhatsApp (`js/main.js`)
- **Agent:** `frontend-specialist`
- **Dependencies:** Task 1, Task 3
- **Priority:** P1
- **INPUT:** Seleção do cliente.
- **OUTPUT:** Event listeners conectando os cliques nos botões à formatação do texto e abertura do link `wa.me/`.
- **VERIFY:** Ao clicar em "Pedir pelo WhatsApp", o link contém as informações corretas e abre no aplicativo com formatação legível.

### Task 5: Setup do Vercel e Otimizações
- **Agent:** `frontend-specialist` (Skill: `performance-profiling`)
- **Dependencies:** Tasks 1-4
- **Priority:** P2
- **INPUT:** Projeto finalizado.
- **OUTPUT:** Configuração de SEO básica no `<head>` e deploy para o Vercel.
- **VERIFY:** A URL do Vercel está acessível e o Lighthouse Score está >90 em Performance e Mobile.

## 7. Phase X: Verification

- [ ] Lint: HTML/CSS/JS sem erros.
- [ ] Security: Nenhum dado sensível exposto.
- [ ] UX Audit: Design sem cores proibidas, respeita Socratic Gate, não usa templates batidos.
- [ ] Mobile Test: Layout perfeito em telas estreitas (touch targets > 44px).
- [ ] Build/Deploy: Projeto rodando online no Vercel sem falhas.
