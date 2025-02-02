export enum CONTRACT_NAME  {
    BROADCASTER_CONTRACT_ADDRESS = "BROADCASTER_CONTRACT_ADDRESS",
    RANDOMIZER_CONTRACT_ADDRESS = "RANDOMIZER_CONTRACT_ADDRESS",
    COIN98_GIFT_CONTRACT_ADDRESS = "COIN98_GIFT_CONTRACT_ADDRESS",
    COIN98_GIFT_FACTORY_CONTRACT_ADDRESS = "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS",
    GAS_SPONSOR_CONTRACT_ADDRESS = "GAS_SPONSOR_CONTRACT_ADDRESS"
}

const isDev = process.env.NODE_ENV === 'development'

export const GIFT_CONTRACT: Record<CONTRACT_NAME, string> = {
    "BROADCASTER_CONTRACT_ADDRESS" : !isDev ? '0xa0adEA087abFE5F13ff109D16Aae1b183E38bde5' : '0x25F74bBe3CfD2Da94EC04F67f18fD9905C2a152d',
    "RANDOMIZER_CONTRACT_ADDRESS" : !isDev ? '0xE2b4AAc09a6E48C7Ee7791788b516ADa2f0A9901' : '0x2395C904D2B1Af02F24B2E492C94e21Ac1bA7585',
    "COIN98_GIFT_CONTRACT_ADDRESS": !isDev ? '0x35bED242cF86024660B28481377Dd17f0d83D506' : ' 0x40D6F87EaeFB86f3988b401357D28093bf7F6E0b',
    "COIN98_GIFT_FACTORY_CONTRACT_ADDRESS": !isDev ? '0xB2247574e2C75335147e1912B21A829256c47A10' : '0x3928FFF1735ff8ce12b790Bf7120a323f289F623',
    "GAS_SPONSOR_CONTRACT_ADDRESS": !isDev ? '0x6acb32424bc91Ac61a29f8C604146a69c0bed8f1' : '0x1e0578817e42563EeC9B6d9Ce2329DAFA1888efA',
}