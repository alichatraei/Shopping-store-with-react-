import React from 'react'
import { BannersContainer, BannerItem } from '../../Components'
import HomeStyles from './Home.module.css'
const Home = () => {
    return (
        <main className={HomeStyles.homeContainer}>
            <BannersContainer >
                <BannerItem />
            </BannersContainer>
        </main>
    )
}

export default Home
