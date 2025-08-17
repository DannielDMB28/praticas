const usuarioCerto = 'Daniel';
const senhaCerta = '1234';

let usuario = prompt('Digite usuario: ');
let senha = prompt('Digite sua senha: ');

if (usuario === usuarioCerto && senha === senhaCerta) {
  alert(`Login realizado com sucesso! Bem-vindo, ${usuario}!`);
} else {
  alert(`Usuário ou senha incorretos. Tente novamente.`);
}