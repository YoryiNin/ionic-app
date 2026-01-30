// src/pages/Experience.tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonButtons,
  IonMenuButton  // ← IMPORTANTE: Agregado
} from '@ionic/react';
import { 
  playCircle, 
  time, 
  person, 
  megaphone, 
  laptop,
  checkmarkCircle,
  list
} from 'ionicons/icons';
import './Experience.css';

const Experience: React.FC = () => {
  // TU ID REAL DE YOUTUBE
  const videoId = "uhCnku0loQc";
  
  const requirements = [
    { icon: time, text: "Duración máxima de 5 minutos", completed: true },
    { icon: person, text: "Rostro visible en una esquina", completed: true },
    { icon: megaphone, text: "Explicación clara de la experiencia", completed: true },
    { icon: laptop, text: "Demostración de la aplicación funcionando", completed: true }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* BOTÓN DEL MENÚ - CRÍTICO PARA NAVEGACIÓN */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mi Experiencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <div className="experience-container">
          
          <div className="header-section">
            <h1 className="main-title"> Video de Experiencia</h1>
            <p className="subtitle">Explicación de mi experiencia desarrollando esta aplicación</p>
          </div>
          
          <IonCard className="video-card">
            <IonCardContent>
              <div className="video-section">
                <h2 className="video-title">
                  <IonIcon icon={playCircle} className="title-icon" />
                  Mi Video Experiencia
                </h2>
                
                <div className="video-container">
                  {/* TU VIDEO SE MOSTRARÁ AQUÍ */}
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Video de experiencia - Yoryi Nin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
               
              </div>
            </IonCardContent>
          </IonCard>
          
          <div className="action-buttons">
            <IonButton 
              expand="block" 
              href={`https://www.youtube.com/watch?v=${videoId}`}  // URL corregida
              target="_blank"
              className="youtube-button"
            >
              <IonIcon icon={playCircle} slot="start" />
              Ver Video en YouTube
            </IonButton>
            
            <IonButton 
              expand="block" 
              fill="outline"
              routerLink="/home"  // Usa routerLink en lugar de href
              className="back-button"
            >
              Volver al Inicio
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Experience;