# O que é Redux?

- Biblioteca que implementa a arquitetura flux
- para controler de estados globais
- Quando utilizar?
  - o estado é manipulado por mais de um componente?
  - o estado tem mais de um "dono"?
  - as ações do user causam efeitos colaterais nos dados?

# Arquitetura FLUX

Toda vez que uma ação é disparada, é disparada uma _action_, que é um object, então esse object é enviado para o _redux store_, que é um estado global, onde contém _reducers_, que comunicam os componentes com as informações.

# Princípios

- Toda action deve possuir um _type_ que é único e não pode ser compartilhado com outras actions
- O estado do Redux é o único ponto de verdade, todo estado relativo a um component deve estar dentro do redux;
- Não podemos alterar o estado do Redux sem uma action;
- As _actions_ e reducers são funções puras, não lidam com side-effects assíncronas. Não fazerm requisições a API's;
- Qualquer regra de negócio deve ficar no reducer e não na action;
