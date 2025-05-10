import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Category from '../components/Category'
import ActiveHiring from '../components/ActiveHiring'
import PremiumServices from '../components/PremiumServices'

const Home = () => {
    return (
        <div>
            <Hero />
            <Slider />
            <Category />
            <ActiveHiring />
            <PremiumServices />
        </div>
    )
}

export default Home
