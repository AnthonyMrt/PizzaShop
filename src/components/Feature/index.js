import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza du jour</h1>
      <p>Sauce alfredo à la truffe, saupoudrer de poussière d'or 24 carats</p>
      <FeatureButton>Commander maintenant</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
