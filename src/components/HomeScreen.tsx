import { auth } from '@/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function HomeScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    auth.authStateReady().then(() => {
      if (auth.currentUser) {
        navigate('/events');
      } else {
        navigate('/auth/login');
      }
    });
  }, []);
  return <div></div>;
}
