
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonCard, IonCardContent, IonGrid, IonRow, IonCol, 
  IonIcon, IonButton 
} from '@ionic/react';
import { 
  personCircleOutline, mailOutline, schoolOutline, 
  codeSlashOutline, logoIonic, logoReact 
} from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Información Personal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="container">
          
          {/* Header Section */}
          <div className="header-content">
            <h1>Mi Aplicación Ionic</h1>
            <p>Portafolio de desarrollo y experiencia técnica</p>
          </div>
          
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-photo-container">
                   <img 
                     src="/assets/coco.jpeg"  
                       alt="Foto personal 2x2" 
                       className="profile-photo"
                   />
                <span className="photo-badge">2x2</span>
              </div>
            </div>
            
            <div className="info-section">
              {/* Name */}
              <div className="info-item">
                <IonIcon icon={personCircleOutline} className="info-icon" />
                <div className="info-content">
                  <h3>Nombre Completo</h3>
                  <p><strong>Nombre:</strong> Yoryi</p>
                  <p><strong>Apellido:</strong>Nin de la Rosa</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="info-item">
                <IonIcon icon={mailOutline} className="info-icon" />
                <div className="info-content">
                  <h3>Correo Electrónico</h3>
                  <p>
                    <a href="mailto:nindelarosayoryi@gmail.com" className="email-link">
                      nindelarosayoryi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Education */}
              <div className="info-item">
                <IonIcon icon={schoolOutline} className="info-icon" />
                <div className="info-content">
                  <h3>Formación Académica</h3>
                  <p>Ingeniería en Sistemas Computacionales</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* About/Skills Section */}
          <div className="about-section">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <IonIcon icon={logoIonic} style={{color: '#3880ff', marginRight: '10px'}} />
                <h4>Ionic Framework</h4>
                <p>Desarrollo de aplicaciones móviles híbridas</p>
              </div>
              
              <div className="skill-item">
                <IonIcon icon={logoReact} style={{color: '#61dafb', marginRight: '10px'}} />
                <h4>React</h4>
                <p>Componentes funcionales y hooks</p>
              </div>
              
              <div className="skill-item">
                <IonIcon icon={codeSlashOutline} style={{color: '#3880ff', marginRight: '10px'}} />
                <h4>TypeScript</h4>
                <p>Tipado estático y mejores prácticas</p>
              </div>
              
              <div className="skill-item">
                <IonIcon icon={codeSlashOutline} style={{color: '#3880ff', marginRight: '10px'}} />
                <h4>UI/UX Design</h4>
                <p>Interfaces responsivas y amigables</p>
              </div>
            </div>
          </div>
          
          {/* Contact Actions */}
          <div className="contact-actions">
            <IonButton 
              className="contact-button"
              href="mailto:nindelarosayoryi@gmail.com"
              expand="block"
            >
              <IonIcon icon={mailOutline} slot="start" />
              Contactar por Email
            </IonButton>
            
            <IonButton 
              className="contact-button secondary-button"
              fill="outline"
              href="https://github.com/tuusuario"
              target="_blank"
            >
              Ver Proyectos GitHub
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;