import { createRoot } from 'react-dom/client';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { EduMaterials } from './components/EduMaterials/EduMaterials';

const element = document.querySelector('#root');

createRoot(element).render(
  <>
    <Header />
    <Main />
    <EduMaterials />
  </>
);

