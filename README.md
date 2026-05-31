# GitHub Viewer

Aplicação React para explorar o perfil público de qualquer usuário do GitHub: repositórios, branches e commits — tudo em uma única interface.

**Live demo:** https://nikholau.github.io/github-viewer-challenge/

![GitHub Viewer Screenshot](image.png)

---

## Funcionalidades

- Busca de qualquer usuário pelo username do GitHub
- Listagem de repositórios com tabela dinâmica e paginação
- Navegação para branches e commits de cada repositório
- Validação de formulário com feedback em tempo real (Formik + Yup)
- Roteamento client-side com React Router

---

## Arquitetura de componentes

```
App
├── pages/
│   ├── Insert/       ← formulário de busca (Formik + Yup)
│   ├── Repositories/ ← tabela de repos (React Table)
│   ├── Branches/     ← lista de branches
│   └── Commits/      ← histórico de commits
└── components/
    ├── Button/
    ├── Input/
    ├── Loader/
    └── Table/
```

---

## Stack

| | Tecnologia |
|--|-----------|
| Framework | React 18 |
| Linguagem | TypeScript |
| Roteamento | React Router DOM 6 |
| Formulários | Formik + Yup |
| Tabelas | React Table |
| Estilo | SASS/SCSS |
| API | GitHub REST API v3 |
| Deploy | GitHub Pages |

---

## Setup local

```bash
git clone https://github.com/Nikholau/github-viewer-challenge.git
cd github-viewer-challenge

yarn install
yarn start   # http://localhost:3000
```
