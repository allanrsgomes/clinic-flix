
const pushBanner = (event, bannerName, bannerCampaign) => {

  dataLayer.push({
    'event': event,
    'bannerName': bannerName,
    'bannerCampaign': bannerCampaign
  });

}

const pushLink = (event, linkName, linkCategory, linkPosition) => {   // VER position

  dataLayer.push({
    'event': event,
    'linkName': linkName,
    'linkCategory': linkCategory,
    'linkPosition': linkPosition,
  });
}

const pushButton = (event, buttonCategory, buttonService) => {   //clinicButtonLojas VER
  dataLayer.push({
    'event': event,
    'buttonCategory': buttonCategory,
    'buttonService': buttonService
  });
}