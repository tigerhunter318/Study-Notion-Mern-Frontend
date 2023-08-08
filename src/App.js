import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import About from './pages/About'
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/common/Navbar';
import PublicRoute from './components/core/Auth/PublicRoute';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import { getCurrentUser } from './services/operations/profileServices';
import DashBoard from './pages/DashBoard';
import MyProfile from './components/core/Dashboard/MyProfile';
import Settings from './components/core/Dashboard/Settings/Settings';
import Cart from './components/core/Dashboard/Cart';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';
import PurchaseHistory from './components/core/Dashboard/PurchaseHistory';

function App() {

  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getCurrentUser(token, dispatch, navigate);
    }
  }, [token, dispatch, navigate]);

  return (
    <div className="bg-richblack-900 min-h-screen flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

        <Route path='/login' element={<PublicRoute route={<LogIn />} />} />
        <Route path='/signup' element={<PublicRoute route={<SignUp />} />} />
        <Route path='/verify-email' element={<PublicRoute route={<VerifyEmail />} />} />
        <Route path='/forgot-password' element={<PublicRoute route={<ForgotPassword />} />} />
        <Route path='/reset-password' element={<PublicRoute route={<ResetPassword />} />} />


        {/* Dashboard nested routes - Default route set to - dashboard/my-profile */}
        <Route path='dashboard' element={<PrivateRoute route={<DashBoard />} />} >

          <Route index element={<Navigate to={'my-profile'} />} />
          <Route path='my-profile' element={<MyProfile />} />
          <Route path='settings' element={<Settings />} />
          <Route path='cart' element={<Cart />} />
          <Route path='enrolled-courses' element={<EnrolledCourses />} />
          <Route path='purchase-history' element={<PurchaseHistory />} />

        </Route>



        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
