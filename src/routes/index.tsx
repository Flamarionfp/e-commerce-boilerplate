import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import AppRoutes from './App.routes';
import AuthRoutes from './Auth.routes';

const Routes: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.user)

  return isAuth ? <AppRoutes /> : <AuthRoutes />
}

export default Routes