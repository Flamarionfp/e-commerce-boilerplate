import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages';

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Welcome to E-commerce Boilerplate" />} />
      </Routes>
    </BrowserRouter>
  );
};
