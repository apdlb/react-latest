import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <div>404</div>
      <div>
        <Link to='/'>Volver al inicio</Link>
      </div>
    </>
  );
};

export default NotFound;
