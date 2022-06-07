import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Example } from '@/pages';

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example title="Usuário não autenticado" />} />
      </Routes>
    </BrowserRouter>
  );
};
