import request from '../utils/request';

export default async function submitItem(recommendationId, itemId) {
    return request('PUT', `/recommendations/${recommendationId}/promo`, {
        catalogSquareId: itemId,
    });
}
