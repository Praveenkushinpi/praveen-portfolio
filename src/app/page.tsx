import FullScrollTransition from '@/components/gsap/SrcollPageTransitio/pageTransition'
import AboutSection from '@/components/slicec/aboutPage'
import MinimalIntro from '@/components/slicec/firstPage'
import ContactSection from '@/components/slicec/lastPage'
import ProjectsSection from '@/components/slicec/project'
import StatsSection from '@/components/slicec/statssection'
import React from 'react'

const page = () => {
  return (
       <FullScrollTransition>
      <MinimalIntro />   
      <AboutSection/>
      <ProjectsSection/>
      <StatsSection/>
      <ContactSection/>
    </FullScrollTransition>
  )
}

export default page