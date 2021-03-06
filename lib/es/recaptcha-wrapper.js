import ReCAPTCHA from "./recaptcha";
import makeAsyncScriptLoader from "react-async-script";

function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}
function getURL() {
  var dynamicOptions = getOptions();
  var lang = dynamicOptions.lang ? "&hl=" + dynamicOptions.lang : "";
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit" + lang;
}

var callbackName = "onloadcallback";
var globalName = "grecaptcha";
var initialOptions = getOptions();

export default makeAsyncScriptLoader(getURL, {
  callbackName: callbackName,
  globalName: globalName,
  removeOnUnmount: initialOptions.removeOnUnmount || false
})(ReCAPTCHA);