import React, { useState } from 'react';
import Card, { CardHeader, CardContent, CardFooter } from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';

interface Recommendation {
  pHRange: string;
  soilType: string;
  fertilizers: string[];
  crops: string[];
  additionalAdvice: string;
}

const PhTestingTool: React.FC = () => {
  const [phValue, setPhValue] = useState<number | ''>('');
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [error, setError] = useState<string>('');

  const recommendations: Recommendation[] = [
    {
      pHRange: '< 5.5',
      soilType: 'Strongly Acidic',
      fertilizers: ['Agricultural lime', 'Dolomitic limestone', 'Wood ash'],
      crops: ['Blueberries', 'Potatoes', 'Tea'],
      additionalAdvice: 'Apply lime to raise pH. Most nutrients become less available in strongly acidic soils.'
    },
    {
      pHRange: '5.5 - 6.5',
      soilType: 'Moderately Acidic',
      fertilizers: ['Balanced NPK fertilizers', 'Compost', 'Bone meal'],
      crops: ['Most vegetables', 'Strawberries', 'Rice'],
      additionalAdvice: 'Good range for most crops. Add organic matter to maintain soil health.'
    },
    {
      pHRange: '6.5 - 7.5',
      soilType: 'Neutral',
      fertilizers: ['All-purpose fertilizers', 'Compost', 'Vermicompost'],
      crops: ['Wheat', 'Barley', 'Maize', 'Soybeans'],
      additionalAdvice: 'Ideal range for nutrient availability. Maintain with regular organic matter additions.'
    },
    {
      pHRange: '7.5 - 8.5',
      soilType: 'Moderately Alkaline',
      fertilizers: ['Ammonium sulfate', 'Elemental sulfur', 'Acidifying fertilizers'],
      crops: ['Date palms', 'Asparagus', 'Beets'],
      additionalAdvice: 'Apply sulfur to gradually lower pH. Watch for micronutrient deficiencies.'
    },
    {
      pHRange: '> 8.5',
      soilType: 'Strongly Alkaline',
      fertilizers: ['Sulfur', 'Acidifying organic matter', 'Iron sulfate'],
      crops: ['Few crops thrive', 'Some salt-tolerant vegetables'],
      additionalAdvice: 'Apply sulfur and add organic matter to improve soil structure. Consider raised beds with amended soil.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phValue === '') {
      setError('Please enter a pH value');
      return;
    }
    
    if (typeof phValue === 'number') {
      if (phValue < 0 || phValue > 14) {
        setError('pH value must be between 0 and 14');
        return;
      }
      
      let result: Recommendation | null = null;
      
      if (phValue < 5.5) {
        result = recommendations[0];
      } else if (phValue >= 5.5 && phValue < 6.5) {
        result = recommendations[1];
      } else if (phValue >= 6.5 && phValue < 7.5) {
        result = recommendations[2];
      } else if (phValue >= 7.5 && phValue < 8.5) {
        result = recommendations[3];
      } else {
        result = recommendations[4];
      }
      
      setRecommendation(result);
      setError('');
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold text-green-800">Soil pH Testing Tool</h3>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Input
              label="Enter your soil's pH value"
              type="number"
              id="ph-value"
              name="ph-value"
              value={phValue}
              onChange={(e) => setPhValue(e.target.value === '' ? '' : parseFloat(e.target.value))}
              placeholder="e.g. 6.5"
              error={error}
              required
              min={0}
              max={14}
              step={0.1}
            />
            <Button type="submit" variant="primary">
              Get Recommendations
            </Button>
          </form>
        </CardContent>
      </Card>

      {recommendation && (
        <Card className="mt-8 border-t-4 border-green-600">
          <CardHeader>
            <h3 className="text-xl font-bold text-green-800">Soil Analysis Results</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium text-gray-700">Soil Type:</p>
                <p className="text-green-700 font-bold text-xl">{recommendation.soilType}</p>
                <p className="text-gray-600">pH Range: {recommendation.pHRange}</p>
              </div>
              
              <div>
                <p className="text-lg font-medium text-gray-700">Recommended Fertilizers:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {recommendation.fertilizers.map((fertilizer, index) => (
                    <li key={index} className="text-gray-800">{fertilizer}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="text-lg font-medium text-gray-700">Suitable Crops:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {recommendation.crops.map((crop, index) => (
                    <li key={index} className="text-gray-800">{crop}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-500">
                <p className="text-lg font-medium text-amber-800">Additional Advice:</p>
                <p className="text-gray-800">{recommendation.additionalAdvice}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-600">
              Note: These recommendations are general guidelines. For more precise recommendations,
              consider consulting with an agricultural expert or conducting a detailed soil test.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default PhTestingTool;