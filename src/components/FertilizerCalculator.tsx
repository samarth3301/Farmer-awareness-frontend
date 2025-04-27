import React, { useState } from 'react';
import Card, { CardHeader, CardContent, CardFooter } from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';

interface FertilizerType {
  name: string;
  nRatio: number;
  pRatio: number;
  kRatio: number;
  applicationRate: number; // kg per acre
  description: string;
}

const FertilizerCalculator: React.FC = () => {
  const [landArea, setLandArea] = useState<number | ''>('');
  const [areaUnit, setAreaUnit] = useState<'acre' | 'hectare'>('acre');
  const [selectedFertilizer, setSelectedFertilizer] = useState<string>('npk_balanced');
  const [results, setResults] = useState<{
    fertilizerAmount: number;
    nAmount: number;
    pAmount: number;
    kAmount: number;
  } | null>(null);
  const [error, setError] = useState<string>('');

  const fertilizerTypes: Record<string, FertilizerType> = {
    npk_balanced: {
      name: 'Balanced NPK (15-15-15)',
      nRatio: 15,
      pRatio: 15,
      kRatio: 15,
      applicationRate: 200,
      description: 'General purpose fertilizer with equal parts nitrogen, phosphorus, and potassium.'
    },
    urea: {
      name: 'Urea (46-0-0)',
      nRatio: 46,
      pRatio: 0,
      kRatio: 0,
      applicationRate: 150,
      description: 'High nitrogen fertilizer that promotes leafy growth.'
    },
    dap: {
      name: 'DAP (18-46-0)',
      nRatio: 18,
      pRatio: 46,
      kRatio: 0,
      applicationRate: 175,
      description: 'Diammonium phosphate is high in phosphorus, supporting root development and flowering.'
    },
    mop: {
      name: 'MOP (0-0-60)',
      nRatio: 0,
      pRatio: 0,
      kRatio: 60,
      applicationRate: 100,
      description: 'Muriate of potash provides potassium, supporting overall plant health and disease resistance.'
    },
    ssp: {
      name: 'SSP (0-16-0)',
      nRatio: 0,
      pRatio: 16,
      kRatio: 0,
      applicationRate: 250,
      description: 'Single super phosphate supports root development and is suitable for phosphorus-deficient soils.'
    }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (landArea === '') {
      setError('Please enter the land area');
      return;
    }
    
    if (typeof landArea === 'number' && landArea <= 0) {
      setError('Land area must be greater than 0');
      return;
    }

    let areaInAcres = landArea as number;
    if (areaUnit === 'hectare') {
      areaInAcres = areaInAcres * 2.47105; // Convert hectares to acres
    }
    
    const fertilizer = fertilizerTypes[selectedFertilizer];
    const fertilizerAmount = areaInAcres * fertilizer.applicationRate;
    
    setResults({
      fertilizerAmount,
      nAmount: (fertilizerAmount * fertilizer.nRatio) / 100,
      pAmount: (fertilizerAmount * fertilizer.pRatio) / 100,
      kAmount: (fertilizerAmount * fertilizer.kRatio) / 100
    });
    
    setError('');
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold text-green-800">Fertilizer Calculator</h3>
          <p className="text-gray-600 mt-1">Calculate the amount of fertilizer needed for your land</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCalculate} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-grow">
                <Input
                  label="Land Area"
                  type="number"
                  id="land-area"
                  name="land-area"
                  value={landArea}
                  onChange={(e) => setLandArea(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="e.g. 5"
                  error={error}
                  required
                  min={0.1}
                  step={0.1}
                />
              </div>
              <div className="md:w-1/3">
                <label htmlFor="area-unit" className="block text-sm font-medium text-gray-700 mb-1">
                  Unit
                </label>
                <select
                  id="area-unit"
                  value={areaUnit}
                  onChange={(e) => setAreaUnit(e.target.value as 'acre' | 'hectare')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="acre">Acres</option>
                  <option value="hectare">Hectares</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="fertilizer-type" className="block text-sm font-medium text-gray-700 mb-1">
                Fertilizer Type
              </label>
              <select
                id="fertilizer-type"
                value={selectedFertilizer}
                onChange={(e) => setSelectedFertilizer(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {Object.entries(fertilizerTypes).map(([key, fertilizer]) => (
                  <option key={key} value={key}>
                    {fertilizer.name}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-sm text-gray-600">
                {fertilizerTypes[selectedFertilizer].description}
              </p>
            </div>
            
            <Button type="submit" variant="primary">
              Calculate
            </Button>
          </form>
        </CardContent>
      </Card>

      {results && (
        <Card className="mt-8 border-t-4 border-amber-500">
          <CardHeader>
            <h3 className="text-xl font-bold text-amber-800">Fertilizer Recommendation</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-md">
                <p className="text-lg font-medium">For your {landArea} {areaUnit}{landArea !== 1 ? 's' : ''} of land:</p>
                <p className="text-2xl font-bold text-amber-800 mt-2">
                  {results.fertilizerAmount.toFixed(2)} kg of {fertilizerTypes[selectedFertilizer].name}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-lg font-medium text-green-800">Nitrogen (N)</p>
                  <p className="text-xl font-bold mt-1">{results.nAmount.toFixed(2)} kg</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-lg font-medium text-blue-800">Phosphorus (P)</p>
                  <p className="text-xl font-bold mt-1">{results.pAmount.toFixed(2)} kg</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-md">
                  <p className="text-lg font-medium text-purple-800">Potassium (K)</p>
                  <p className="text-xl font-bold mt-1">{results.kAmount.toFixed(2)} kg</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Application method:</span> Spread evenly across the field and work into the top 
                10-15 cm of soil before planting. For established crops, apply around the base of plants.
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Best time to apply:</span> Early morning or evening, preferably before expected 
                rainfall or irrigation.
              </p>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default FertilizerCalculator;