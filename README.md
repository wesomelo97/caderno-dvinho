# Caderno D'Vinho

**Case fictício de negócio construído como uma experiência de aprendizado em estratégia, branding, produto digital e análise de dados.**

> **Descubra seu gosto. Construa seu repertório.**

[Site](https://wesomelo97.github.io/caderno-dvinho/) · [Backoffice](https://wesomelo97.github.io/business-backoffice/) · [Repositório](https://github.com/wesomelo97/caderno-dvinho)

---

## Sobre o projeto

A **Caderno D'Vinho** nasceu como um exercício de construção de empresa do zero.

O objetivo não era simplesmente criar um site de vinhos ou um dashboard, mas experimentar até onde eu conseguiria estudar e aplicar conceitos de:

- estratégia de negócio;
- posicionamento;
- branding;
- experiência do cliente;
- produto digital;
- operação;
- modelagem de dados;
- Business Intelligence;
- análise e tomada de decisão.

O projeto foi desenvolvido como um **case fictício completo**, passando da definição do problema até a análise dos números da operação.

### Importante sobre o escopo

Este projeto não foi pensado principalmente como uma demonstração de desenvolvimento front-end.

O site existe como uma das materializações da estratégia, mas **o foco principal da experiência esteve no entendimento do negócio, na construção da marca e na análise de dados**.

Durante o processo, a parte de desenvolvimento ficou mais simples do que eu gostaria visualmente. Os estudos de branding e os mockups desenvolvidos ao longo do projeto chegaram a uma direção estética mais refinada do que a implementação final do site.

Essa diferença foi mantida de forma consciente no case porque o objetivo era registrar o processo real de aprendizado, incluindo limitações, decisões de escopo e pontos que poderiam ser aprofundados em uma próxima versão.

---

# 1. Oportunidade

O vinho costuma ser apresentado de forma técnica, elitizada ou intimidadora para quem ainda está começando.

A Caderno D'Vinho parte de uma pergunta simples:

> Como tornar a descoberta do vinho mais acessível sem transformar a experiência em algo genérico?

A proposta da marca é ajudar o cliente a:

- descobrir preferências;
- experimentar novos estilos;
- aprender progressivamente;
- construir repertório;
- comprar com mais confiança.

---

# 2. Proposta de valor

A Caderno D'Vinho combina comércio, curadoria e aprendizado.

Em vez de vender apenas garrafas, a empresa busca criar uma jornada:

```text
Descobrir
   ↓
Experimentar
   ↓
Entender
   ↓
Criar preferências
   ↓
Construir repertório
```

A frase central da marca resume essa ideia:

> **Descubra seu gosto. Construa seu repertório.**

---

# 3. Modelo de negócio

O modelo criado para o case combina operação digital e presença física leve.

### Canais

- e-commerce;
- quiosques físicos;
- experiências e degustações;
- conteúdo educativo;
- Wine Finder.

A operação simulada considera o **digital como principal canal de vendas**, complementado por quiosques em shopping centers.

Foram simulados:

- 8 quiosques;
- 5 capitais brasileiras;
- 36 SKUs;
- 1.200 clientes;
- 2.800 pedidos;
- aproximadamente 4.900 linhas de venda.

> Todos os dados operacionais e financeiros utilizados no projeto são simulados para fins de estudo e portfólio.

---

# 4. Perfis de cliente

A jornada da marca foi organizada em três perfis principais.

### Descoberta

Cliente que ainda está começando a explorar o universo do vinho.

Busca orientação, segurança e produtos mais acessíveis.

### Repertório

Cliente que já conhece algumas preferências e deseja ampliar referências.

Representa o estágio central da proposta da marca.

### Entusiasta

Cliente com maior familiaridade com vinhos e maior interesse em variedade, experiências e curadoria.

Esses perfis são utilizados tanto na experiência digital quanto no backoffice e na análise de clientes.

---

# 5. Branding

O branding nasceu da estratégia do negócio.

A intenção era evitar dois extremos:

- o vinho excessivamente sofisticado e distante;
- uma comunicação genérica e puramente promocional.

A direção escolhida foi uma identidade **rústica, editorial, sensorial e contemporânea**.

### Identidade visual

Paleta principal:

- Vinho — `#5A1F2B`
- Creme — `#F2E8D5`
- Oliva — `#4B5138`
- Marrom — `#704B37`
- Carvão — `#252321`
- Bege acinzentado — `#CCBFAE`

Tipografia:

- **Cormorant Garamond** — títulos e linguagem editorial;
- **DM Sans** — interface e textos funcionais.

A documentação completa da identidade está em:

```text
docs/branding/
```

O projeto também inclui estudos e mockups para aplicações em:

- site;
- mobile;
- Instagram;
- stories;
- TikTok;
- e-mail marketing.

---

# 6. Produto digital

O site foi desenvolvido em React + Vite.

### Funcionalidades

- home;
- catálogo de vinhos;
- filtros;
- páginas de produto;
- carrinho;
- checkout simulado;
- Wine Finder;
- experiências;
- reservas;
- página institucional;
- área de aprendizado;
- artigos.

### Wine Finder

O Wine Finder foi pensado como uma ferramenta para reduzir a insegurança de quem ainda não sabe exatamente o que comprar.

Ele funciona como ponte entre:

```text
preferência do cliente
        ↓
orientação
        ↓
produto recomendado
```

### Site publicado

https://wesomelo97.github.io/caderno-dvinho/

---

# 7. Backoffice operacional

Para representar o que acontece depois da compra ou reserva, foi criado um backoffice separado e reutilizável.

### Módulos

- Dashboard
- Pedidos
- Produtos & Estoque
- Clientes
- Reservas

O protótipo possui persistência local e integração entre módulos.

Exemplo:

```text
Movimentação de estoque
        ↓
novo saldo
        ↓
produto entra em estado crítico
        ↓
alerta aparece no Dashboard
```

Outro exemplo:

```text
Pedido
   ↓
cliente identificado
   ↓
histórico de compras
   ↓
total gasto e recorrência
```

### Demo

https://wesomelo97.github.io/business-backoffice/

Repositório:

https://github.com/wesomelo97/business-backoffice

---

# 8. Business Intelligence

A operação simulada foi estruturada para permitir análise em Power BI.

### Modelo de dados

Principais tabelas:

```text
Produtos (1)
      ↓
    Vendas
      ↑
Clientes (1)

Canais (1) → Vendas

Calendário (1) → Vendas
```

### Principais indicadores

- Receita Líquida
- Margem Bruta
- Margem %
- Pedidos
- Clientes Compradores
- Itens Vendidos
- Ticket Médio
- SKUs Vendidos
- Receita por Canal
- Receita por SKU

### Páginas do dashboard

1. **Visão Executiva**
2. **Produtos & Mix**
3. **Canais & Clientes**

Os arquivos e screenshots estão disponíveis em:

```text
bi/
├── data/
├── screenshots/
└── Caderno_DVinho_BI_v1.0.pbix
```

---

# 9. Alguns insights encontrados

A análise da operação simulada permitiu sair da visualização de dados e chegar a decisões de negócio.

Entre os principais achados:

- a receita simulada cresceu aproximadamente 75% entre março e agosto;
- o canal digital concentrou aproximadamente 77% da receita;
- os quiosques representaram menor escala, mas apresentaram margem competitiva;
- tintos concentraram a maior parcela de receita;
- algumas categorias com menor volume apresentaram margens superiores;
- o produto líder de receita apresentou margem inferior à média;
- a linha **Repertório** concentrou mais da metade da receita;
- clientes recorrentes tiveram participação muito relevante na receita simulada;
- aumento de desconto em determinado período não gerou crescimento proporcional da receita.

A análise completa está documentada em:

```text
docs/bi/insights.md
```

---

# 10. Recomendações derivadas dos dados

Os dados simulados permitiram chegar a recomendações como:

- proteger margem em produtos de alto volume;
- fortalecer estratégias de retenção;
- trabalhar o mix considerando receita e rentabilidade;
- utilizar quiosques também como pontos de experiência e aquisição;
- avaliar promoções pelo impacto na margem, não apenas pelo crescimento de vendas.

O objetivo dessa etapa foi demonstrar que BI não termina no gráfico.

```text
Dado
 ↓
Leitura
 ↓
Insight
 ↓
Decisão
```

---

# 11. Estrutura do projeto

```text
caderno-dvinho/
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── bi/
│   ├── data/
│   ├── screenshots/
│   └── Caderno_DVinho_BI_v1.0.pbix
│
├── docs/
│   ├── bi/
│   ├── branding/
│   └── cases/
│
├── public/
├── src/
├── README.md
├── package.json
└── vite.config.js
```

---

# 12. Tecnologias e ferramentas

### Estratégia e organização

- Notion
- Excalidraw

### Branding e design

- Canva
- Penpot

### Desenvolvimento

- React
- Vite
- JavaScript
- React Router
- CSS
- Git
- GitHub
- GitHub Pages

### Dados

- Excel / planilhas
- Power BI
- DAX

### Apoio

- Inteligência Artificial utilizada como ferramenta de pesquisa, ideação, desenvolvimento e revisão.

---

# 13. O que este projeto buscou demonstrar

A Caderno D'Vinho não foi criada para demonstrar apenas uma habilidade isolada.

O objetivo foi experimentar um processo mais próximo de um projeto real:

```text
Oportunidade
    ↓
Problema
    ↓
Estratégia
    ↓
Modelo de negócio
    ↓
Branding
    ↓
Experiência
    ↓
Produto digital
    ↓
Operação
    ↓
Dados
    ↓
Análise
    ↓
Insights
    ↓
Recomendações
```

O site, o backoffice e o dashboard são partes desse processo.

O principal aprendizado do projeto foi entender como decisões de estratégia, marca, experiência, operação e dados podem se conectar dentro da mesma empresa.

---

# 14. Limitações e próximos passos

Por ser um projeto de estudo e portfólio, algumas áreas foram intencionalmente simplificadas.

### Produto digital

A implementação atual cumpre o fluxo funcional, mas ainda existe espaço para uma segunda versão com maior fidelidade visual aos estudos de branding e aos mockups desenvolvidos durante o projeto.

### Backoffice

O sistema é um protótipo frontend com `localStorage`.

Em uma aplicação real, a arquitetura envolveria:

```text
Site / E-commerce
       ↓
API / Backend
       ↓
Banco de dados
       ↓
Backoffice
       ↓
BI
```

### Dados

Os dados são fictícios e foram construídos para representar uma operação coerente o suficiente para permitir análises, hipóteses e tomada de decisão.

---

# 15. Natureza do projeto

**Caderno D'Vinho é uma empresa fictícia.**

Produtos, clientes, vendas, unidades, resultados financeiros e demais informações operacionais foram criados exclusivamente para fins educacionais e de portfólio.

O projeto representa uma hipótese de negócio e uma experiência de construção multidisciplinar — não uma empresa real em operação.

---

## Links

- Site: https://wesomelo97.github.io/caderno-dvinho/
- Backoffice: https://wesomelo97.github.io/business-backoffice/
- Repositório principal: https://github.com/wesomelo97/caderno-dvinho
- Repositório do backoffice: https://github.com/wesomelo97/business-backoffice
