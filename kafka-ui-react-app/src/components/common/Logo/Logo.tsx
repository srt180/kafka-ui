import React from 'react';
import logo from '/favicon/apple-touch-icon.png'; // 根据实际路径修改

const Logo: React.FC = () => {
  return (
    <img src={logo} alt="Logo" width={32} height={32} />
  );
};

export default Logo;