function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};
const totIntraBrokerage = (numShares, shareValue, shareState, stampDuty, shareTransChr = 0.0000325, shareSTT = 0.00025, GST = 1.18) => {
    let turnover = Number(numShares)*Number(shareValue);
    let zerodhaBrokarage = (turnover*3)/10000;
    let genBrokarage = round((turnover*stampDuty) + ((turnover*shareTransChr)*GST) + (turnover*0.0000005), 3);
    let totBrokerage = 0;
    if (shareState === 'sell') {
        if (zerodhaBrokarage > 20) {
            totBrokerage = 23.6 + genBrokarage + (turnover*shareSTT);
        } else {
            totBrokerage = (zerodhaBrokarage*GST) + genBrokarage + (turnover*shareSTT);
        }
    } else {
        if (zerodhaBrokarage > 20) {
            totBrokerage = 23.6 + genBrokarage;
        }
        else {
            totBrokerage = (zerodhaBrokarage*GST) + genBrokarage;
        }
    };
    return Number(totBrokerage.toFixed(2));
};
export default totIntraBrokerage;