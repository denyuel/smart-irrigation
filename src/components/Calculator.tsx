import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Droplets, Info } from 'lucide-react';
import './Calculator.css';

interface CalculationResult {
  waterLiters: number;
  waterCubicMeters: number;
  recommendedMethod: string;
  durationMinutes: number;
  tips: string[];
}

const Calculator = () => {
  const [area, setArea] = useState<number>(500);
  const [plantType, setPlantType] = useState<string>('lawn');
  const [soilType, setSoilType] = useState<string>('loam');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateWaterNeeds = () => {
    // Water baseline (liters per sqm per day in peak summer)
    let plantFactor = 5; // lawn
    let method = 'Mikro-szórófejes vagy Esőztető';
    
    switch (plantType) {
      case 'lawn':
        plantFactor = 5.0;
        method = 'Esőztető (rotoros vagy spray szórófejek)';
        break;
      case 'vegetables':
        plantFactor = 4.5;
        method = 'Csepegtető öntözés (soros elrendezés)';
        break;
      case 'orchard':
        plantFactor = 3.0;
        method = 'Csepegtető vagy Mikro-szórófejes';
        break;
      case 'grains':
        plantFactor = 2.5;
        method = 'Nagy hatótávolságú esőztető (pivot/lineár)';
        break;
      default:
        plantFactor = 4.0;
    }

    // Soil correction factor & watering tip
    let soilMultiplier = 1.0;
    const tips: string[] = [];

    switch (soilType) {
      case 'sandy':
        soilMultiplier = 1.1; // Requires slightly more water due to deep drainage
        tips.push('A homokos talaj gyorsan elnyeli a vizet. Érdemes a napi adagot 2-3 részletben (korán reggel és este) kijuttatni.');
        tips.push('Gyakoribb, rövidebb öntözési ciklusok javasoltak a tápanyagok kimosódásának elkerülésére.');
        break;
      case 'loam':
        soilMultiplier = 1.0; // Ideal
        tips.push('A vályogtalaj optimális vízmegtartó képességű. Napi egyszeri, kora reggeli öntözés az ideális.');
        tips.push('A párolgási veszteség csökkentése érdekében öntözzön a napkelte előtti órákban.');
        break;
      case 'clay':
        soilMultiplier = 0.9; // Less water needed, but very slow absorbency
        tips.push('Az agyagos talaj lassan szívja fel a vizet. Lassú vízkijuttatás szükséges (pl. csepegtetés vagy szakaszos öntözés) az elfolyás megakadályozására.');
        tips.push('Kerülje a túlöntözést, mert a pangó víz gyökérrothadáshoz vezethet.');
        break;
    }

    const waterLiters = Math.round(area * plantFactor * soilMultiplier);
    const waterCubicMeters = parseFloat((waterLiters / 1000).toFixed(2));
    
    // Duration estimation: assume average flow rate of 15 Liters/minute for small/medium grid system
    // Scaled with area size.
    const systemFlowPerSqm = 0.05; // 0.05 L/min per sqm
    const totalSystemFlow = Math.max(15, area * systemFlowPerSqm);
    const durationMinutes = Math.round(waterLiters / totalSystemFlow);

    setResult({
      waterLiters,
      waterCubicMeters,
      recommendedMethod: method,
      durationMinutes,
      tips
    });
  };

  useEffect(() => {
    calculateWaterNeeds();
  }, [area, plantType, soilType]);

  const handleReset = () => {
    setArea(500);
    setPlantType('lawn');
    setSoilType('loam');
  };

  return (
    <section id="calculator" className="calculator-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Intelligens <span>Vízigény Kalkulátor</span></h2>
          <p className="section-subtitle">
            Számolja ki földterülete vagy kertje becsült napi vízigényét a növénykultúra és a talajtípus alapján.
          </p>
        </motion.div>

        <div className="calculator-wrapper glass">
          {/* Inputs Form */}
          <div className="calculator-inputs">
            <h3 className="calc-subtitle">Paraméterek megadása</h3>
            
            <div className="input-group">
              <label htmlFor="area-input" className="input-label">
                Terület mérete (m²): <span className="highlight-value">{area} m²</span>
              </label>
              <input
                id="area-input"
                type="range"
                min="10"
                max="10000"
                step="10"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="range-slider"
              />
              <div className="range-limits">
                <span>10 m²</span>
                <span>5 000 m²</span>
                <span>10 000 m²</span>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="plant-select" className="input-label">Növénykultúra / Haszonnövény</label>
              <select
                id="plant-select"
                value={plantType}
                onChange={(e) => setPlantType(e.target.value)}
                className="select-input"
              >
                <option value="lawn">Pázsit / Gyep (Díszkert)</option>
                <option value="vegetables">Zöldségeskert / Lágyszárúak</option>
                <option value="orchard">Gyümölcsös / Szőlőültetvény</option>
                <option value="grains">Szántóföldi gabonafélék</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="soil-select" className="input-label">Talaj szerkezete</label>
              <select
                id="soil-select"
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="select-input"
              >
                <option value="sandy">Homokos talaj (könnyű, laza)</option>
                <option value="loam">Vályogtalaj (közepes, ideális)</option>
                <option value="clay">Agyagos talaj (kötött, nehéz)</option>
              </select>
            </div>

            <button onClick={handleReset} className="btn-reset">
              <RefreshCw size={16} /> Értékek visszaállítása
            </button>
          </div>

          {/* Results Panel */}
          <div className="calculator-results">
            <h3 className="calc-subtitle">Kalkulált eredmények</h3>
            {result && (
              <div className="results-content">
                <div className="result-metric">
                  <div className="metric-icon-wrapper">
                    <Droplets size={32} />
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Becsült napi vízszükséglet:</span>
                    <span className="metric-value">
                      {result.waterLiters.toLocaleString('hu-HU')} liter
                    </span>
                    <span className="metric-subvalue">
                      ({result.waterCubicMeters} m³ / nap)
                    </span>
                  </div>
                </div>

                <div className="results-details">
                  <div className="detail-item">
                    <span className="detail-label">Javasolt öntözési technológia:</span>
                    <span className="detail-value">{result.recommendedMethod}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Becsült napi öntözési időtartam:</span>
                    <span className="detail-value">~ {result.durationMinutes} perc / nap</span>
                  </div>
                </div>

                <div className="tips-panel">
                  <div className="tips-header">
                    <Info size={18} />
                    <h4>Szakértői tanácsok ehhez a talajhoz:</h4>
                  </div>
                  <ul className="tips-list">
                    {result.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
