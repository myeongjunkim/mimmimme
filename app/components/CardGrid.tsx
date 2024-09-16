import React from 'react';
import Card from './Card';

interface CardGridProps {
  cards: { text: string; image: string }[];
  onCardClick: (index: number) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, onCardClick }) => {
  // 랜덤한 높이 비율을 생성하는 함수
  const getRandomAspectRatio = () => {
    const ratios = [0.75, 1, 1.25, 1.5]; // 다양한 높이 비율
    return ratios[Math.floor(Math.random() * ratios.length)];
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <div key={index} className="w-full">
          <Card 
            text={card.text} 
            image={card.image}
            onClick={() => onCardClick(index)}
            aspectRatio={getRandomAspectRatio()}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;