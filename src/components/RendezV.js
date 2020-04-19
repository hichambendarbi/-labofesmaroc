import React from 'react'
import SectionPage from "./common/SectionPage"
import PageIntro from "./common/PageIntro"


const RendezV = () => 
        <div>
            <SectionPage
title="Rendez-Vous Laboamfes"
text="Comment vous pouvez le prendre"
/>
<PageIntro 
text="La mission de LaboAMFes est, de contribuer pleinement à votre prise en charge, en proposant,
au-delà des résultats d’examens, notre expertise en biologie médicale.
En complément de votre examen clinique et autres investigations, 
les résultats de biologie médicale vous apportent souvent un éclairage déterminant, 
pour votre prise de décision. Les biologistes médicaux Biofutur participent, ainsi, 
activement à la prédiction, à la prévention et au dépistage des pathologies, 
ainsi qu’au traitement et au suivi de l’état de santé de vos patients.					
Consciente de l’importance de la biologie médicale dans les soins prodigués à ses patients, 
l’équipe Biofutur est impliquée au quotidien dans une démarche d’excellence, 
se traduisant sur le plan de la qualité, par notre engagement dans un processus 
qualité en vue du maintien de l’accréditation et sur le plan technique et médical 
et par présence d’un réseau d’experts. Pour satisfaire à ces exigences, 
Biofutur ne cesse d’évoluer par l’utilisation de technologies innovantes 
et s’adapte en permanence aux nouvelles avancées scientifiques."
/>
<div>{window.location.pathname}</div>
        </div>


export default RendezV
