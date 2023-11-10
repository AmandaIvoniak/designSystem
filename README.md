# Components

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep

Para instalar o storybook! 11/2023
Então o que fazer para resolver esse problema?

Apague a pasta packages/docs caso exista
Execute o comando npm create vite@latest docs dentro da pasta packages para iniciar um projeto Vite onde o nome da pasta será docs.
Escolha as opções React e Typescript na configuração do Vite e aguarde a finalização da instalação
Com a instalação finalizada, acessa a pasta packages/docs e execute o comando npx storybook@latest init --package-manager npm
Será perguntado se você deseja instalar o plugin do ESLint, essa instalação é opcional e fica a seu critério.