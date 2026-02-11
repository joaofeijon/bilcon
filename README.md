# Bilcon Project

## 🚀 Como rodar o projeto

### Pré-requisitos
- Docker e Docker Compose instalados

### Passos para iniciar

1. **Clone o repositório** (se ainda não fez)
```bash
git clone <seu-repositorio>
cd bilcon
```

2. **Configure as variáveis de ambiente**
O arquivo `.env` já está configurado com valores padrão. Se precisar, edite conforme necessário.

3. **Inicie o projeto com Docker**
```bash
docker-compose up --build
```

4. **Teste a aplicação**
Abra o navegador ou use curl:
```bash
curl http://localhost:3000
```

Você deve ver a resposta:
```json
{"message":"Hello World"}
```

### Comandos úteis

- **Parar os containers:**
```bash
docker-compose down
```

- **Ver logs:**
```bash
docker-compose logs -f app
```

- **Reiniciar apenas a aplicação:**
```bash
docker-compose restart app
```

## 📝 Estrutura do Projeto

```
bilcon/
├── src/
│   ├── app.ts              # Arquivo principal da aplicação
│   ├── routes/
│   │   └── index.ts        # Rotas da API
│   └── types/
│       └── index.ts        # Tipos TypeScript
├── prisma/
│   ├── schema.prisma       # Schema do banco de dados
│   └── seed.ts            # Dados iniciais
├── docker-compose.yml      # Configuração dos containers
├── Dockerfile             # Imagem Docker da aplicação
├── .env                   # Variáveis de ambiente
└── package.json           # Dependências do projeto
```

## 🔧 Tecnologias

- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM para banco de dados
- **MariaDB** - Banco de dados
- **TypeScript** - Superset JavaScript com tipos
- **Docker** - Containerização