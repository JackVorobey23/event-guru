import AuthLayout from "@components/Auth/AuthLayout";
import EventsHome from "@components/EventsHome";
import Login from "@components/Auth/Login";
import SignUp from "@components/Auth/SignUp";
import EventPage from "@components/Event/[eventId]";
import Trending from "@components/Trending";
import { Route, Routes } from "react-router";
import BubblePage from "@components/Layout";
import New from "@components/Event/New";
import HomeScreen from "@components/HomeScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useAppDispatch } from "@redux/store";
import { selectAuth, setUser } from "@redux/slices/authSlice";
import { useSelector } from "react-redux";

export default function App() {
  const dispatch = useAppDispatch();
  const { userInfo } = useSelector(selectAuth);
  useEffect(() => {
    auth.onAuthStateChanged((dam) => {
      if (dam) {
        const { email, emailVerified, refreshToken, uid } = {
          ...dam,
        };
        dispatch(
          setUser({ email, emailVerified, refreshToken, uid, events: [] })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<BubblePage />}>
        <Route index element={<HomeScreen />} />

        {userInfo ? (
          <Route path="events">
            <Route index element={<EventsHome />} />
            <Route path=":eventId" element={<EventPage />} />
            <Route path="trending" element={<Trending />} />
            <Route path="new" element={<New />} />
          </Route>
        ) : (
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        )}
      </Route>
    </Routes>
  );
}
