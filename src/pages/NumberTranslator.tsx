import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { language, alertCircle, checkmarkCircle } from 'ionicons/icons';
import './NumberTranslator.css';

const NumberTranslator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Arrays para las palabras en español
  const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 
                      'diecisiete', 'dieciocho', 'diecinueve'];
  const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 
                   'sesenta', 'setenta', 'ochenta', 'noventa'];
  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 
                    'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  const translateNumber = (num: number): string => {
    // Casos especiales
    if (num === 0) return 'cero';
    if (num === 100) return 'cien';
    if (num === 1000) return 'mil';
    
    let result = '';
    const c = Math.floor(num / 100);  // Centenas
    const d = Math.floor((num % 100) / 10);  // Decenas
    const u = num % 10;  // Unidades
    
    // Centenas
    if (c > 0) {
      result += centenas[c] + ' ';
    }
    
    // Decenas especiales (10-19)
    if (d === 1 && u > 0) {
      result += especiales[u];
      return result.trim();
    }
    
    // Decenas normales
    if (d > 1) {
      result += decenas[d];
      if (u > 0) {
        result += ' y ';
      } else {
        return result.trim();
      }
    }
    
    // Unidades
    if (u > 0) {
      result += unidades[u];
    }
    
    return result.trim();
  };

  const handleTranslate = () => {
    const num = parseInt(input);
    
    // Validaciones
    if (input === '') {
      setError('Por favor ingresa un número');
      setTranslation('');
      return;
    }
    
    if (isNaN(num)) {
      setError('Por favor ingresa un número válido');
      setTranslation('');
      return;
    }
    
    if (num < 1 || num > 1000) {
      setError('El número debe estar entre 1 y 1000');
      setTranslation('');
      return;
    }
    
    // Traducción exitosa
    setError('');
    setTranslation(translateNumber(num));
  };

  const handleClear = () => {
    setInput('');
    setTranslation('');
    setError('');
  };

  const handleInputChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setInput(value);
    setError('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Traductor de Números</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="translator-container">
          
          {/* Header Section */}
          <div className="header-section">
            <h1 className="main-title">
              <IonIcon className="title-icon" />
              Traductor de Números a Letras
            </h1>
            <p className="subtitle">Convierte números del 1 al 1000 a palabras en español</p>
          </div>
          
          {/* Input Card */}
          <IonCard className="input-card">
            <IonCardContent>
              <h2 className="instruction">Ingresa un número entre 1 y 1000</h2>
              
              <IonItem className="input-item">
                <IonLabel position="floating">Número</IonLabel>
                <IonInput
                  type="number"
                  value={input}
                  onIonChange={handleInputChange}
                  placeholder="Ej: 123"
                  min="1"
                  max="1000"
                  clearInput={true}
                />
              </IonItem>
              
              {error && (
                <div className="error-message">
                  <IonIcon icon={alertCircle} />
                  <span>{error}</span>
                </div>
              )}
              
              <div className="button-group">
                <IonButton 
                  expand="block" 
                  onClick={handleTranslate}
                  className="translate-button"
                >
                  Traducir a Letras
                </IonButton>
                
                <IonButton 
                  expand="block" 
                  onClick={handleClear}
                  fill="outline"
                  className="clear-button"
                >
                  Limpiar
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
          
          {/* Result Card */}
          {translation && (
            <IonCard className="result-card">
              <IonCardContent>
                <h2 className="result-title">
                  <IonIcon icon={checkmarkCircle} />
                  Resultado de la Traducción
                </h2>
                
                <div className="result-content">
                  <IonGrid>
                    <IonRow className="result-row">
                      <IonCol size="6" className="result-label">
                        Número ingresado:
                      </IonCol>
                      <IonCol size="6" className="result-value">
                        <strong>{input}</strong>
                      </IonCol>
                    </IonRow>
                    
                    <IonRow className="result-row">
                      <IonCol size="6" className="result-label">
                        En letras:
                      </IonCol>
                      <IonCol size="6" className="result-value text-result">
                        "{translation}"
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>
              </IonCardContent>
            </IonCard>
          )}
          
          {/* Examples Card */}
          <IonCard className="examples-card">
            <IonCardContent>
              <h2 className="examples-title">Ejemplos</h2>
              
              <IonGrid className="examples-grid">
                <IonRow>
                  <IonCol>
                    <div className="example-item">
                      <span className="example-number">7</span>
                      <span className="example-arrow">→</span>
                      <span className="example-text">"siete"</span>
                    </div>
                  </IonCol>
                  <IonCol>
                    <div className="example-item">
                      <span className="example-number">25</span>
                      <span className="example-arrow">→</span>
                      <span className="example-text">"veinticinco"</span>
                    </div>
                  </IonCol>
                </IonRow>
                
                <IonRow>
                  <IonCol>
                    <div className="example-item">
                      <span className="example-number">100</span>
                      <span className="example-arrow">→</span>
                      <span className="example-text">"cien"</span>
                    </div>
                  </IonCol>
                  <IonCol>
                    <div className="example-item">
                      <span className="example-number">458</span>
                      <span className="example-arrow">→</span>
                      <span className="example-text">"cuatrocientos cincuenta y ocho"</span>
                    </div>
                  </IonCol>
                </IonRow>
                
                <IonRow>
                  <IonCol>
                    <div className="example-item">
                      <span className="example-number">1000</span>
                      <span className="example-arrow">→</span>
                      <span className="example-text">"mil"</span>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
              
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NumberTranslator;