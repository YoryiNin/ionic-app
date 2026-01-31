
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonCard, IonCardContent } from '@ionic/react';

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(n1 + n2);
    } else {
      setResult(null);
    }
  };

  return (
    <IonPage>
      <IonHeader><IonToolbar><IonTitle>Sumadora</IonTitle></IonToolbar></IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Número 1</IonLabel>
              <IonInput type="number" value={num1} onIonChange={e => setNum1(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Número 2</IonLabel>
              <IonInput type="number" value={num2} onIonChange={e => setNum2(e.detail.value!)} />
            </IonItem>
            <IonButton expand="block" onClick={calculateSum} className="ion-margin-top">
              Calcular Suma
            </IonButton>
            {result !== null && (
              <div className="ion-text-center ion-margin-top">
                <h2>Resultado: {result}</h2>
              </div>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Calculator;