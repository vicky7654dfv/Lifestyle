import React from 'react'
import Banner2 from '../../components/Banner2/Banner2'
import WellnessFeatures from '../../components/WellnessFeatures/WellnessFeatures'
import DailyRituals from '../../components/DailyRituals/DailyRituals'
import LifestyleVideo from '../../components/LifestyleVideo/LifestyleVideo'
import DailyInspiration from '../../components/DailyInspiration/DailyInspiration'

export default function HomePage2() {
  return (
    <div>
      <Banner2 />
      <DailyInspiration />
      <DailyRituals />
      <LifestyleVideo />
      <WellnessFeatures />
    </div>
  )
}
