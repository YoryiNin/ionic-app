import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, 
  IonRouterOutlet, 
  IonSplitPane, 
  IonMenu, 
  IonContent, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel, 
  IonMenuToggle,
  setupIonicReact 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { 
  home, 
  calculator, 
  text, 
  grid, 
  videocam,
  logoIonic,
  logoReact,
  codeSlash
} from 'ionicons/icons';

// Importa TODAS tus páginas
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import NumberTranslator from './pages/NumberTranslator';
import MultiplicationTable from './pages/MultiplicationTable';
import Experience from './pages/Experience';

// Estilos de Ionic
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        
        {/* ===== MENÚ LATERAL CON TU FOTO ===== */}
        <IonMenu contentId="main">
          <IonContent>
            <div className="menu-header">
              <div className="menu-profile">
                {/* Contenedor circular para tu foto */}
                <div className="menu-photo-container">
                  <img 
                    src="/assets/coco.jpeg" 
                    alt="Foto de Yoryi" 
                    className="menu-profile-photo"
                  />
                  <span className="menu-photo-badge">2x2</span>
                </div>
                <div className="menu-profile-info">
                  <h3>Yoryi Nin de la Rosa</h3>
                  <p>Ing. Sistemas Computacionales</p>
                  <p className="menu-email">nindelarosayoryi@gmail.com</p>
                </div>
              </div>
            </div>
            
            <IonList>
              {/* Home */}
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/home" routerDirection="forward">
                  <IonIcon slot="start" icon={home} />
                  <IonLabel>Información Personal</IonLabel>
                </IonItem>
              </IonMenuToggle>
              
              {/* Calculator */}
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/calculator" routerDirection="forward">
                  <IonIcon slot="start" icon={calculator} />
                  <IonLabel>Sumadora</IonLabel>
                </IonItem>
              </IonMenuToggle>
              
              {/* Number Translator */}
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/translator" routerDirection="forward">
                  <IonIcon slot="start" icon={text} />
                  <IonLabel>Traductor de Números</IonLabel>
                </IonItem>
              </IonMenuToggle>
              
              {/* Multiplication Table */}
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/multiplication" routerDirection="forward">
                  <IonIcon slot="start" icon={grid} />
                  <IonLabel>Tabla de Multiplicar</IonLabel>
                </IonItem>
              </IonMenuToggle>
              
              {/* Experience */}
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/experience" routerDirection="forward">
                  <IonIcon slot="start" icon={videocam} />
                  <IonLabel>Mi Experiencia</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
            
            <div className="menu-footer">
              <p>Aplicación Ionic + React</p>
              <div className="menu-tech-icons">
                <IonIcon icon={logoIonic} />
                <IonIcon icon={logoReact} />
                <IonIcon icon={codeSlash} />
              </div>
            </div>
          </IonContent>
        </IonMenu>
        
        {/* ===== CONTENIDO PRINCIPAL ===== */}
        <IonRouterOutlet id="main">
          <Route exact path="/home" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/translator" component={NumberTranslator} />
          <Route exact path="/multiplication" component={MultiplicationTable} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;