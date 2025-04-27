import React from 'react';
import { Sprout, ShieldCheck, AlertCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardContent } from '../components/ui/Card';
import FertilizerCalculator from '../components/FertilizerCalculator';

const Fertilizer: React.FC = () => {
  return (
    <div className="pt-16"> {/* Padding top to account for the fixed navbar */}
      <div className="relative overflow-hidden">
        <img 
          src="https://ik.imagekit.io/aware/Activity%20Tracker/banner-picture-fertilizer-regulation-1024x457.png?updatedAt=1745791894301"
          alt="Fertilizer application" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl font-bold text-white mb-4">Fertilizer Management</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Calculate the right amount of fertilizer for your crops and learn about different fertilizer types
            </p>
          </div>
        </div>
      </div>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Understanding Fertilizers</h2>
          <p className="text-gray-700 mb-6">
            Fertilizers provide essential nutrients that plants need for growth and development. Using the right type and 
            amount of fertilizer is crucial for maximizing crop yields while minimizing environmental impact.
          </p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <div className="bg-green-800 text-white p-4">
              <h3 className="text-xl font-bold">The NPK System</h3>
              <p className="text-green-100">Understanding the three primary macronutrients in fertilizers</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-green-50">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <span className="text-green-800 font-bold text-lg">N</span>
                    </div>
                    <h4 className="text-lg font-semibold text-green-800">Nitrogen</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <span className="font-medium">Function:</span> Promotes leaf and stem growth
                    </li>
                    <li>
                      <span className="font-medium">Deficiency Signs:</span> Yellowing of older leaves
                    </li>
                    <li>
                      <span className="font-medium">Excess Signs:</span> Excessive vegetative growth, weak stems
                    </li>
                    <li>
                      <span className="font-medium">Sources:</span> Urea, ammonium sulfate, blood meal
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <span className="text-blue-800 font-bold text-lg">P</span>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-800">Phosphorus</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <span className="font-medium">Function:</span> Root development, flowering, fruiting
                    </li>
                    <li>
                      <span className="font-medium">Deficiency Signs:</span> Purple discoloration, stunted growth
                    </li>
                    <li>
                      <span className="font-medium">Excess Signs:</span> Zinc deficiency, algae growth in water bodies
                    </li>
                    <li>
                      <span className="font-medium">Sources:</span> DAP, rock phosphate, bone meal
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-4 bg-purple-50">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <span className="text-purple-800 font-bold text-lg">K</span>
                    </div>
                    <h4 className="text-lg font-semibold text-purple-800">Potassium</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <span className="font-medium">Function:</span> Overall plant health, disease resistance
                    </li>
                    <li>
                      <span className="font-medium">Deficiency Signs:</span> Brown leaf edges, weak stems
                    </li>
                    <li>
                      <span className="font-medium">Excess Signs:</span> Calcium and magnesium deficiency
                    </li>
                    <li>
                      <span className="font-medium">Sources:</span> Potash, wood ash, seaweed
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700 text-sm">
                  <strong>How to read NPK ratings:</strong> Fertilizers are labeled with three numbers (e.g., 10-10-10 or 15-30-15) 
                  that represent the percentage by weight of nitrogen (N), phosphorus (P), and potassium (K) in the product. 
                  For example, a 10-10-10 fertilizer contains 10% nitrogen, 10% phosphorus, and 10% potassium.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Types of Fertilizers</h3>
              <div className="space-y-4">
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <Sprout className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Chemical Fertilizers</h4>
                    <p className="text-gray-600 text-sm">
                      Manufactured products with precise nutrient ratios. Fast-acting but can harm soil microbes if overused.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <Sprout className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Organic Fertilizers</h4>
                    <p className="text-gray-600 text-sm">
                      Derived from plant or animal sources. Slow-release nutrients that improve soil structure and microbial activity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <Sprout className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Biofertilizers</h4>
                    <p className="text-gray-600 text-sm">
                      Contain living microorganisms that enhance nutrient availability. Eco-friendly and improve soil health.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <Sprout className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Foliar Fertilizers</h4>
                    <p className="text-gray-600 text-sm">
                      Applied directly to plant leaves for rapid nutrient uptake. Good for addressing deficiencies quickly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Best Practices</h3>
              <div className="space-y-4">
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Soil Testing</h4>
                    <p className="text-gray-600 text-sm">
                      Always test your soil before applying fertilizers to understand what nutrients are needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Right Timing</h4>
                    <p className="text-gray-600 text-sm">
                      Apply fertilizers at the right growth stage of plants when nutrient demand is highest.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Balanced Application</h4>
                    <p className="text-gray-600 text-sm">
                      Avoid excessive application which can lead to nutrient runoff and environmental pollution.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Integrated Approach</h4>
                    <p className="text-gray-600 text-sm">
                      Combine fertilizers with good soil management practices like crop rotation and green manuring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-10">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-amber-800">Environmental Concerns</h3>
                <p className="text-gray-700 mt-1">
                  Fertilizer runoff can cause water pollution and algal blooms in lakes and rivers. To minimize environmental impact:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Apply only the amount needed based on soil tests and crop requirements</li>
                  <li>Avoid application before heavy rainfall</li>
                  <li>Use slow-release formulations to reduce leaching</li>
                  <li>Maintain buffer zones near water bodies</li>
                  <li>Consider organic alternatives where appropriate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section bgColor="green">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Fertilizer Calculator</h2>
            <p className="text-gray-700">
              Calculate the right amount of fertilizer needed for your land area
            </p>
          </div>
          
          <FertilizerCalculator />
        </div>
      </Section>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Fertilizer Recommendations by Crop</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="h-full">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-green-800 mb-3">Cereal Crops</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Rice</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 5:10:10 or 10:26:26, plus zinc sulfate in zinc-deficient soils
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Wheat</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 12:32:16 or 20:20:0, with additional nitrogen during tillering
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Maize</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 10:26:26 or 16:16:16, with split application of nitrogen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-green-800 mb-3">Vegetables</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Leafy Vegetables</h4>
                    <p className="text-gray-600 text-sm">
                      High nitrogen fertilizers like NPK 19:19:19 or 20:10:10
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Tomatoes</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 5:10:10 during early growth, shifting to 3:9:9 for fruiting
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Root Vegetables</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 5:10:10 or 8:16:16, low nitrogen to prevent excessive foliage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-green-800 mb-3">Cash Crops</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Cotton</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 10:26:26 at planting, with additional nitrogen during flowering
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Sugarcane</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 10:26:26 or 14:35:14, with multiple nitrogen applications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Oilseeds</h4>
                    <p className="text-gray-600 text-sm">
                      NPK 12:32:16 or 20:20:0, with sulfur addition for rapeseed/mustard
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-4">Fertilizer Application Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Broadcasting</h4>
                <p className="text-gray-700 mb-2">
                  Spreading fertilizer uniformly across the soil surface.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Best for large areas</li>
                  <li>Easy to implement</li>
                  <li>Less efficient nutrient use</li>
                  <li>Higher risk of runoff</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Band Placement</h4>
                <p className="text-gray-700 mb-2">
                  Applying fertilizer in bands near plant rows.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>More efficient nutrient use</li>
                  <li>Reduces fixation in soil</li>
                  <li>Good for starter fertilizers</li>
                  <li>Requires special equipment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Foliar Application</h4>
                <p className="text-gray-700 mb-2">
                  Spraying liquid fertilizer directly on plant leaves.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Quick nutrient absorption</li>
                  <li>Good for micronutrient deficiencies</li>
                  <li>Can be combined with pesticide application</li>
                  <li>Limited amounts can be applied</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Fertigation</h4>
                <p className="text-gray-700 mb-2">
                  Applying fertilizer through irrigation water.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                  <li>Highly efficient nutrient use</li>
                  <li>Saves labor and time</li>
                  <li>Allows precise application timing</li>
                  <li>Requires irrigation infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Fertilizer;