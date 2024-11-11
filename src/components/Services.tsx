import React from 'react';
import Image from 'next/image';
import { services } from '@/constants/services';

const ServicesSection = () => {
  return (
    <section className="relative z-10 w-full px-4 py-16 bg-black" id="services">
        <div className='w-full max-w-8xl mx-auto px-4 py-16 bg-black'>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of tailoring and textile services. 
          Each service is delivered with expertise, attention to detail, and commitment to quality.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.title}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
          >
            {/* Image Preview */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <Image
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <div className="bg-blue-600 rounded-full p-2 inline-block mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <button className="mt-6 w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ServicesSection;