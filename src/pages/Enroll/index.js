import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';

import EventInfoContext from '../../contexts/EventInfoContext';

import useSignUp from '../../hooks/api/useSignUp';

export default function Enroll() {
  const [form, setForm] = useState({});

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  const { eventInfo } = useContext(EventInfoContext);

  async function submit(event) {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(form.email, form.password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input
            label="E-mail"
            type="text"
            name="email"
            fullWidth
            value={form.email}
            onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            fullWidth
            value={form.password}
            onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
          />
          <Input
            label="Repita sua senha"
            type="password"
            name="confirmPassword"
            fullWidth
            value={form.confirmPassword}
            onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>
            Inscrever
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
