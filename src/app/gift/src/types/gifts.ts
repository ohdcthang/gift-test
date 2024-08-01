
export interface CreateGiftsParams {
    rewardToken: any,
    totalReward: number,
    totalSlots: number,
    randomPercent: number,
    baseMultiplier?: number
}

export interface GasSponsorCreateGiftsParams {
   giftContractAddress: string,
   inputConfig: {
    rewardToken: string,
    totalReward: number | bigint,
    totalSlots: number | bigint,
    randomPercent: number | bigint,
    baseMultiplier?: number | bigint
   },
   feeToken: string,
   nonce?: number | string,
}

export interface ClaimReward {
    wallet: any,
    giftContractAddress: string
}

export interface SetFee {
    tokenAddress: string,
    isActivated: boolean,
    percentAmount: number,
    feeRecipient: string
}