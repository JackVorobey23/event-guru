import { faUser } from '@fortawesome/free-solid-svg-icons';
import IconInput from '../ui/Input';
import Button from '../ui/Button';
import { useState } from 'react';
import { login, validateCredentials } from './utils';
import { useNavigate } from 'react-router';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const errs = validateCredentials(email, password);
    if (errs.length) {
      setErrors(errs);
      return;
    }
    const a = await login(email, password);

    if ('code' in a) {
      setErrors([a.message]);
    } else {
      navigate('/events');
    }
  };
  return (
    <div className="gap-2 flex flex-col">
      <IconInput
        icon={faUser}
        inputElem={
          <input
            placeholder="Email..."
            className="placeholder:text-green-800"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        }
      />
      <IconInput
        icon={faUser}
        inputElem={
          <input
            type="password"
            placeholder="Password"
            className="placeholder:text-green-800"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        }
      />
      <div>
        {errors &&
          errors.map((err, i) => (
            <div key={`err-${i}`} className="text-red-400">
              {err}
            </div>
          ))}
      </div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
