import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocateUs = () => {
  return (
    <section className="relative z-10 text-black bg-white w-full max-w-full mx-auto p-4 py-20">
      <h2 className="text-3xl font-bold mb-12">Where to Find Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          <div className="bg-white p-8 ">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-gray-600">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map Skeleton */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-full min-h-[400px] bg-gray-100 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-2" />
              <p className="text-sm">Map placeholder</p>
              <p className="text-xs text-gray-500">Replace with your preferred map integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocateUs;