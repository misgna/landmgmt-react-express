import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, {useState, useEffect} from 'react';
import DisplacedInfo from './DisplacedInfo';
import HeirInfo from './HeirInfo';
import PropertyInfo from './PropertyInfo';
import DevelopmentInfo from './DevelopmentInfo';
import ResettlementOptions from './ResettlementOptions';
import DataCollectedFrom from './DataCollectedFrom';
import PrintSED from './PrintSED';

function SED() {

  return (
    <>
      <DisplacedInfo />
      <HeirInfo />
      <PropertyInfo />
      <DevelopmentInfo />
      <ResettlementOptions />
      <DataCollectedFrom />
   
    {/*
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="displacedInfo" title="የተነሺው መረጃ">
        <DisplacedInfo />
      </Tab>
      <Tab eventKey="heirInfo" title="የወራሾች መረጃ" >
        <HeirInfo />
      </Tab>
      <Tab eventKey="propertyInfo" title="የይዞታው መረጃ" >
        <PropertyInfo />
      </Tab>
      <Tab eventKey="developmentInfo" title="ለልማት የተፈለገው ንብረት" >
        <DevelopmentInfo />
      </Tab>
      <Tab eventKey="resettlementOptions" title="የተነሺዎች ፍላጎትና ምርጫ" >
        <ResettlementOptions />
      </Tab>
      <Tab eventKey="dataCollectedFrom" title="መረጃዉን የሰጠው ግለስብ(ተነሺ ስም)" >
        <DataCollectedFrom />
      </Tab>
      
      <Tab eventKey="printAll" title="ኣረጋግጥ" >
        <PrintSED />
      </Tab>

    </Tabs>
  */}
   </>
  );
}

export default SED;