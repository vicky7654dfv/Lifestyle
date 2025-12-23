import React from 'react'
import Banner1 from '../../components/Banner1/Banner1'
import Page1Component from '../../components/Page1Components/Page1Components'
import Grid1 from '../../components/Grid1/Grid1'
import LifestyleCategories from '../../components/LifestyleCategories/LifestyleCategories'

export default function HomePage1() {
  return (
    <div>
      <Banner1 />
      <LifestyleCategories />
      <Grid1 />
      <Page1Component />
    </div>
  )
}
