import React from 'react';
import Title from './Title';
import shipping from '../assets/shipping-fast.svg';
import hot from '../assets/hot-food.svg';
import fresh from '../assets/fresh-food.svg';
import hat from '../assets/hat-chef.svg';

const features = [
  {
    icon: shipping,
    title: 'Fast Delivery',
    description: 'Get your order quickly with our reliable and efficient service.',
  },
  {
    icon: hot,
    title: 'Hot Foods',
    description: 'Savor freshly prepared, steaming hot meals delivered straight to you.',
  },
  {
    icon: fresh,
    title: 'Fresh Foods',
    description: 'We serve meals made from the freshest and finest ingredients daily.',
  },
  {
    icon: hat,
    title: 'Expert Chefs',
    description: 'Our skilled chefs craft every dish with passion and precision.',
  },
];

const Features = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 xl:py-28 !pb-12">
      {/* Title section */}
      <Title 
        title1="WHY CHOOSE" 
        title2="US" 
        titleStyles="text-center pb-16" 
        paraStyles="!block" 
      />

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 gap-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col gap-3 bg-[#ebf9dc] p-6 py-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img src={feature.icon} alt={feature.title} width={44} height={44} />
            <div className="flex flex-col items-center">
              <h5 className="text-sm md:text-base font-bold mb-1">{feature.title}</h5>
              <hr className="w-8 bg-[#217041] h-1 rounded-full border-none" />
            </div>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
