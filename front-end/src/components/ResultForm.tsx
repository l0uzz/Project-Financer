import "../styles/global.css"; //import icons
import { formEmptyParams } from "./FormEmp";

export default function FormEmp({ lendings }: { lendings: formEmptyParams }) {
  return (
    <tr className="flex justify-between w-full py-5 border-b border-gray-300">
      <td>
        R${" "}
        {lendings.saldoDevedor.toLocaleString("pt-br", {
          currency: "BRL",
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </td>
      <td>{lendings.juros}%</td>
      <td>
        R${" "}
        {lendings.saldoDevedorAjustado.toLocaleString("pt-br", {
          currency: "BRL",
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </td>
      <td>
        R${" "}
        {lendings.valorParcela.toLocaleString("pt-br", {
          currency: "BRL",
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </td>
      <td>{lendings.vencimento}</td>
    </tr>
  );
}

/*const [isGuestsInputOpen] = useState(false); //

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
