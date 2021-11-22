import request from '../utils/request';

export default async function redeemPromotion(recommendationId) {
    return request('POST', `/recommendations/${recommendationId}/promo/redeem`);
}
