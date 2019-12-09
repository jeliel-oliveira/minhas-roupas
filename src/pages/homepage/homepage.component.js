import React from 'react';
import './homepage.styles.scss'
import {HomepageContainer} from './homepage.styles';
import Directory from '../../components/directory/directory.component';
const HomePage = ()=>{
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    );
}
export default HomePage;