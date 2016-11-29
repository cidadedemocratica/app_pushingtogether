import settings from './development';

module.exports = {

  method: 'get', // default

  baseUrl: 'https://api.pol.is/api/v3',
  url: 'https://api.pol.is/api/v3',

  headers: {'X-Requested-With': 'XMLHttpRequest'},

  responseType: 'json', // default

  xsrfCookieName: 'XSRF-TOKEN', // default

  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  onUploadProgress: function (progressEvent) {
  },

  onDownloadProgress: function (progressEvent) {
  },

  maxContentLength: 2000,

  validateStatus: function (status) {
    return status >= 200 && status < 500; // default
  },

  maxRedirects: 5, // default

};

