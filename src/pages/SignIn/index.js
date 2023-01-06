import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup, 
  signInWithCredential,
  fetchSignInMethodsForEmail,
  linkWithCredential
} from 'firebase/auth';
import { auth } from '../../services/firebase';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label, Icons, Google, Github } from '../../components/Auth';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';
import useAuthSignIn from '../../hooks/api/useAuthSignIn';

export default function SignIn() {
  const [form, setForm] = useState({});

  const { loadingSignIn, signIn } = useSignIn();
  const { authSignIn } = useAuthSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(form.email, form.password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  async function authSubmit(email) {
    try {
      const userData = await authSignIn(email);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    
    authSubmit(user.user.email);
  }

  async function handleGithubSignIn() {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider)
      .then( result => {
        authSubmit(result.user.email);
      })
      .catch((error) => {
        const email = error.customData.email;      
        const credential = GithubAuthProvider.credentialFromError(error);

        if (error.code === 'auth/account-exists-with-different-credential') {
          fetchSignInMethodsForEmail(auth, email)
            .then(async providers => {
              const provider = new GoogleAuthProvider();
              provider.setCustomParameters({ login_hint: email });
              const result = await signInWithPopup(auth, provider);
              const googleCred = GoogleAuthProvider.credentialFromResult(result);
            
              signInWithCredential(auth, googleCred)
                .then(async user => {
                  const result = await linkWithCredential(user.user, credential);
                
                  authSubmit(result.user.email);
                });
            });
        }
      });
  }

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
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
            name="password"
            type="password"
            fullWidth
            value={form.password}
            onChange={(e) => handleForm({ name: e.target.name, value: e.target.value })}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>
            Entrar
          </Button>
        </form>
      </Row>
      <Row>
        <p>Ou</p>
        <Icons>
          <Google onClick={handleGoogleSignIn}/>
          <Github onClick={handleGithubSignIn}/>
        </Icons>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
