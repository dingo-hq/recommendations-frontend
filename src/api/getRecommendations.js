import request from '../utils/request';

export default async function getRecommendations(
    recommendationId,
    maxRecommendationSize,
) {
    const { data } = await request(
        'GET',
        `/recommendations/${recommendationId}`,
    );
    const { recommendations } = data;
    const limitedRecommendations = recommendations.slice(
        0,
        maxRecommendationSize,
    );

    return {
        ...data,
        recommendations: limitedRecommendations,
    };
}
