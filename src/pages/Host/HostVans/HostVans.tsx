import React from 'react';
import './HostVans.css';
import HostVansList from '../HostVansList/HostVansList';

interface HostVansProps {

}

const HostVans: React.FC<HostVansProps> = ({ }) => {
  return (
    <div className="hostvans">
      <HostVansList />
    </div>
  );
};

export default HostVans;