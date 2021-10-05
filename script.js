function checkAll(){
  if("serial"in navigator){canUseSerial=true}else{canUseSerial=false}
  if("bluetooth"in navigator){canUseBluetooth=true}else{canUseBluetooth=false}
  if("usb"in navigator){canUseUSB=true}else{canUseUSB=false}
  if("NDEFReader"in window){canUseNFC=true}else{canUseNFC=false}
  if("hid"in navigator){canUseHID=true}else{canUseHID=false}
}
function showFloaty(ps,customText="run <code>showFloaty(\"customtext\",<<Your text here>>)</code>!"){
  document.getElementById('notify').hidden=false;
  switch(ps){
    case"savedconsentinfo":
      document.getElementById('text').innerHTML="Saving consent options for 90 days."
      break;
    case"customtext":
      document.getElementById('text').innerHTML=customText
      break;
    default:
      document.getElementById('text').innerHTML="Unknown preset. "+customText
  }
}
function hideFloaty(){
  document.getElementById('notify').hidden=true;
}
function consentResp(resp){
  document.getElementById('warning').hidden=true;
  if(document.getElementById('skipConsent').value=="on"){showFloaty("savedconsentinfo");misc.setCookie("skipConsent",true,90);misc.setCookie("consentOption",resp,90);}
  if(resp=="good"){consentGood=true}else{consentGood=false}
}
if(misc.getCookie('skipConsent')==true){consentResp(misc.getCookie("consentOption"))}