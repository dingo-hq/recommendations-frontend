import request from '../utils/request';

export default async function getRecommendations(
    recommendationId,
    maxRecommendationSize,
) {
    const { data } = await request(
        'GET',
        `/recommendations/${recommendationId}`,
    );
    const { recommendations, promo, merchantName } = data;

    const limitedRecommendations = recommendations.slice(
        0,
        maxRecommendationSize,
    );

    return { recommendations: limitedRecommendations, promo, merchantName };
}
