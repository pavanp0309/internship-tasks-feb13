import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();
  document.documentElement.scrollTo(0, 0);
  return null;
}