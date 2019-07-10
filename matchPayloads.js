const payload = {
    // description: 'aggressive model portfolio',
    // type: 'Aggressive',
    // rebalancingThreshold: 0.1234,
    // expectedReturn: 0.123456,
    expectedStandardDeviation: 0.123456,
    accreditedInvestorOnly: true,
    products: [
      { uuid: 'e5b163df-93d7-4ee8-b55b-6353690fcad0', weightage: 0.25 },
      { uuid: 'e43446e9-6780-4599-a1ea-d24c3b5d0d8f', weightage: 0.25 },
    ],
    risk: {
      amount: 50
    }
  }


const body = {
    description: 'aggressive model portfolio',
    type: 'Aggressive',
    rebalancingThreshold: 0.1234,
    expectedReturn: 0.123456,
    expectedStandardDeviation: 0.123456,
    accreditedInvestorOnly: true,
    products: [
      {
        id: 1,
        uuid: 'e5b163df-93d7-4ee8-b55b-6353690fcad0',
        isin: 'AAXJ',
        cuisp: 'AAXJ',
        code: 'AAXJ',
        name: 'MSCI All Country Asia ex Japan',
        type: 'fund',
        price: 198.369,
        currency: 'USD',
        description: 'The investment seeks to track the investment results of an index composed of Asian equities, excluding Japan. The fund generally invests at least 90% of its assets in securities of the underlying index and in depositary receipts representing securities of the underlying index. MSCI AC Asia ex Japan Index is a free float-adjusted market capitalization index designed to measure equity market performance of the following 10 developed and emerging market countries or regions: China, Hong Kong, India, Indonesia, Malaysia, the Philippines, Singapore, South Korea, Taiwan and Thailand.',
        minHoldingUnits: 4.64266,
        minInitialInvestmentAmount: 132.219,
        maxInitialInvestmentAmount: 232.861,
        minAdditionalInvestmentAmount: 3.04879,
        maxAdditionalInvestmentAmount: 19.5956,
        minRedemptionUnits: 2.37854,
        minRedemptionAmount: 23.1259,
        subscriptionFee: 3.57162,
        managementFee: 2.14463,
        redemptionFee: 1.54383,
        shariaCompliant: false,
        fundFactSheet: 'https://fund-fact-sheet-website/AAXJ',
        prospectus: 'https://prospectus-website/AAXJ',
        highlightSheet: 'https://highlight-sheet-website/AAXJ',
        createdAt: '2019-07-10T05:17:00.225Z',
        updatedAt: '2019-07-10T05:17:00.225Z'
      },
      {
        id: 2,
        uuid: 'e43446e9-6780-4599-a1ea-d24c3b5d0d8f',
        isin: 'ACWI',
        cuisp: 'ACWI',
        code: 'ACWI',
        name: 'MSCI ACWI iShares ETF',
        type: 'fund',
        price: 40.4944,
        currency: 'USD',
        description: '',
        minHoldingUnits: 1.68366,
        minInitialInvestmentAmount: 37.4146,
        maxInitialInvestmentAmount: 327.976,
        minAdditionalInvestmentAmount: 7.19463,
        maxAdditionalInvestmentAmount: 16.519,
        minRedemptionUnits: 2.68298,
        minRedemptionAmount: 21.9827,
        subscriptionFee: 1.83759,
        managementFee: 1.70139,
        redemptionFee: 2.9619,
        shariaCompliant: false,
        fundFactSheet: 'https://fund-fact-sheet-website/ACWI',
        prospectus: 'https://prospectus-website/ACWI',
        highlightSheet: 'https://highlight-sheet-website/ACWI',
        createdAt: '2019-07-10T05:17:00.225Z',
        updatedAt: '2019-07-10T05:17:00.225Z'
      },
    ],
    createdAt: '2019-07-10T09:37:34.683Z',
    updatedAt: '2019-07-10T09:37:34.683Z',
    id: 3,
    uuid: 'b82d1e80-a6b1-4211-843e-38194ed44d36',
    riskId: null,
    risk: {
      amount: 100
    }
  }

function verify(payload, body) {
  console.log('')
  console.log('==>');
  console.log(payload)
  const here = Object.keys(payload).map((payloadKey) => {
    if (!body) return false;
    const payloadValue = payload[payloadKey]
    const bodyValue = body[payloadKey]

    // payload value is an array
    if (Array.isArray(payloadValue)) {
      const arrayRes = payloadValue.map((_, idx) => {
        return verify(payloadValue[idx], bodyValue[idx])
      })
      console.log('arrayRes', arrayRes);
      return arrayRes;
    }

    // payload value is an Object {}
    if(payloadValue && typeof payloadValue === 'object' && Object.keys(payloadValue).length !== 0) {
      console.log(payloadValue, bodyValue);
      // const objRes = Object.keys(payloadValue).map((payloadKey) => {
      //   return verify(payloadValue[payloadKey], bodyValue[payloadKey])
      // })

      const objRes = verify(payloadValue, bodyValue);
      console.log('objRes', objRes)
      return objRes
    }

    const eq = payloadValue === bodyValue
    console.log(payloadKey, eq);
    return eq
  })

  console.log('here', here)
  return here
}

const verified = verify(payload, body);
console.log(verified);