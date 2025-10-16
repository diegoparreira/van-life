import React from 'react';
import VansList from '../common/VansList/VansList';
import './Vans.css';
import { useNavigate } from 'react-router-dom';

const Vans: React.FC = () => {
  const navigate = useNavigate();

  function handleClick(id: number) {
    navigate(`/host/vans/${id}`);
  }

  return (
    <div className="hostvans">
      <VansList onClick={handleClick} />
    </div>
  );
};

export default Vans;