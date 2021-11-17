import React, { useEffect, useState } from 'react';
import getRecommendations from '../api/getRecommendations';
import OverlaySpinner from '../components/OverlaySpinner';
import PromoRedemption from '../pages/PromoRedemption';
import Recommendations from '../pages/Recommendations';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [userRecommendations, setUserRecommendations] = useState([]);
    const hasPromo = false;

    useEffect(async () => {
        try {
            const { data } = await getRecommendations('abc');
            const { recommendations } = data;

            setUserRecommendations(recommendations);
            console.log('Got back data from getRecommendations', data);
        } catch (error) {
            console.log('Got back ERROR from getRecommendations', error);
        }
    }, []);

    if (isLoading) {
        return <OverlaySpinner isShown={isLoading} />;
    }

    if (hasPromo) {
        return <PromoRedemption />;
    }

    return <Recommendations recommendations={userRecommendations} />;
}

export default App;
