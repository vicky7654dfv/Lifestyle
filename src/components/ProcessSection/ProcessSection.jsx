import React from 'react';
import Style from './ProcessSection.module.css';

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Discover & Explore',
      description: 'Browse our curated lifestyle collections and discover products that match your style',
      icon: '🔍',
      color: '#007bff'
    },
    {
      step: 2,
      title: 'Personalize & Style',
      description: 'Get personalized recommendations and styling advice from our experts',
      icon: '🎨',
      color: '#6ab04c'
    },
    {
      step: 3,
      title: 'Fast & Reliable',
      description: 'Enjoy quick delivery with premium packaging and careful handling',
      icon: '⚡',
      color: '#ff6b6b'
    },
    {
      step: 4,
      title: 'Live Beautifully',
      description: 'Incorporate your new finds into your lifestyle and share your journey',
      icon: '🌟',
      color: '#ffd93d'
    }
  ];

  return (
    <section className={Style.processSection}>
      <div className={Style.container}>
        <div className={Style.header}>
          <h2>How It Works</h2>
          <p>Simple steps to transform your lifestyle experience</p>
        </div>
        
        <div className={Style.processSteps}>
          {processSteps.map((step, index) => (
            <div key={step.step} className={Style.processStep}>
              <div className={Style.stepConnector}>
                {index < processSteps.length - 1 && <div className={Style.connectorLine}></div>}
              </div>
              
              <div 
                className={Style.stepCircle}
                style={{ borderColor: step.color }}
              >
                <span className={Style.stepNumber}>{step.step}</span>
                <div className={Style.stepIcon} style={{ color: step.color }}>
                  {step.icon}
                </div>
              </div>
              
              <div className={Style.stepContent}>
                <h3 style={{ color: step.color }}>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;