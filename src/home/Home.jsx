import React from 'react'
import Banner from './Banner'
import HomeCateogry from './HomeCateogry'
import Products from './Products'
import Register from './Register'
import Location from './Location'
import Aboutus from './Aboutus'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeCateogry />
            <Products />
            <Register />
            <Location />
            <Aboutus />
            <AppSection />
            <Sponsor />
        </div>
    )
}

export default Home
