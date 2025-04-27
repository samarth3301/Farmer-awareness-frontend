import React from 'react';
import { MessageSquare, Users, BookOpen, PhoneCall } from 'lucide-react';
import Section from '../components/ui/Section';
import ContactForm from '../components/ContactForm';

const ExpertHelp: React.FC = () => {
  return (
    <div className="pt-16"> {/* Padding top to account for the fixed navbar */}
      <div className="relative overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/5648416/pexels-photo-5648416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Agricultural expert discussing with farmer" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl font-bold text-white mb-4">Expert Help</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get personalized assistance from agricultural specialists for your farming challenges
            </p>
          </div>
        </div>
      </div>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">How We Can Help You</h2>
          <p className="text-gray-700 mb-8 text-center">
            Our team of agricultural experts is ready to assist you with personalized advice on sustainable farming practices, 
            pesticide management, soil health, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800">Personalized Consultations</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Get one-on-one advice tailored to your specific farming conditions, crop types, and challenges. Our experts 
                will analyze your situation and provide actionable recommendations.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Soil health assessment and improvement strategies</li>
                <li>Pest and disease management with minimal chemical use</li>
                <li>Water management and conservation techniques</li>
                <li>Crop selection based on local climate and soil conditions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Community Workshops</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Join our regular workshops and training sessions conducted in villages across the country. Learn alongside 
                other farmers and share experiences and solutions.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Hands-on demonstrations of sustainable farming techniques</li>
                <li>Safe pesticide handling and application methods</li>
                <li>Organic farming practices and certification</li>
                <li>Modern agricultural technologies adapted for small farmers</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-amber-800">Educational Resources</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Access our comprehensive library of farming guides, videos, and informational materials in multiple Indian languages. 
                All resources are designed to be practical and easy to implement.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Season-specific farming calendars</li>
                <li>Illustrated guides on pest identification</li>
                <li>Video tutorials on sustainable farming practices</li>
                <li>Regional crop management recommendations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <PhoneCall className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-800">Helpline Support</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Get immediate assistance through our dedicated farmer helpline. Our experts are available to answer your 
                questions and provide guidance when you need it most.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Emergency advice for pest outbreaks</li>
                <li>Guidance on weather-related farming decisions</li>
                <li>Information on government schemes and subsidies</li>
                <li>Market linkage and price information</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section bgColor="green">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Meet Our Experts</h2>
            <p className="text-gray-700">
              Our team consists of experienced agricultural scientists, extension officers, and field practitioners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3912368/pexels-photo-3912368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dr. Sharma" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-800 mb-1">Dr. Rajesh Sharma</h3>
                <p className="text-gray-600 text-sm mb-2">Soil Science Specialist</p>
                <p className="text-gray-700 text-sm">
                  20+ years of experience in soil health management and sustainable fertilization techniques.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5648392/pexels-photo-5648392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dr. Patel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-800 mb-1">Dr. Anita Patel</h3>
                <p className="text-gray-600 text-sm mb-2">Plant Protection Expert</p>
                <p className="text-gray-700 text-sm">
                  Specialist in integrated pest management and reducing chemical pesticide dependence.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5745010/pexels-photo-5745010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mr. Singh" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-800 mb-1">Mr. Gurpreet Singh</h3>
                <p className="text-gray-600 text-sm mb-2">Agricultural Extension Officer</p>
                <p className="text-gray-700 text-sm">
                  Field practitioner with extensive experience helping farmers transition to sustainable methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Get in Touch</h2>
            <p className="text-gray-700">
              Fill out the form below to connect with our agricultural experts
            </p>
          </div>
          
          <ContactForm />
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-green-800 mb-4">Or Reach Us Directly</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="flex items-center justify-center">
                <PhoneCall className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">Helpline: 1800-123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">experts@agrismart.in</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ExpertHelp;