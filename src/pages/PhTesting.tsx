import React from 'react';
import { Info, AlertTriangle } from 'lucide-react';
import Section from '../components/ui/Section';
import PhTestingTool from '../components/PhTestingTool';

const PhTesting: React.FC = () => {
  return (
    <div className="pt-16"> {/* Padding top to account for the fixed navbar */}
      <div className="relative overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/5528960/pexels-photo-5528960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Soil testing" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl font-bold text-white mb-4">Soil pH Testing</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Understanding your soil's pH is the first step toward optimal fertilization and crop selection
            </p>
          </div>
        </div>
      </div>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Why Soil pH Matters</h2>
          <p className="text-gray-700 mb-6">
            Soil pH is a measure of how acidic or alkaline your soil is, on a scale from 0 to 14. This single number has 
            a profound impact on nutrient availability, microbial activity, and ultimately, plant growth and crop yields.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Effects of Soil pH</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Nutrient Availability:</strong> Most essential nutrients are optimally available in the pH range of 6.0 to 7.5. Outside this range, nutrients may become locked in the soil and unavailable to plants.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Microbial Activity:</strong> Beneficial soil microorganisms thrive at neutral pH levels. These microbes help break down organic matter and convert nutrients into forms plants can use.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Plant Growth:</strong> Each crop has an optimal pH range. Growing plants in soil with inappropriate pH can lead to stunted growth, nutrient deficiencies, and reduced yields.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  <span><strong>Pesticide Effectiveness:</strong> The effectiveness of many pesticides and herbicides is influenced by soil pH. Incorrect pH can reduce their efficacy or increase their persistence in soil.</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7728082/pexels-photo-7728082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Soil testing in laboratory" 
                className="rounded-lg shadow-md h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-10 border-l-4 border-blue-500">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-blue-800 mb-2">The pH Scale for Soil</h3>
                <div className="relative h-8 bg-gradient-to-r from-red-500 via-green-500 to-purple-500 rounded-md mb-3">
                  <div className="absolute top-full pt-1 left-0 text-xs font-medium">pH 0</div>
                  <div className="absolute top-full pt-1 left-1/4 text-xs font-medium">pH 3.5</div>
                  <div className="absolute top-full pt-1 left-2/4 transform -translate-x-1/2 text-xs font-medium">pH 7 (Neutral)</div>
                  <div className="absolute top-full pt-1 left-3/4 text-xs font-medium">pH 10.5</div>
                  <div className="absolute top-full pt-1 right-0 text-xs font-medium">pH 14</div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-red-100 p-2 rounded-md">
                    <p className="font-medium text-red-800">Acidic Soil</p>
                    <p className="text-gray-700">pH below 6.5</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-md">
                    <p className="font-medium text-green-800">Neutral Soil</p>
                    <p className="text-gray-700">pH 6.5 - 7.5</p>
                  </div>
                  <div className="bg-purple-100 p-2 rounded-md">
                    <p className="font-medium text-purple-800">Alkaline Soil</p>
                    <p className="text-gray-700">pH above 7.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section bgColor="green">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Soil pH Testing Tool</h2>
            <p className="text-gray-700">
              Enter your soil's pH value to get tailored recommendations for fertilizers and crops
            </p>
          </div>
          
          <PhTestingTool />
        </div>
      </Section>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">How to Test Your Soil's pH</h2>
          
          <div className="mb-8">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-amber-800">Before You Begin</h3>
                  <p className="text-gray-700">
                    For accurate results, collect soil samples from multiple locations in your field at a depth of 
                    15-20 cm. Mix them thoroughly before testing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-4">Using a Home Testing Kit</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li className="text-gray-700">
                    <span className="font-medium">Collect soil samples</span> from different parts of your field
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Remove any plant material or stones</span> from the samples
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Mix the samples thoroughly</span> to create a composite sample
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Follow the instructions</span> provided with your pH testing kit (typically involving mixing soil with a solution and comparing the color to a chart)
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Record your results</span> and use our tool above for recommendations
                  </li>
                </ol>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-4">Professional Soil Testing</h3>
                <p className="text-gray-700 mb-4">
                  For more accurate and comprehensive results, consider sending soil samples to a professional laboratory. 
                  These tests provide detailed information about:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">Precise pH measurement</li>
                  <li className="text-gray-700">Macronutrient levels (N, P, K)</li>
                  <li className="text-gray-700">Micronutrient availability</li>
                  <li className="text-gray-700">Organic matter content</li>
                  <li className="text-gray-700">Soil texture analysis</li>
                  <li className="text-gray-700">Fertilizer recommendations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-4">Adjusting Your Soil pH</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-amber-700 mb-2">To Raise pH (Make Soil Less Acidic)</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">
                    <span className="font-medium">Agricultural lime (calcium carbonate)</span>: Most common amendment to raise pH
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Dolomitic lime</span>: Contains magnesium and calcium, good for magnesium-deficient soils
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Wood ash</span>: Can raise pH but should be used cautiously as it's very alkaline
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Oyster shell flour</span>: Slowly releases calcium and gradually raises pH
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-2">To Lower pH (Make Soil Less Alkaline)</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">
                    <span className="font-medium">Elemental sulfur</span>: Most effective for lowering pH significantly
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Aluminum sulfate</span>: Works more quickly than elemental sulfur
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Iron sulfate</span>: Lowers pH and adds iron, beneficial for many plants
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Acidic organic matter</span>: Pine needles, oak leaves, and peat moss can gradually lower pH
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700 italic">
                <strong>Note:</strong> pH adjustment is not immediate and may take several months. It's best to make gradual changes 
                over time rather than attempting to drastically alter soil pH in a single application.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PhTesting;