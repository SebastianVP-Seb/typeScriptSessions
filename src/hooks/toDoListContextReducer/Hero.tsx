import React from 'react';
import { IHeroComp } from './types';

const Hero: React.FC<IHeroComp> = ({title, subtitle}) => {
  return (
    <section className="hero is-link">
      <div className="hero-body">
        <p className="title">
          {title}
        </p>
        {
          subtitle && (
            <p className="subtitle">
              {subtitle}
            </p>
          )
        }
      </div>
  </section>
  );
};

export default Hero;