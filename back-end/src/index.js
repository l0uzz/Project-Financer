const express = require('express');
const router = express();
const cors = require('cors')
const { User, Lending } = require('../models');
const userAndLendingController = require('../src/controllers/userAndLendingController')
router.use(cors());
router.use(express.json());


router.post('/createUserBeforeLending', async (req, res) => {
  const { cpf, uf, dataNascimento, valorEmprestimo, valorPagoPorMes, created_at, updated_at } = req.body;
  if (valorEmprestimo < 50000) {
    return res.status(400).json({ error: 'O valor do empréstimo deve ser maior ou igual a 50000.' });
  }

  try {
    const user = await User.create({
      cpf,
      uf,
      dataNascimento,
      valorEmprestimo,
      valorPagoPorMes,
      created_at,
      updated_at
    });

    const saldoDevedor = valorEmprestimo;
    const jurosPorEstado = {
      SP: 0.008,
      RJ: 0.009,
      ES: 0.0111,
      MG: 0.01,
    };
    const juros = jurosPorEstado[uf];
    const saldoDevedorAjustado = saldoDevedor * (1 + juros);
    const valorParcela = valorEmprestimo * 0.01;
    const vencimento = new Date();
    vencimento.setMonth(vencimento.getMonth() + 1);

    const lending = await Lending.create({
      user_id: user.id,
      saldoDevedor,
      juros,
      saldoDevedorAjustado,
      valorParcela,
      vencimento,
      created_at,
      updated_at
    });

    return res.status(201).json({ user, lending });
  } catch (error) {
    console.error('Erro ao criar usuário e empréstimo:', error);
    return res.status(500).json({ error: 'Erro ao criar usuário e empréstimo.', details: error.message });
  }
});

router.get('/user-list', userAndLendingController.listUsers)

router.get('/lending-list', userAndLendingController.listLendings)

router.get('/approvedLending-list', userAndLendingController.listApprovedLendings)




router.listen(3030, () => {
  console.log('Servidor Rodando em (http://localhost/3030)')
})

module.exports = router;