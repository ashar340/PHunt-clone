import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="PHunt" />
      <IonContent fullscreen>
        <LargeHeader title="PHunt" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
