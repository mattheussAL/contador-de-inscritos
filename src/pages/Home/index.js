import React from 'react';

import Progress from '../../components/Progress';

import './style.css';

function Home() {
  return (
    <article className="container">
      <p className="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ipsam in quod unde, tenetur praesentium libero qui aut pariatur, nesciunt accusantium. Totam inventore iste asperiores sapiente distinctio voluptate eaque illum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis esse et! Ad perferendis et quos provident quidem animi enim dolorum, tenetur fuga necessitatibus adipisci laudantium placeat omnis quasi ea.
      </p>

      <div className="subs">
        <p className="count">133</p>
        <p className="label">Inscritos</p>
      </div>
      
      <Progress />
    </article>
  );
};

export default Home;