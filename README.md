# Stockly - Sistema de Gestão de Estoque

Stockly é uma aplicação moderna de gestão de estoque desenvolvida com Next.js 14, oferecendo uma interface intuitiva para controle de produtos, vendas e análise de dados.

## 🚀 Tecnologias Principais

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **UI Components**: Radix UI
- **Formulários**: React Hook Form + Zod
- **Banco de Dados**: Prisma ORM
- **Deploy**: AWS (via SST)
- **Gráficos**: Recharts
- **Notificações**: Sonner

## ✨ Features

- 📊 Dashboard com métricas em tempo real
- 📦 Gestão completa de produtos
- 💰 Controle de vendas
- 📈 Análise de dados e relatórios

## 🏗️ Estrutura do Projeto

```
app/
  ├─ _components/    # Componentes reutilizáveis
  ├─ _actions/       # Server actions
  ├─ _data-access/   # Acesso a dados
  ├─ _lib/          # Utilitários
  ├─ _helpers/      # Funções auxiliares
  ├─ dashboard/     # Página principal
  ├─ products/      # Gestão de produtos
  └─ sales/         # Gestão de vendas
```

## 🚀 Deploy

O Stockly oferece flexibilidade de deploy, suportando tanto a Vercel quanto a AWS, permitindo escolher a melhor opção baseada nas necessidades do projeto:

### Vercel (Deploy Padrão)

- **Ideal para**: Projetos que precisam de deploy rápido e simples
- **Vantagens**:
  - Deploy automático via GitHub
  - Preview deployments para cada PR
  - Edge Network global
  - Otimizado para Next.js
  - Zero configuração necessária
  - Suporta streaming

### AWS via SST (Serverless Stack)

- **Ideal para**: Projetos que necessitam de mais controle e serviços AWS
- **Vantagens**:

  - Acesso completo à infraestrutura AWS
  - Escalabilidade sob demanda
  - Integração com outros serviços AWS (RDS, S3, etc.)
  - Controle granular de recursos
  - Custo-benefício para aplicações maiores

- **Desvantagens**:

  - Não suporta streaming na versão utilizada até o momento

A versão atual está hospedada na AWS utilizando SST (Serverless Stack):
[Stockly Production](https://d11icbmfnycoxf.cloudfront.net/)

> 💡 **Dica**: Para projetos menores ou em fase inicial, é recomendado utilizar a Vercel para deploy. À medida que o projeto cresce e surge necessidade de utilização de mais serviços AWS, a migração para SST se torna uma opção viável.

## 🛠️ Desenvolvimento Local

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Configure o banco de dados:

Você pode escolher entre duas opções para o banco de dados PostgreSQL:

### Opção 1: Docker (Recomendado para desenvolvimento local)

```bash
docker run --name stockly-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

Configure o `.env` como no arquivo de exemplo `env-example` situado na pasta raiz do projeto

### Opção 2: Cloud (Recomendado para produção)

Você pode utilizar serviços como:

- Neon (https://neon.tech)
- Supabase (https://supabase.com)
- AWS RDS
- Railway (https://railway.app)

Configure o `.env` com a URL fornecida pelo seu provedor:

```bash
DATABASE_URL=sua_url_do_banco_cloud
```

5. Execute as migrações do banco de dados:

```bash
npx prisma migrate dev
```

6. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 📝 Convenções de Código

- Utilizado `server-only` para funções exclusivas do servidor
- Siga a estrutura de diretórios com prefixo `_` para componentes não-rotas
- Mantido a consistência com Conventional Commits

## 🔒 Segurança

- Todas as ações do servidor são protegidas
- Validação de dados com Zod
- Sanitização de inputs

## 📚 Documentação Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [SST Documentation](https://docs.sst.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
