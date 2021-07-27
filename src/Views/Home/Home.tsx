import React from 'react'
import { BannersContainer, BannerItem, CardContainer } from '../../Components'
import HomeStyles from './Home.module.css'
const Home = () => {
    return (
        <main className={HomeStyles.homeContainer}>
            <BannersContainer >
                <BannerItem />
            </BannersContainer>
            <CardContainer>
                Card
            </CardContainer>
        </main>
    )
}

export default Home
