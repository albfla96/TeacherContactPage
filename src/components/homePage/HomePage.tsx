import React from 'react';
import ContactCard from '../contactPage/ContactPage';

const Home: React.FC = () => {

  const teacherData = {
    name: 'Duamnisoara Uana',
    email: 'nusespune'
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <ContactCard teacher={teacherData} />
    </div>
  );
};

export default Home;