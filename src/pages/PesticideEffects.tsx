import React from 'react';
import { AlertTriangle, ThumbsUp, Info } from 'lucide-react';
import Section from '../components/ui/Section';
import ComparisonTable from '../components/ComparisonTable';

const PesticideEffects: React.FC = () => {
  const pesticideComparisonData = [
    {
      name: 'Chemical Insecticides',
      harmful: [
        'Contamination of groundwater and soil',
        'Harm to beneficial insects like bees and butterflies',
        'Potential health risks to farmers during application',
        'Residues in harvested crops',
        'Development of resistant pest populations'
      ],
      useful: [
        'Quick control of severe pest outbreaks',
        'Effective against multiple pest species',
        'Longer shelf life and stability',
        'Relatively low cost per application'
      ]
    },
    {
      name: 'Herbicides',
      harmful: [
        'Damage to non-target plants and crops',
        'Persistence in soil affecting future plantings',
        'Can leach into water sources',
        'Some linked to health issues',
        'May promote herbicide-resistant weeds'
      ],
      useful: [
        'Efficient weed control in large fields',
        'Reduces need for manual labor',
        'Can be used in no-till farming systems',
        'Helps prevent yield loss from weed competition'
      ]
    },
    {
      name: 'Fungicides',
      harmful: [
        'May affect soil microorganisms',
        'Potential toxicity to aquatic organisms',
        'Some fungal pathogens develop resistance',
        'Can harm beneficial fungi in soil'
      ],
      useful: [
        'Controls devastating fungal diseases',
        'Prevents crop losses during wet seasons',
        'Extended shelf life for harvested crops',
        'Can be used preventatively before infection'
      ]
    },
    {
      name: 'Biopesticides',
      harmful: [
        'Generally less effective than chemical alternatives',
        'May need more frequent application',
        'Shorter shelf life',
        'May be less effective in severe infestations'
      ],
      useful: [
        'Lower environmental impact',
        'Minimal residues on crops',
        'Safe for beneficial insects and pollinators',
        'Reduced health risks for farmers',
        'Can be used closer to harvest time'
      ]
    },
    {
      name: 'Neem-based Products',
      harmful: [
        'Slow-acting compared to synthetic pesticides',
        'Requires precise timing for effectiveness',
        'Deteriorates faster in sunlight',
        'May need frequent reapplication'
      ],
      useful: [
        'Completely biodegradable',
        'Multiple modes of action against pests',
        'Safe for most beneficial insects',
        'Can be prepared locally',
        'Improves soil health'
      ]
    },
  ];

  return (
    <div className="pt-16"> {/* Padding top to account for the fixed navbar */}
      <div className="relative overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/4501177/pexels-photo-4501177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Pesticide spraying" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl font-bold text-white mb-4">Effects of Pesticides</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Understanding the impact of pesticides on our soil, water, health, and ecosystem
            </p>
          </div>
        </div>
      </div>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-4">The Growing Problem of Pesticide Overuse in India</h2>
          <p className="text-gray-700 mb-6">
            India is one of the largest agricultural producers in the world, and the use of pesticides has been crucial 
            for protecting crops and ensuring food security. However, the overuse and misuse of pesticides has become a 
            serious concern, with far-reaching consequences for the environment, farmers, and consumers.
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-red-800">Alarming Statistics</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>India uses over 58,000 tonnes of pesticides annually</li>
                  <li>Over 40% of pesticides used in India are classified as hazardous by the WHO</li>
                  <li>Pesticide residues have been detected in 50% of food samples in various studies</li>
                  <li>Less than 1% of farmers receive proper training on pesticide application</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Environmental Impact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Soil degradation and loss of natural fertility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Contamination of groundwater and surface water bodies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Death of beneficial insects, including pollinators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Disruption of natural ecosystems and biodiversity loss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Development of resistant pest species</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-3">Health Impact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Acute poisoning among farmers during application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Chronic health issues for farming communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Residues in food affecting consumer health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Neurological and hormonal disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Potential links to cancer and reproductive issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section bgColor="green">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-3">Comparing Harmful and Useful Pesticides</h2>
            <p className="text-gray-700">
              Not all pesticides are created equal. Understanding the difference between harmful chemical pesticides and 
              safer alternatives can help farmers make better choices for their crops, health, and environment.
            </p>
          </div>
          
          <ComparisonTable items={pesticideComparisonData} />
          
          <div className="mt-10 bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-blue-800 mb-2">Understanding Pesticide Labels</h3>
                <p className="text-gray-700 mb-3">
                  Pesticide labels contain critical information about safe handling, application rates, and potential hazards. 
                  Always look for these key elements on pesticide packaging:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Color Coding:</h4>
                    <ul className="pl-5 space-y-1">
                      <li><span className="inline-block w-4 h-4 bg-red-500 mr-2"></span> <b>Red</b>: Extremely toxic</li>
                      <li><span className="inline-block w-4 h-4 bg-yellow-500 mr-2"></span> <b>Yellow</b>: Highly toxic</li>
                      <li><span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span> <b>Blue</b>: Moderately toxic</li>
                      <li><span className="inline-block w-4 h-4 bg-green-500 mr-2"></span> <b>Green</b>: Slightly toxic</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Key Information:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Active ingredients and concentration</li>
                      <li>Safety precautions during handling</li>
                      <li>Recommended application rate</li>
                      <li>Pre-harvest interval</li>
                      <li>Antidotes in case of poisoning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-3">Sustainable Alternatives</h2>
            <p className="text-gray-700">
              Modern farming offers many effective alternatives to harmful chemical pesticides. 
              These approaches can help maintain crop health while minimizing negative impacts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-500 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-green-800 mb-3">Integrated Pest Management (IPM)</h3>
              <p className="text-gray-700 mb-3">
                A holistic approach that combines multiple pest control strategies based on ecological principles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Monitoring pest populations</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Using resistant crop varieties</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Biological controls</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Targeted chemical use only when necessary</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-500 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-green-800 mb-3">Biopesticides</h3>
              <p className="text-gray-700 mb-3">
                Natural products derived from plants, microorganisms, or minerals that control pests.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Neem oil and extracts</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Bacillus thuringiensis (Bt)</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Trichoderma fungal products</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Pheromone traps</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-500 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-green-800 mb-3">Cultural Practices</h3>
              <p className="text-gray-700 mb-3">
                Traditional farming methods that can prevent pest outbreaks naturally.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Crop rotation</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Companion planting</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Trap crops</span>
                </li>
                <li className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Optimal planting times</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Making the Transition</h3>
            <p className="text-gray-700 mb-4">
              Transitioning to sustainable pest management doesn't have to happen overnight. Farmers can start with these steps:
            </p>
            <ol className="list-decimal pl-8 space-y-2 text-gray-700">
              <li>Begin monitoring pest populations before applying any pesticides</li>
              <li>Try biopesticides on a small portion of your farm to test effectiveness</li>
              <li>Gradually reduce chemical applications while introducing alternatives</li>
              <li>Learn about predatory insects that can help control pests naturally</li>
              <li>Connect with other farmers who have successfully reduced pesticide use</li>
            </ol>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PesticideEffects;