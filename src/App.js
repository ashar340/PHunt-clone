import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from "@ionic/react";

import {
  createOutline,
  listCircleOutline,
  trendingUpOutline,
  searchOutline,
  personCircleOutline,
} from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Trending from "./pages/Trending";
import Submit from "./pages/Submit";
import Search from "./pages/Search";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/trending" component={Trending} />
            <Route path="/submit" component={Submit} />
            <Route path="/search" component={Search} />
            <Route compoennt={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={listCircleOutline} />
              <IonLabel>Hunt</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={trendingUpOutline} />
              <IonLabel>Trending</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={createOutline} />
              <IonLabel>Submit</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={searchOutline} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
