import request from '../utils/request';

export default async function getRecommendations(recommendationId) {
    return request('GET', `/recommendations/${recommendationId}`);
}
