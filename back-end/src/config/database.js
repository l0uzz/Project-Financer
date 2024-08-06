module.exports = {
  dialect: 'mysql', //tipo do banco
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'database_development', //nome do banco 
  define: {
    timestamp: true, //salva a data e hora de algum dado adicionado na tabela (salva no campo update at)
    underscored: true, // coloca a letra maiuscula de cada tabela
  }
}