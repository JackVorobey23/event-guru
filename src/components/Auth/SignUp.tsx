import { faUser } from '@fortawesome/free-solid-svg-icons';
import IconInput from '../ui/Input';
import Button from '../ui/Button';
import { signUp, validateCredentials } from './utils';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const errs = validateCredentials(email, password);
    if (errs.length) {
      setErrors(errs);
      return;
    }
    const a = await signUp(email, password);

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
      <Button onClick={handleSignUp}>Sign Up</Button>
    </div>
  );
}
