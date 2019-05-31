function emailformSubmitLocation(location){if(submitted){window.location=location;}}
function formSubmitted(){submitted=true;}
function contactFormSubmitLocation(location){if(typeof submitted!=='undefined'&&submitted){window.location=location;var targetElement=event.target||event.srcElement;gtag('event','email submitted',{'event_category':targetElement.alt,'event_label':'method'});}}
function apiRegisterFocusEmail(){var targetElement=event.target||event.srcElement;gtag('event','Email focus',{'event_category':targetElement.alt,'event_label':'method'});}
function onloadApiRegister(location){if(typeof submitted!=='undefined'&&submitted){window.location=location;var targetElement=event.target||event.srcElement;gtag('event','api registered',{'event_category':targetElement.alt,'event_label':'method'});}}
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','{{- .Site.Params.google_analytics_id -}}');gtag('config',{'anonymizeIp':true});