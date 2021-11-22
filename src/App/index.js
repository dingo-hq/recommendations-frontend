import React, { useEffect, useState } from 'react';
import getRecommendations from '../api/getRecommendations';
import OverlaySpinner from '../components/OverlaySpinner';
import PromoRedemption from '../pages/PromoRedemption';
import Recommendations from '../pages/Recommendations';

const MAX_RECOMMENDATION_SIZE = 4;

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [userRecommendations, setUserRecommendations] = useState([]);
    const [customerPromo, setCustomerPromo] = useState(false);

    const fetchRecommendations = async () => {
        try {
            setIsLoading(true);

            const { recommendations, promo, merchantName, redeemedAt } =
                await getRecommendations(
                    '_9DHXXeEyrDiTld7_ayUA',
                    MAX_RECOMMENDATION_SIZE,
                );

            // The promo item is in the list of recommended items
            const promoItem = recommendations.find(
                ({ squareId }) => squareId === promo.id,
            );

            setUserRecommendations(recommendations);
            setCustomerPromo({
                ...promo,
                merchantName,
                item: promoItem,
                hasRedeemed: !!redeemedAt,
            });
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

    if (customerPromo) {
        return (
            <PromoRedemption
                loyaltyPoints={customerPromo.loyaltyPoints}
                percentageDiscount={customerPromo.percentageDiscount}
                hasRedeemed={customerPromo.hasRedeemed}
                item={customerPromo.item}
                onRedeemComplete={fetchRecommendations}
                merchantName={customerPromo.merchantName}
                recommendationId="_9DHXXeEyrDiTld7_ayUA"
            />
        );
    }

    return <Recommendations recommendations={userRecommendations} />;
}

export default App;
