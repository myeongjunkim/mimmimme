"use client"

import { useState } from 'react';
import Layout from './components/Layout';
import CardGrid from './components/CardGrid';
import ImageSlider from './components/ImageSlider';

const Home: React.FC = () => {
  const cards = [
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos?', image: '/images/img_1.jpg' },
    { text: 'Veniam voluptatum voluptas tempora debitis harum totam vitae hic quos.', image: '/images/img_2.jpg' },
    { text: 'Sequi, eaque suscipit accusamus. Necessitatibus libero, unde a nesciunt repellendus!', image: '/images/img_3.jpg' },
    { text: 'Optio commodi quod vitae, vel officiis similique quaerat odit dicta.', image: '/images/img_4.jpg' },
    { text: 'Dolore itaque deserunt sit, at exercitationem delectus, consequuntur quaerat sapiente.', image: '/images/img_5.jpg' },
    { text: 'Tempora distinctio inventore, nisi excepturi pariatur tempore sit quasi animi.', image: '/images/img_6.jpg' },
    { text: 'Necessitatibus distinctio eos ipsam cum hic temporibus assumenda deleniti, soluta.', image: '/images/img_7.jpg' },
    { text: 'Debitis voluptatum est error nulla voluptate eum maiores animi quasi?', image: '/images/img_8.jpg' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <CardGrid cards={cards} onCardClick={handleCardClick} />
      {isModalOpen && (
        <ImageSlider 
          images={cards.map(card => card.image)} 
          currentIndex={currentImageIndex} 
          closeModal={closeModal} 
        />
      )}
    </Layout>
  );
};

export default Home;