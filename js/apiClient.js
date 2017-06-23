/**
 * Request next set of members thought ApiGetClient
 */

let options = {
                headers: {
                          Accept: 'application/json'
                        },
                method: 'get',
                queryparams: null,
                apibaseurl: 'https://randomuser.me',
                apipath: '/api/'
              };

class ApiGetClient {

  constructor(options) {
    console.log("I'm here");
    this.parent(options);
    this.setApiUrl();
    this.setQueryParams(this.options.queryparams);
    this.send();
  }

  setApiUrl() {
    console.log("I'm here");
    this.apiurl = this.options.apibaseurl;
    this.apiurl += this.options.apipath;
  }

  setQueryParams(params) {
    var apiquerystring = {};
    if (params) {
      Object.merge(apiquerystring, params);
    }
    if (Object.getLength(apiquerystring) > 0) {
      this.apiurl += '?' + Object.toQueryString(apiquerystring);
      this.apiurl = this.apiurl.replace("'", '%27');
    }
  }

  getRequestUrl() {
    return this.apiurl;
  }

  send (query_string) {
    if (typeof(query_string) === 'string') {
      this.setOptions({
        postdata: query_string.parseQueryString()
      });
    }
    var requesturl = this.getRequestUrl();
    this.setOptions({
      url: requesturl,
      data: this.options.postdata
    });
    this.parent(query_string);
  }

};


