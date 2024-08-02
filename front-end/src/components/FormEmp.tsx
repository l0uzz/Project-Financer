//import { useState } from 'react'
import "/Users/andre/Downloads/@codes/ProjectLetalk/Finance.er/front-end/src/global.css";
import { X, AtSign, Plus, Mail, User } from "lucide-react"; //import icons
import { FormEvent, useState } from "react"; // import para criação de fluxos (estados de tela)

export default function FormEmp() {
  const [isGuestsInputOpen] = useState(false); //
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false); //
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false); //
  const [emailsToInvite, setEmailsToInvite] = useState(["l0uzzdev@gmail.com"]);


  function closeGuestsModal() {
    setIsGuestsModalOpen(false); // -> function to close modal
  }

  function openLendingModal() {
    
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false); // -> function to close modal
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
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
  }

  function removeEmailsToInvite(emailsToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailsToRemove
    );

    setEmailsToInvite(newEmailList);
  }

  return (
    <>
      <div className="h-screen flex justify-center bg-pattern bg-no-repeat bg-center">
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

          <div className="w-[967px] h-[535px] bg-zinc-50">
            <div className="flex items-center gap-9 flex-1 flex-col h-full p-11">
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="CPF"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="UF"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="DATA DE NASCIMENTO"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="QUAL O VALOR DO EMPRÉSTIMO"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="QUAL VALOR DESEJA PAGAR POR MÊS?"
                className="h-[60px] w-[904px] bg-transparent border-gray-400/50 border-2 rounded-md px-2 text-lg placeholder-gray-500/95 outline-none flex-1"
              />
              <button type='button' onClick={openLendingModal} className='flex items-center gap-2 flex-1 text-left'>
              {emailsToInvite.length > 0 ? (
                <span className='text-zinc-100 text-lg flex-1'>
                  
                </span>
              ) : (
                <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
              )}
            </button>
            </div>
          </div>

          <p className="text-zinc-950 font-bold text-xl mt-14">
          Veja a simulação para o seu empréstimo antes de efetivar
          </p>
        </div>

        {isGuestsModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Selecionar convidados
                  </h2>
                  <button type="button" onClick={closeGuestsModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
                <p className="text-sm  text-zinc-400">
                  Os convidados irão receber e-mails para confirmar a
                  participação na viagem.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {emailsToInvite.map((email) => {
                  return (
                    <div
                      key={email}
                      className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                    >
                      <span className="text-zinc-300">{email}</span>
                      <button
                        type="button"
                        onClick={() => removeEmailsToInvite(email)}
                      >
                        <X className="size-4 text-zinc-400" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="w-full h-px bg-zinc-800" />
              <form
                onSubmit={addNewEmailToInvite}
                className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
              >
                <AtSign className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
                <div>
                  <button
                    type="submit"
                    className="bg-violet-600 text-violet-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-violet-400"
                  >
                    Convidar
                    <Plus className="size-5 text-violet-950" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isConfirmTripModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Confirmar criação de viagem{" "}
                  </h2>
                  <button type="button" onClick={closeConfirmTripModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
                <p className="text-sm  text-zinc-400">
                  Para concluir a criação da viagem para{" "}
                  <span className="text-zinc-100 font-semibold">
                    Florianópolis, Brasil
                  </span>{" "}
                  nas datas de{" "}
                  <span className="text-zinc-100 font-semibold">
                    16 a 27 de Agosto de 2024
                  </span>{" "}
                  preencha seus dados abaixo:
                </p>
              </div>

              <form onSubmit={addNewEmailToInvite} className="space-y-3">
                <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <User className="text-zinc-400 size-5" />
                  <input
                    name="text"
                    placeholder="Seu nome completo"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>

                <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Mail className="text-zinc-400 size-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail pessoal"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 text-purple-950 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-violet-400"
                >
                  Confirmar criação da viagem
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
