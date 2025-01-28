import Button from './ui/Button';
import facebookSvg from '@assets/icons/facebook-line.svg';
import instagramSvg from '@assets/icons/instagram-line.svg';
import twitchSvg from '@assets/icons/twitch-line.svg';
import twitterSvg from '@assets/icons/twitter-line.svg';
import { useNavigate } from 'react-router';
import Table from './Event/Table';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { useSelector } from 'react-redux';
import { selectAuth } from '@redux/slices/authSlice';
import useEventsSubscribe from '@/hooks/useEventsSubscribe';

export default function EventsHome() {
  const navigate = useNavigate();
  const { userInfo } = useSelector(selectAuth);

  useEventsSubscribe({ userId: userInfo!.uid });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/auth/login');
    });
  };
  return (
    <div className="flex flex-col p-12 justify-between gap-6 flex-1">
      <div className="flex justify-between">
        <span className="text-5xl font-bold">EventGuru</span>
        <Button onClick={handleSignOut}>Вийти з акаунту</Button>
      </div>
      <div className="flex gap-14 max-xl:flex-col">
        <div className="flex flex-col gap-5 flex-[0]">
          <div className="text-6xl flex lh leading-[80px]">
            Заплануй
            <br />
            неперевершений
            <br />
            івент.
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ut
            tincidunt sit ultricies eu non ut gravida.
          </span>
          <Button
            onClick={() => {
              navigate('./new');
            }}
          >
            Створити подію
          </Button>
        </div>
        <div className="flex-1">
          <Table />
        </div>
      </div>
      <div>
        <span>Ми в соц мережах</span>
        <div className="*:rounded-full *:border *:h-12 *:p-2 flex gap-4">
          {[facebookSvg, instagramSvg, twitchSvg, twitterSvg].map((svg) => (
            <img
              src={svg}
              className="hover:bg-green-200 hover:cursor-pointer transition-all duration-700"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
