# 🧾 CRUD com Angular e Angular Material

Este projeto foi desenvolvido como parte dos meus estudos iniciais em **Angular**. Ele consiste em uma aplicação de **cadastro e consulta de clientes**, utilizando **Angular Material** para a interface e **localStorage** para persistência de dados.

## ✨ Funcionalidades

- Cadastro de clientes com os seguintes campos:
  - Nome
  - E-mail
  - CPF (com máscara)
  - Data de Nascimento (com máscara)
  - Estado (UF) — carregado via API
  - Município — carregado conforme UF selecionada
- Consulta de clientes pelo nome
- Edição e exclusão de cadastros
- Persistência dos dados no `localStorage`
- Consumo da [BrasilAPI](https://brasilapi.com.br/) para listar:
  - Estados (UFs)
  - Municípios por UF

## 🛠 Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- [BrasilAPI](https://brasilapi.com.br/)
- [ngx-mask](https://www.npmjs.com/package/ngx-mask) (para formatação de CPF e datas)
- `localStorage` para simulação de backend

## 📷 Capturas de Tela

![image](https://github.com/user-attachments/assets/e722c187-82a8-4b45-9592-edb317096fd8)

![image](https://github.com/user-attachments/assets/1bd9c8c6-096f-48d4-adeb-f9f731e500dd)

![image](https://github.com/user-attachments/assets/3a921f59-ef17-4909-ae6b-99f304e480eb)
