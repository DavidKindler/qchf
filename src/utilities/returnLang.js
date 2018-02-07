const getLanguage = url => {
  return url.indexOf('qualcomm.cn') >= 0 ? 'cn' : 'en';
};

const returnLang = url => {
  return url ? getLanguage(url) : getLanguage(window.location.host);
};

export default returnLang;
