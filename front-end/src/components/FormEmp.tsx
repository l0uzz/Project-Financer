//import { useState } from 'react'
import axios from "axios";
import "../styles/global.css";
import ResultForm from "./ResultForm";
import { SetStateAction, useState } from "react"; // import para criação de fluxos (estados de tela)
import { ArrowRight } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface formEmptyParams {
  id: number;
  user_id: number;
  saldoDevedor: number;
  juros: string;
  saldoDevedorAjustado: number;
  valorParcela: number;
  vencimento: string;
}

export default function FormEmp() {
  const estados = ["SP", "RJ", "ES", "MG"];

  const [cpf, setSelectedCPF] = useState("");
  const [uf, setSelectedEstado] = useState("");
  const [dataNascimento, setSelectedDataNascimento] = useState("");
  const [valorEmprestimo, setSelectedValorEmprestimo] = useState("");
  const [valorPagoPorMes, setSelectedValorPorMes] = useState("");
  const [lendings, setSelectedLending] = useState<formEmptyParams>();
  const [vezes, setVezes] = useState<number>(0);

  const create = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3030/createUserBeforeLending",
        {
          cpf,
          uf,
          dataNascimento,
          valorEmprestimo,
          valorPagoPorMes,
        }
      );

      const { lending }: { lending: formEmptyParams } = response.data;

      const quantidadeDeParcelas =
        Number(valorEmprestimo.replace(",", ".")) /
        Number(valorPagoPorMes.replace(",", "."));

      console.log(quantidadeDeParcelas);

      setVezes(quantidadeDeParcelas);
      setSelectedLending(lending);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange0 = (e1: { target: { value: SetStateAction<string> } }) => {
    const legal = e1.target.value;
    setSelectedCPF(legal);
  };

  const handleChange1 = (e2: { target: { value: SetStateAction<string> } }) => {
    const legal2 = e2.target.value;
    setSelectedEstado(legal2);
  };

  const handleChange2 = (e3: { target: { value: SetStateAction<string> } }) => {
    const legal3 = e3.target.value;
    setSelectedDataNascimento(legal3);
  };

  const handleChange3 = (e4: { target: { value: SetStateAction<string> } }) => {
    const legal4 = e4.target.value;
    setSelectedValorEmprestimo(legal4);
  };

  const handleChange4 = (e5: { target: { value: SetStateAction<string> } }) => {
    const legal5 = e5.target.value;
    setSelectedValorPorMes(legal5);
  };

  const notify = () => toast("Emprestimo Aprovado!!");

  return (
    <>
      <div className="h-screen flex justify-center bg-pattern bg-no-repeat bg-center mb-52">
        <div className="max-w-5xl px-6 text-center space-y-10">
          <div className="flex flex-col items-center gap-3">
            <p className="font- text-zinc-500 text-4xl mt-14">
              Simule e solicite o seu empréstimo.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="font- text-zinc-950 font-bold text-xl mt-14">
              Preencha o formulário abaixo para simular
            </p>
          </div>
          <div className="w-[967px] h-[535px] bg-zinc-50 rounded-sm">
            <div className="flex items-center gap-9 flex-1 flex-col h-full p-11">
              <input
                id="cpf"
                value={cpf}
                onChange={handleChange0}
                type="text"
                placeholder="CPF"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <select
                id="estado"
                value={uf}
                onChange={handleChange1}
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              >
                <option value="" className="text-gray-500/95">
                  Selecione...
                </option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
              <input
                id="dataNascimento"
                value={dataNascimento}
                onChange={handleChange2}
                type="text"
                placeholder="DATA DE NASCIMENTO"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <input
                id="valorEmprestimo"
                value={valorEmprestimo}
                onChange={handleChange3}
                type="text"
                placeholder="QUAL O VALOR DO EMPRÉSTIMO"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <input
                id="valorPorMes"
                value={valorPagoPorMes}
                onChange={handleChange4}
                type="text"
                placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <button
                type="submit"
                onClick={create}
                className="bg-orange-400 text-zinc-50 w-full justify-center rounded-lg px-2 h-11 font-medium flex items-center gap-2 hover:bg-orange-500"
              >
                SIMULAR
              </button>
            </div>
          </div>

          <p className="text-zinc-950 font-bold text-xl mt-14">
            Veja a simulação para o seu empréstimo antes de efetivar
          </p>
        </div>
      </div>
      <div className="h-screen flex justify-center bg-pattern bg-no-repeat bg-center mb-52">
        <div className="max-w-5xl px-6 text-center space-y-10">
          <div className="w-[967px] h-[874px] bg-zinc-50 rounded-md">
            <div className="flex items-center gap-9 flex-1 flex-col h-full p-11 space-y-2">
              <div className="min-w-full flex flex-wrap gap-10 uppercase">
                <div className="flex flex-col text-start gap-2">
                  <h1 className="w-[15.5rem]">Valor requerido</h1>
                  <span className="font-bold text-black w-[15.5rem] text-xl">
                    R$ {lendings?.saldoDevedor || "0"}
                  </span>
                </div>
                <div className="flex flex-col text-start gap-2">
                  <h1 className="w-[15.5rem]">Taxa de juros</h1>
                  <span className="font-bold text-black w-[15.5rem] text-xl">
                    {lendings?.juros || "1"}% ao mês
                  </span>
                </div>
                <div className="flex flex-col text-start gap-2">
                  <h1 className="w-[18rem]">Valor que deseja pagar por mês</h1>
                  <span className="font-bold text-black w-[15.5rem] text-xl">
                    R$ {lendings?.valorParcela || "0"}
                  </span>
                </div>
                <div className="flex flex-col text-start gap-2">
                  <h1 className="w-[15.5rem]">total de meses para quitar</h1>
                  <span className="font-bold text-black w-[15.5rem] text-xl">
                    {vezes} meses
                  </span>
                </div>
                <div className="flex flex-col text-start gap-2">
                  <h1 className="w-[15.5rem]">Total de juros</h1>
                  <span className="font-bold text-black w-[15.5rem] text-xl">
                    R${" "}
                    {lendings
                      ? lendings?.saldoDevedorAjustado - lendings?.saldoDevedor
                      : "0"}
                  </span>
                </div>
                <div className="flex flex-col text-start gap-2">
                  <h1 className="w-[15.5rem]">Total a pagar</h1>
                  <span className="font-bold text-black w-[15.5rem] text-xl">
                    R$ {lendings?.saldoDevedorAjustado || "0"}
                  </span>
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="w-full text-start">
                    PROJEÇÃO DAS PARCELAS:
                  </label>
                  <table className="w-full text-start">
                    <thead className="w-full flex justify-between gap-7 border-b border-gray-300 py-5">
                      <tr className="w-full gap-7 flex justify-between">
                        <th>SALDO DO DEVEDOR</th>
                        <th>JUROS</th>
                        <th>SALDO DEVEDOR AJUSTADO</th>
                        <th>VALOR DA PARCELA</th>
                        <th>VENCIMENTO</th>
                      </tr>
                    </thead>
                    <tbody className="w-full flex items-center justify-between flex-col">
                      {lendings &&
                        Array.from({ length: Math.ceil(vezes) }).map(
                          (_, index) => {
                            return (
                              <ResultForm lendings={lendings} key={index} />
                            );
                          }
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
              <button
                type="submit"
                onClick={notify}
                className="tracking-widest bg-green-500 text-lime-50 w-[554px] h-[44px] justify-center rounded-lg py-2 px-5 font-medium flex items-center gap-2 hover:bg-green-600"
              >
                EFETIVAR EMPRESTIMO
                <ArrowRight className="size-5 text-green-50" />
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*function getFormDataToResultForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }*/

/*function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }*/

/*function removeEmailsToInvite(emailsToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailsToRemove
    );

    setEmailsToInvite(newEmailList);
  }*/
