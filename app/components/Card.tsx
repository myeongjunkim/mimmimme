import React from 'react';
import Image from 'next/image';

interface CardProps {
  text: string;
  image: string;
  onClick: () => void;
  aspectRatio: number;
}

const Card: React.FC<CardProps> = ({ text, image, onClick, aspectRatio }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden flex flex-col"
      onClick={onClick}
    >
      <div className="relative w-full" style={{ paddingTop: `${aspectRatio * 100}%` }}>
        <Image 
          src={image} 
          alt={text} 
          layout="fill" 
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Card;