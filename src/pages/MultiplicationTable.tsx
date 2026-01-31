
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
  IonList,
  IonCard,
  IonCardContent
} from '@ionic/react';
import './MultiplicationTable.css';

const MultiplicationTable: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const handleInputChange = (e: CustomEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setNumber(value);
    setError('');
  };
  
  const renderTable = () => {
    const num = parseInt(number);
    
    if (isNaN(num)) {
      return null;
    }
    
    return (
      <IonCard>
        <IonCardContent>
          <h2 className="table-title">Tabla del {num}</h2>
          <IonList>
            {Array.from({ length: 13 }, (_, i) => i + 1).map(multiplier => (
              <IonItem key={multiplier} className="table-row">
                <div className="multiplication-item">
                  <span className="operation">{num} × {multiplier} = </span>
                  <span className="result">{num * multiplier}</span>
                </div>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="table-container">
          <IonCard>
            <IonCardContent>
              <h2 className="instruction">Ingresa un número para generar su tabla de multiplicar (hasta 13)</h2>
              
              <IonItem className="input-item">
                <IonLabel position="floating">Número</IonLabel>
                <IonInput
                  type="number"
                  value={number}
                  onIonChange={handleInputChange}
                  placeholder="Ej: 5"
                  clearInput={true}
                />
              </IonItem>
              
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
            </IonCardContent>
          </IonCard>
          
          {number && renderTable()}
          
          <IonCard className="info-card">
            <IonCardContent>
              <h3>Información</h3>
              <p>Esta tabla muestra las multiplicaciones del número ingresado del 1 al 13.</p>
              <p>Puedes ingresar números enteros positivos o negativos.</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MultiplicationTable;