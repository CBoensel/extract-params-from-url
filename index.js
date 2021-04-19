#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Define the input, either url or search param string
// const urlString =
('https://api-3t.paypal.com/nvp?PAYMENTREQUEST_0_SHIPTOZIP=****&RETURNURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&PAYMENTREQUEST_0_PAYMENTACTION=Authorization&PAYMENTREQUEST_0_CURRENCYCODE=EUR&IPADDRESS=null&USER=paypal**********a.at&SIGNATURE=Af3.KH**********************************************6eD9&INVNUM=WB200021040866897200-161837***4589&NOSHIPPING=0&GIROPAYCANCELURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&CANCEL=true&ISREDIRECT=true&PAYMENTREQUEST_0_INVNUM=WB200021040866897200-161837***4589&PAYMENTREQUEST_0_SHIPTOSTREET=Resselstrasse 14&PAYMENTREQUEST_0_SHIPTOCITY=Villach&CANCELURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&CANCEL=true&VERSION=81.0&PAYMENTREQUEST_0_AMT=224.44&ADDROVERRIDE=1&GIROPAYSUCCESSURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&ISREDIRECT=true&METHOD=SetExpressCheckout&PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE=AT&PAYMENTREQUEST_0_CUSTOM=WB200021040866897200-161837***4589&PWD=6J5RTC******646K&PAYMENTREQUEST_0_SHIPTONAME=Sophie Reiser');
// const searchParamsString =
//   'TOKEN=EC%2d7WC43697F2137945E&BILLINGAGREEMENTACCEPTEDSTATUS=0&CHECKOUTSTATUS=PaymentActionNotInitiated&TIMESTAMP=2021%2d04%2d13T13%3a13%3a19Z&CORRELATIONID=1c160e7f37831&ACK=Success&VERSION=81%2e0&BUILD=55475691&EMAIL=fabiana%2emack%40gmail%2ecom&PAYERID=CFS23GPMFQ644&PAYERSTATUS=verified&FIRSTNAME=Fabiana&LASTNAME=Mack&COUNTRYCODE=AT&SHIPTONAME=S2S%20Fabiana%20Mack&SHIPTOSTREET=Billrothstrasse%2022%2fHardtgasse%201%2d3&SHIPTOCITY=Wien&SHIPTOZIP=1190&SHIPTOCOUNTRYCODE=AT&SHIPTOCOUNTRYNAME=Austria&ADDRESSSTATUS=Confirmed&CURRENCYCODE=EUR&AMT=28%2e79&ITEMAMT=28%2e79&SHIPPINGAMT=0%2e00&HANDLINGAMT=0%2e00&TAXAMT=0%2e00&CUSTOM=WB200021041368881700%2d1618326719&INVNUM=WB200021041368881700%2d1618326719&INSURANCEAMT=0%2e00&SHIPDISCAMT=0%2e00&INSURANCEOPTIONOFFERED=false&PAYMENTREQUEST_0_CURRENCYCODE=EUR&PAYMENTREQUEST_0_AMT=28%2e79&PAYMENTREQUEST_0_ITEMAMT=28%2e79&PAYMENTREQUEST_0_SHIPPINGAMT=0%2e00&PAYMENTREQUEST_0_HANDLINGAMT=0%2e00&PAYMENTREQUEST_0_TAXAMT=0%2e00&PAYMENTREQUEST_0_CUSTOM=WB200021041368881700%2d1618326719&PAYMENTREQUEST_0_INVNUM=WB200021041368881700%2d1618326719&PAYMENTREQUEST_0_INSURANCEAMT=0%2e00&PAYMENTREQUEST_0_SHIPDISCAMT=0%2e00&PAYMENTREQUEST_0_SELLERPAYPALACCOUNTID=paypal%40billa%2eat&PAYMENTREQUEST_0_INSURANCEOPTIONOFFERED=false&PAYMENTREQUEST_0_SHIPTONAME=S2S%20Fabiana%20Mack&PAYMENTREQUEST_0_SHIPTOSTREET=Billrothstrasse%2022%2fHardtgasse%201%2d3&PAYMENTREQUEST_0_SHIPTOCITY=Wien&PAYMENTREQUEST_0_SHIPTOZIP=1190&PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE=AT&PAYMENTREQUEST_0_SHIPTOCOUNTRYNAME=Austria&PAYMENTREQUEST_0_ADDRESSSTATUS=Confirmed&PAYMENTREQUESTINFO_0_ERRORCODE=0';
// const searchParamsString =
//   'TOKEN=EC%2d4LF68647SE622235W&TIMESTAMP=****%2d04%2d14T04%3a11%3a28Z&CORRELATIONID=47ed472f3ea41&ACK=Success&VERSION=81%2e0&BUILD=55475691';
// const searchParamsString =
('TOKEN=EC%2d7WC43697F2137945E&MSGSUBID=8ac9a4a678b173a40178cb5c31dd32c8&SUCCESSPAGEREDIRECTREQUESTED=false&TIMESTAMP=2021%2d04%2d13T13%3a13%3a21Z&CORRELATIONID=334d98c19a3aa&ACK=Success&VERSION=81%2e0&BUILD=55475691&INSURANCEOPTIONSELECTED=false&SHIPPINGOPTIONISDEFAULT=false&PAYMENTINFO_0_TRANSACTIONID=2T577141R2944144T&PAYMENTINFO_0_TRANSACTIONTYPE=expresscheckout&PAYMENTINFO_0_PAYMENTTYPE=instant&PAYMENTINFO_0_ORDERTIME=2021%2d04%2d13T13%3a13%3a19Z&PAYMENTINFO_0_AMT=28%2e79&PAYMENTINFO_0_TAXAMT=0%2e00&PAYMENTINFO_0_CURRENCYCODE=EUR&PAYMENTINFO_0_PAYMENTSTATUS=Pending&PAYMENTINFO_0_PENDINGREASON=authorization&PAYMENTINFO_0_REASONCODE=None&PAYMENTINFO_0_PROTECTIONELIGIBILITY=Eligible&PAYMENTINFO_0_PROTECTIONELIGIBILITYTYPE=ItemNotReceivedEligible%2cUnauthorizedPaymentEligible&PAYMENTINFO_0_SECUREMERCHANTACCOUNTID=NJ4T9D3F645HN&PAYMENTINFO_0_ERRORCODE=0&PAYMENTINFO_0_ACK=Success');

