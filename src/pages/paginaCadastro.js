// src/pages/cadastro.jsx
import { useState } from 'react';
import  FormValidacao from '../components/FormValidacao';
import FormSenha from '../components/FormSenha';

export default function PaginaCadastro() {
  const [step, setStep] = useState(1);
  const [usuarioValidado, setUsuarioValidado] = useState(null);

  const irParaProximaEtapa = (dadosDoUsuario) => {
    setUsuarioValidado(dadosDoUsuario);
    setStep(2);
  };

  return (
    <div className="container-cadastro">
      {step === 1 ? (
        <FormValidacao onSucesso={irParaProximaEtapa} />
      ) : (
        <FormSenha usuarioValidado={usuarioValidado} />
      )}
    </div>
  );
}
