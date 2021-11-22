import React, { useEffect, useState } from 'react';
import getRecommendations from '../api/getRecommendations';
import OverlaySpinner from '../components/OverlaySpinner';
import PromoRedemption from '../pages/PromoRedemption';
import Recommendations from '../pages/Recommendations';
import NotFound from '../pages/NotFound';

const MAX_RECOMMENDATION_SIZE = 4;

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [userRecommendations, setUserRecommendations] = useState([]);
    const [customerPromo, setCustomerPromo] = useState(false);
    const [isUrlInvalid, setIsUrlInvalid] = useState(false);
    const recommendationId = window.location.pathname;

    const fetchRecommendations = async () => {
        try {
            setIsLoading(true);

            const { recommendations, promo, merchantName, redeemedAt } =
                await getRecommendations(
                    recommendationId,
                    MAX_RECOMMENDATION_SIZE,
                );
            console.log('recommendations', recommendations);

            // The promo item is in the list of recommended items
            const promoItem = recommendations.find(
                ({ squareId }) => squareId === promo?.id,
            );

            setUserRecommendations(recommendations);

            if (promoItem) {
                setCustomerPromo({
                    ...promo,
                    merchantName,
                    item: promoItem,
                    hasRedeemed: !!redeemedAt,
                });
            }
        } catch (error) {
            if (error.response?.status === 404) {
                setIsUrlInvalid(true);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);

    if (isUrlInvalid) {
        return <NotFound />;
    }

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
                recommendationId={recommendationId}
            />
        );
    }

    return (
        <Recommendations
            recommendations={userRecommendations}
            recommendationId={recommendationId}
            onItemSubmitComplete={fetchRecommendations}
        />
    );
}

export default App;
