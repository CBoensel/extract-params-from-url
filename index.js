// Define the input, either url or search param string
const urlString =
  'https://api-3t.paypal.com/nvp?PAYMENTREQUEST_0_SHIPTOZIP=****&RETURNURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&PAYMENTREQUEST_0_PAYMENTACTION=Authorization&PAYMENTREQUEST_0_CURRENCYCODE=EUR&IPADDRESS=null&USER=paypal**********a.at&SIGNATURE=Af3.KH**********************************************6eD9&INVNUM=WB200021040866897200-161837***4589&NOSHIPPING=0&GIROPAYCANCELURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&CANCEL=true&ISREDIRECT=true&PAYMENTREQUEST_0_INVNUM=WB200021040866897200-161837***4589&PAYMENTREQUEST_0_SHIPTOSTREET=Resselstrasse 14&PAYMENTREQUEST_0_SHIPTOCITY=Villach&CANCELURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&CANCEL=true&VERSION=81.0&PAYMENTREQUEST_0_AMT=224.44&ADDROVERRIDE=1&GIROPAYSUCCESSURL=https://payunity.com/connectors/asyncresponse;jsessionid=5D5F281704927B2F55755CE0A883C591.prod02-vm-con06?asyncsource=PAYPAL&uniqueId=8ac9a4a578b160250178ce93ab0d3952&ndcid=F18712D1F508BC115FF636DD5CDD8FDD.prod02-vm-tx02&ISREDIRECT=true&METHOD=SetExpressCheckout&PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE=AT&PAYMENTREQUEST_0_CUSTOM=WB200021040866897200-161837***4589&PWD=6J5RTC******646K&PAYMENTREQUEST_0_SHIPTONAME=Sophie Reiser';
const searchParamsString =
  'TOKEN=EC%2d4LF68647SE622235W&TIMESTAMP=****%2d04%2d14T04%3a11%3a28Z&CORRELATIONID=47ed472f3ea41&ACK=Success&VERSION=81%2e0&BUILD=55475691';

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

// transform strings to web api objects
const url = new URL(urlString);
const { protocol, host, pathname, searchParams } = url;
const otherSearchParams = new URLSearchParams(searchParamsString);

// check if redundancy was involved (duplicate url params)

// plot the access point of the web service
const webServiceUrl = `${protocol}//${host}${pathname}`;
console.log(`web service url: ${webServiceUrl}\n`);

// plot the url-encoded params
searchParams.sort();
otherSearchParams.sort();

const searchParamsArray = writeSearchParamsToArray(searchParams);
const otherSearchParamsArray = writeSearchParamsToArray(otherSearchParams);

const searchParamsMap = new Map(searchParamsArray);
const otherSearchParamsMap = new Map(otherSearchParamsArray);

// identify duplicates
console.log(`${searchParamsArray.length - searchParamsMap.size} duplicates found for urlString`);
console.log(`${otherSearchParamsArray.length - otherSearchParamsMap.size} duplicates found for searchParamsString`);

const dummy = 1;

// todo output cleaned set of params to csv / json / console (in a nice way)
