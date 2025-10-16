import React from 'react';
import VansList from '../common/VansList/VansList';
import './Vans.css';

const Vans: React.FC = () => {
  return (
    <div className="hostvans">
      <VansList />
    </div>
  );
};

export default Vans;