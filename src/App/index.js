import React, { useEffect, useState } from 'react';
import getRecommendations from '../api/getRecommendations';
import OverlaySpinner from '../components/OverlaySpinner';
import PromoRedemption from '../pages/PromoRedemption';
import Recommendations from '../pages/Recommendations';

const MAX_RECOMMENDATION_SIZE = 4;

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [userRecommendations, setUserRecommendations] = useState([]);
    const [promo, setPromo] = useState(false);

    const fetchRecommendations = async () => {
        try {
            setIsLoading(true);

            const { recommendations, promo: promotion } =
                await getRecommendations(
                    '_9DHXXeEyrDiTld7_ayUA',
                    MAX_RECOMMENDATION_SIZE,
                );

            setUserRecommendations(recommendations);
            setPromo(promotion);
        } catch (error) {
            console.log('Got back ERROR from getRecommendations', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);

    if (isLoading) {
        return <OverlaySpinner isShown={isLoading} />;
    }

    if (promo) {
        return (
            <PromoRedemption
                discount={promo.discount}
                hasRedeemed={promo.hasRedeemed}
                item={promo.item}
                onRedeem={fetchRecommendations}
            />
        );
    }

    return <Recommendations recommendations={userRecommendations} />;
}

export default App;
