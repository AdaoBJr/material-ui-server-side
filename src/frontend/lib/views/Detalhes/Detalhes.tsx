import React from 'react';

interface DetalhesProps {
  docId: string;
}

const Detalhes: React.FC<DetalhesProps> = ({ docId }) => {
  return <h1 style={{ color: 'black' }}>DETALHE ID {docId}</h1>;
};

export default Detalhes;
