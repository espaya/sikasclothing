import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MyHero(){
  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your
            <span className="block text-yellow-400">Style</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover premium fashion that defines modern elegance. 
            Curated collections for the discerning individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Collections
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-pulse delay-500">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  );
};
