const { where } = require('sequelize');
const { User, Lending } = require('../../models');

const userAndLendingController = {
  createUser: async (req, res) => {
    console.log(req.body);
    const { cpf, uf, dataNascimento, valorEmprestimo, valorPagoPorMes } = req.body;

    if (valorEmprestimo < 50000) {
      return res.status(400).json({ error: 'O valor do empréstimo deve ser maior ou igual a 50000.' });
    }

    try {
      // Criação do usuário
      const user = await User.create({
        cpf,
        uf,
        dataNascimento,
        valorEmprestimo,
        valorPagoPorMes
      });

      // Calcular valores do empréstimo
      const saldoDevedor = valorEmprestimo;
      const jurosPorEstado = {
        SP: 0.008,
        RJ: 0.009,
        ES: 0.0111,
        MG: 0.01,
      };

      const juros = jurosPorEstado[uf] * 100 || 0; // Define uma taxa de juros padrão se o estado não estiver listado
      const saldoDevedorAjustado = saldoDevedor * (1 + juros);
      const valorParcela = valorPagoPorMes;
      const vencimento = new Date();


      vencimento.setMonth(vencimento.getMonth() + 1); // Definir vencimento para o próximo mês



      // Criação do empréstimo
      let lending = await Lending.create({
        user_id: user.id,
        saldoDevedor,
        juros,
        saldoDevedorAjustado,
        valorParcela,
        vencimento: new Date(current.Date.setMonth(currentDate.getMonth() + 1
        )).toISOString().substring(0, 10),
      })
      return res.status(201).json({ user, lending });
    } catch (error) {
      console.error('Erro ao criar usuário e empréstimo:', error);
      return res.status(500).json({ error: 'Erro ao criar usuário e empréstimo.', details: error.message });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.findAll();

      if (!users.length) {
        return res.status(200).json({ message: 'Não existem usuários no banco de dados.' });
      }

      res.status(200).json({ users });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async listLendings(req, res) {
    try {
      const { cpf } = req.query
      const user = await User.findOne({
        where: {
          cpf
        }
      })

      if (!user) {
        return res.status(400).json({ error: 'Usuario Não foi encontrado , verifique o cpf' })
      }

      const lendings = await Lending.findAll({
        where: {
          user_id: user.id
        }
      });

      if (lendings.length === 0) {
        return res.status(200).json({ message: 'Não existem empréstimos no banco de dados.' });
      }

      res.status(200).json({ lendings });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async listApprovedLendings(req, res) {
    try {
      const approvedLending = await Lending.findAll();

      if (!approvedLending.length) {
        return res.status(200).json({ message: 'Não existem empréstimos aprovados no banco de dados.' });
      }

      res.status(200).json({ approvedLending });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = userAndLendingController;