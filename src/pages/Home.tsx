import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplet as Drops, FlaskRound as Flask, Ruler, Users } from 'lucide-react';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="pt-16"> {/* Padding top to account for the fixed navbar */}
      <Hero
        title="Smart Farming for a Sustainable Future"
        subtitle="Learn about safe pesticide use, soil testing, and fertilizer management for healthier crops and better yields"
        imageSrc="https://images.pexels.com/photos/5466460/pexels-photo-5466460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryButtonText="Explore Tools"
        primaryButtonLink="/ph-testing"
        secondaryButtonText="Contact Experts"
        secondaryButtonLink="/expert-help"
      />
      
      <Section bgColor="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Why Sustainable Farming Matters</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Overuse of pesticides is becoming a serious problem in India, affecting soil health, water quality, and human health. 
            Our platform provides tools and knowledge to help farmers make informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="transform transition-transform hover:scale-105">
            <CardContent className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
                <Drops className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pesticide Awareness</h3>
              <p className="text-gray-600 mb-4">
                Learn about the impacts of pesticides on soil, water, and health, and discover safer alternatives.
              </p>
              <Link to="/pesticide-effects" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="transform transition-transform hover:scale-105">
            <CardContent className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
                <Flask className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Soil pH Testing</h3>
              <p className="text-gray-600 mb-4">
                Test your soil's pH level and get customized recommendations for fertilizers and crops.
              </p>
              <Link to="/ph-testing" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Test your soil <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="transform transition-transform hover:scale-105">
            <CardContent className="text-center p-6">
              <div className="bg-amber-100 p-4 rounded-full inline-flex justify-center items-center mb-4">
                <Ruler className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fertilizer Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate the right amount of fertilizer needed for your land area and crop type.
              </p>
              <Link to="/fertilizer" className="inline-flex items-center text-green-600 font-medium hover:text-green-800">
                Calculate now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      <Section bgColor="green">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Sustainable farming" 
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              The Impact of Pesticide Overuse
            </h2>
            <p className="text-gray-700 mb-6">
              Excessive pesticide use in Indian agriculture has led to soil degradation, water contamination, and health issues 
              for farmers and consumers alike. Understanding the difference between harmful and beneficial products is crucial 
              for sustainable farming.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-white p-1 rounded-full mr-3">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700">Soil degradation and loss of natural fertility</p>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-1 rounded-full mr-3">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700">Contamination of groundwater and surface water</p>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-1 rounded-full mr-3">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700">Health risks for farmers and rural communities</p>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/pesticide-effects">
                <Button variant="primary">
                  Learn About Pesticide Effects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      <Section bgColor="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Expert Agricultural Support</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team of agricultural experts is ready to help with your specific farming challenges.
            Get personalized advice on soil management, pesticide use, and sustainable farming practices.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Card className="md:w-1/3">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Expert Consultation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with agricultural scientists and extension officers for personalized advice on your farming challenges.
              </p>
              <Link to="/expert-help">
                <Button variant="outline" className="w-full">
                  Contact Experts
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="md:w-1/3">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Free Resources</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access free guides, videos, and training materials on sustainable farming practices tailored for Indian conditions.
              </p>
              <Button variant="outline" className="w-full">
                Browse Resources
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Home;