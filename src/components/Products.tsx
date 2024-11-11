"use client";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { Camera, Code, Music, Image as ImageIcon, MessageCircle, FileText, Settings, Star } from 'lucide-react';


const Products = () => {
  return (
    <section className="relative bg-black min-h-[80dvh] p-10 z-10 text-white">
      <header>
        <h4 className="text-3xl font-bold mb-2">Our Products</h4>
        <span className="text-sm">
        Discover excellence in every detail with our carefully curated product line.
        </span>
      </header>
      <div className="mt-20 ">
        <BentoGrid />
      </div>
    </section>
  );
};

export default Products;


const BentoGrid = () => {
  const items = [
    {
      title: "Photography",
      description: "Capture life's precious moments",
      icon: <Camera className="w-6 h-6" />,
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Development",
      description: "Clean & efficient code",
      icon: <Code className="w-6 h-6" />,
      className: "md:col-span-1"
    },
    {
      title: "Music",
      description: "Rhythm and melody",
      icon: <Music className="w-6 h-6" />,
      className: "md:col-span-1"
    },
    {
      title: "Gallery",
      description: "Visual storytelling",
      icon: <ImageIcon className="w-6 h-6" />,
      className: "md:col-span-2"
    },
    {
      title: "Chat",
      description: "Stay connected",
      icon: <MessageCircle className="w-6 h-6" />,
      className: "md:col-span-1"
    },
    {
      title: "Documents",
      description: "Organize your files",
      icon: <FileText className="w-6 h-6" />,
      className: "md:col-span-1"
    },
    {
      title: "Settings",
      description: "Customize your experience",
      icon: <Settings className="w-6 h-6" />,
      className: "md:col-span-1"
    },
    {
      title: "Featured",
      description: "Top rated content",
      icon: <Star className="w-6 h-6" />,
      className: "md:col-span-1"
    }
  ];

  return (
    <div className="w-full max-w-full mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl ${item.className}`}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <button className="hover:text-gray-700 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
