import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import Profile from "./routes/member/Profile";
import { ROUTES } from "./lib/routes";
import NotFound from "./routes/NotFound";
import { lazy } from "react";
import MyPage from "./routes/member/MyPage";
import SignUpForm from "./routes/auth/SignUpForm";

const profiles = lazy(() => import("@/routes/member/Profile"))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path={ROUTES.MEMBER.ROOT}> 
          <Route path={ROUTES.MEMBER.PROFILE} element={<Profile/>} />
        </Route>
          <Route path={ROUTES.MYPAGE} element={<MyPage/>}/>
          <Route path={ROUTES.SIGNUP} element={<SignUpForm/>}/>
      </Route>
    
      

      <Route path={ROUTES.NOT_FOUND} element={<NotFound/>} />
    </Routes>
  );
}