//---------------------------------------------------------
// helpers
const writeSearchParamsToArray = (searchParams) => {
  const searchParamsArray = [];
  console.debug('start converting search params.. \n');

  searchParams.forEach((value, key) => {
    searchParamsArray.push([key, value]);
    // test output
    console.debug(`url param > ${key}: ${value}`);
  });

  console.debug('\n');
  return searchParamsArray;
};

// ---------------------------------------------------------
// main

// get input
const argv = yargs(hideBin(process.argv)).argv;
const { url, params } = argv;
let searchParams;

// transform input strings to web api objects
if (url) {
  const urlInstance = new URL(url);
  const { protocol, host, pathname } = urlInstance;

  // plot the access point of the web service
  const webServiceUrl = `${protocol}//${host}${pathname}`;
  console.log(`web service url: ${webServiceUrl}\n`);

  searchParams = urlInstance.searchParams;
} else if (params) {
  searchParams = new URLSearchParams(params);
  console.log(`no web service url passed. processing raw params\n`);
} else {
  throw new Error('no input param passed');
}

// get the url-encoded params in a more structured, raw format
searchParams.sort();
const searchParamsArray = writeSearchParamsToArray(searchParams);
const searchParamsMap = new Map(searchParamsArray);

// identify duplicates
console.log(`${searchParamsArray.length - searchParamsMap.size} duplicates found for given input`);

// todo output cleaned set of params to csv / json / console (in a nice way)
