# Omni Nexus

Chat rápido, seguro e em tempo real com criptografia avançada, detectando e bloqueando golpes e fraudes automaticamente.

## Como rodar o projeto

Rode o container contendo PostgresSQL e REDIS.

```bash
docker-compose -f docker-compose.yml --env-file .env -p omni-nexus-dev up -d
```

## Como usar e rodar o banco de dados

Prisma é uma ferramenta moderna para modelar, migrar e consultar seu banco de dados. Aqui estão os comandos essenciais para começar:

#### Inicialização do Prisma

```bash
npx prisma init
```

#### Gerar artefatos (ex.: Prisma Client)

```bash
npx prisma generate
```

#### Navegar pelos dados

```bash
npx prisma studio
```

#### Migrations (criar, aplicar e gerar artefatos)

```bash
npx prisma migrate dev
```

#### Atualizar schema a partir de um banco existente

```bash
npx prisma db pull
```

#### Aplicar schema ao banco de dados

```bash
npx prisma db push
```

#### Validar o schema

```bash
npx prisma validate
```

#### Formatar o schema

```bash
npx prisma format
```

#### Informações da versão e debug

```bash
npx prisma version
npx prisma debug
```
