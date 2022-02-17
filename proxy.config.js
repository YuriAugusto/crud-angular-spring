// essa configuração permite que o backend seja chamado mesmo possuindo
// o domínio 'localhost:8080' diferente do projeto angular 'localhost:4200'
const PROXY_CONFIG = [
  {
    context: ['/api'],// sempre que a rota se iniciar com '/api' o destino de redirecionamento será o backend,
    target: 'http://localhost:8080/',// portanto a URI '/courses' em ex:'/api/courses' define o método da controller a ser invocado
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
