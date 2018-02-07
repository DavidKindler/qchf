// this is breaking in library.jsp currently.  Will return null function if not defined.
if (!window.trackSoftwareCenterAnalytics) {
  window.trackSoftwareCenterAnalytics = () => {};
}
if (!window.trackDownloadAnalyticsCommon) {
  window.trackDownloadAnalyticsCommon = () => {};
}
if (!window.trackExitLnkForAnalyticss) {
  window.trackExitLnkForAnalytics = () => {};
}
if (!window.sendAnalyticsData) {
  window.sendAnalyticsData = () => {};
}
// Adding send post message for test
if (!window.sendPostMessage) {
  window.sendPostMessage = () => {};
}
// Adding open function fot testing
if (!window.open) {
  window.open = () => {};
}
export function getFilterArr(filter) {
  let filterArr = filter.split('&').map(e => {
    let obj = {};
    obj[e.split('=')[0]] = e.split('=')[1].split(',');
    return obj;
  });
  return filterArr;
}

export function addFilter(params, history, type, value, typename, valuename) {
  let filterTypeIndex = params.filterArr.findIndex(e => e.hasOwnProperty(type));
  let retFilterArr = params.filterArr.slice();

  if (filterTypeIndex == -1) {
    let obj = {};
    obj[type] = [value];
    retFilterArr.push(obj);
  } else {
    let filterIndex = retFilterArr[filterTypeIndex][type].findIndex(e => e == value);
    if (filterIndex == -1) {
      retFilterArr[filterTypeIndex][type].push(value);
    }
  }

  let var57 = 'Software Store - Filter Applied';
  let var58 = typename + ': ' + valuename;
  setFilter(params, history, retFilterArr, var57, var58);
}

export function removeFilter(params, history, type, value, typename, valuename) {
  let filterTypeIndex = params.filterArr.findIndex(e => e.hasOwnProperty(type));
  let retFilterArr = params.filterArr.slice();

  if (filterTypeIndex != -1) {
    let filterIndex = retFilterArr[filterTypeIndex][type].findIndex(e => e == value);
    if (filterIndex != -1) {
      retFilterArr[filterTypeIndex][type].splice(filterIndex, 1);
      if (!retFilterArr[filterTypeIndex][type].length) {
        retFilterArr.splice(filterTypeIndex, 1);
      }
    }
  }

  let var57 = 'Software Store - Filters Removed';
  let var58 = typename + ': ' + valuename;
  setFilter(params, history, retFilterArr, var57, var58);
}

export function clearAllFiltersByType(params, history, type, name) {
  let filterTypeIndex = params.filterArr.findIndex(e => e.hasOwnProperty(type));
  let retFilterArr = params.filterArr.slice();

  if (filterTypeIndex != -1) {
    retFilterArr.splice(filterTypeIndex, 1);
  }
  let var57 = 'Software Store - Filters Removed';
  let var58 = name;
  setFilter(params, history, retFilterArr, var57, var58);
}

export function clearAllRefineSearchFilters(params, history) {
  let retFilterArr = params.filterArr.filter(e => e.hasOwnProperty('c'));

  let var57 = 'Software Store - Reset All Parametric Filters';
  let var58 = null;
  setFilter(params, history, retFilterArr, var57, var58);
}

export function addHierarchyFilter(params, history, type, value, name) {
  let filterTypeIndex = params.filterArr.findIndex(e => e.hasOwnProperty(type));
  let retFilterArr = params.filterArr.slice();

  if (filterTypeIndex != -1) {
    let filterIndex = retFilterArr[filterTypeIndex][type].findIndex(e => e == value);
    if (filterIndex != -1) {
      retFilterArr[filterTypeIndex][type].splice(filterIndex + 1);
    }
  }

  let var57 = 'Software Store - Filter Applied';
  let var58 = 'Device Type: ' + name;
  setFilter(params, history, retFilterArr, var57, var58);
}

function setFilter(params, history, filterArr, var57, var58) {
  let pathname;
  let filter = filterArr
    .map(e => {
      for (var k in e) {
        if (e.hasOwnProperty(k)) {
          return k + '=' + e[k].join(',');
        }
      }
      return e;
    })
    .join('&');

  if (!filter) {
    filter = '~filter~';
  }
  callTrackSoftwareCenterAnalytics(var57, var58);
  pathname = '/home/' + params.tname + '/' + params.query + '/' + filter + '/' + params.sortby + '/0';
  history.push(pathname);
}

export function setTname(params, history, tname, name) {
  let var57 = tname == 'query' ? 'Software Store - Filters Removed' : 'Software Store - Filter Applied';
  let var58 = tname == 'query' ? 'Software Category' : 'Software Category: ' + name;
  callTrackSoftwareCenterAnalytics(var57, var58);
  let pathname = '/home/' + tname + '/' + params.query + '/' + params.filter + '/' + params.sortby + '/0';
  history.push(pathname);
}
export function setQuery(params, history, query) {
  let var57 =
    query == '~query~'
      ? 'Software Store - No Keyword, Filters Applied'
      : 'Software Store: Results of ' + query + ', Filters Applied';
  let var58 = null;
  callTrackSoftwareCenterAnalytics(var57, var58);
  let pathname = '/home/' + params.tname + '/' + query + '/' + params.filter + '/' + params.sortby + '/0';
  history.push(pathname);
}
export function setSort(params, history, sortby) {
  let var57 = 'Software Search - Sort by ' + sortby.charAt(0).toUpperCase() + sortby.substr(1);
  let var58 = null;
  callTrackSoftwareCenterAnalytics(var57, var58);
  let pathname = '/home/' + params.tname + '/' + params.query + '/' + params.filter + '/' + sortby + '/0';
  history.push(pathname);
}

function callTrackSoftwareCenterAnalytics(var57, var58) {
  console.log('var 57=', var57);
  console.log('var 58=', var58);
  try {
    window.trackSoftwareCenterAnalytics(var57, var58);
  } catch (e) {
    console.error('trackSoftwareCenterAnalytics function call not successful.', e);
  }
}

export function openCollateral(url) {
  return e => {
    window.open(url);
    recordDwnld(url);
    try {
      window.trackDownloadAnalyticsCommon(url, true);
    } catch (e) {
      console.error('trackDownloadAnalyticsCommon function call not successful.', e);
    }
  };
}
export function openFlexCollateral(flexUrl, assetId) {
  recordFlexDwnld(flexUrl, assetId);
  return e => {
    console.log('Value' + flexUrl + 'and' + assetId);
    window.open(flexUrl);
  };
}

export function callExternalUrl(url) {
  return e => {
    window.location.assign(url);
  };
}

export function openThirdPartyUrl(url, title) {
  recordPartner(url, title);
  return e => {
    window.open(url);
    try {
      window.trackExitLnkForAnalytics(url);
    } catch (e) {
      console.error('trackExitLnkForAnalytics function call not successful.', e);
    }
  };
}

export function callSendAnalyticsData(responseData, tname) {
  var selectedFilterString = 'Asset Type~SoftwareTools';
  var currentPageNum = +responseData.currentPage + 1;
  console.log('params', responseData.metadata.q, selectedFilterString, responseData.metadata.count, currentPageNum);
  for (var i in responseData.selectedFilterList) {
    if (i != 'itemValidation' && i != 'isArray') {
      selectedFilterString +=
        '$' + responseData.selectedFilterList[i].name + '~' + responseData.selectedFilterList[i].Shortname;
    }
  }
  for (var j in responseData.leftNav) {
    for (var k in responseData.leftNav[j].subMenu) {
      if (tname == responseData.leftNav[j].subMenu[k].link) {
        selectedFilterString +=
          '$' +
          'Software & Tools Type' +
          '~' +
          responseData.leftNav[j].subMenu[k].parenttname +
          '$' +
          'Software & Tools Type' +
          '~' +
          responseData.leftNav[j].subMenu[k].name;
      } else {
        for (var l in responseData.leftNav[j].subMenu[k].nextLevel) {
          if (tname == responseData.leftNav[j].subMenu[k].nextLevel[l].link) {
            var parent = responseData.responseData.leftNav[j].subMenu[k].parenttname;
            selectedFilterString +=
              '$' +
              'Software & Tools Type' +
              '~' +
              parent +
              '$' +
              'Software & Tools Type' +
              '~' +
              responseData.responseData.leftNav[j].subMenu[k].nextLevel[l].parenttname +
              '$' +
              'Software & Tools Type' +
              '~' +
              responseData.leftNav[j].subMenu[k].nextLevel[l].name;
          }
        }
      }
    }
  }
  try {
    sendAnalyticsData(responseData.metadata.q, selectedFilterString, responseData.metadata.count, currentPageNum);
  } catch (e) {
    console.error('SendAnalyticsData function call not successful.', e);
  }
}

function recordDwnld(path) {
  var index = path.toUpperCase().indexOf('/FILES');
  if (index != -1) {
    var linkurl = path.substring(index);
    var page_nodeId = document.getElementById('pageNodeId') ? document.getElementById('pageNodeId').value : '';
    var page_typeName = document.getElementById('pageType') ? document.getElementById('pageType').value : '';
    var commandId = 'DOWNLOAD';
    recordDwnldSWHistory(page_nodeId, page_typeName, linkurl, commandId);
  } else {
    var linkurl = path.substring(index);
    var page_nodeId = document.getElementById('pageNodeId') ? document.getElementById('pageNodeId').value : '';
    var page_typeName = document.getElementById('pageType') ? document.getElementById('pageType').value : '';
    var commandId = 'DOWNLOAD';
    recordDwnldSWHistory(page_nodeId, page_typeName, linkurl, commandId);
  }
}

function recordDwnldSWHistory(parentId, parentPageType, download_url, commandID, qry, historyPopup) {
  //var url = '/webapp/history/recordHistory.sp';
  var url = '';
  var obj = new Object();
  obj.downloadLink = download_url;
  obj.parentID = parentId;
  obj.parentType = parentPageType;
  obj.commandID = commandID;
  obj.assetType = 'download';
  obj.fromHistoryPopUp = historyPopup;
  obj.referrerUrl = document.referrer;
  obj.actionAttribute = 'download';
  obj.actionAttributeValue = '1';

  var recoUrl = '';
  var flag;
  var attrValues = null;
  var attrNames = null;
  if (qry != null) {
    flag = qry.lastIndexOf('&fr=');
    if (flag < 0) {
      flag = qry.lastIndexOf('fr=');
    }
    if (flag > -1) {
      recoUrl = qry.substring(flag);
    }
  }

  if (recoUrl != '') {
    attrNames = 'fromRecommendation';
    if (recoUrl.indexOf('gdc') >= 0) attrValues = 'gen_doc';
    else if (recoUrl.indexOf('gtl') >= 0) attrValues = 'gen_tool';
    else if (recoUrl.indexOf('gsc') >= 0) {
      attrValues = 'gen_cart';
      var parameters = recoUrl.split('&');
      for (var mm = 0; mm < parameters.length; mm++) {
        var parameters1 = parameters[mm].split('=');

        if (
          parameters1 != null &&
          parameters1.length >= 2 &&
          parameters1[0] != null &&
          parameters1[0] != '' &&
          parameters1[1] != null &&
          parameters1[1] != ''
        ) {
          if (parameters1[0] == 'cart_opn') {
            attrNames = attrNames + ',cart_opn';
            attrValues = attrValues + ',' + parameters1[1];
          } else if (parameters1[0] == 'cart_weborderid') {
            attrNames = attrNames + ',cart_weborderid';
            attrValues = attrValues + ',' + parameters1[1];
          }
        }
      }
    } else if (recoUrl.indexOf('p') >= 0) attrValues = 'personal';
    else if (recoUrl.indexOf('g') >= 0) attrValues = 'general';
    if (attrValues != null && attrNames != null) {
      obj.attrNames = attrNames;
      obj.attrValues = attrValues;
    }
  }
  try {
    window.sendPostMessage(url, obj);
  } catch (e) {
    console.error('sendPostMessage function call not successful.', e);
  }
}

function recordPartner(path, name) {
  var assetId = path + '~~' + name;
  var linkurl = path;
  var page_nodeId = document.getElementById('pageNodeId') ? document.getElementById('pageNodeId').value : '';
  var page_typeName = document.getElementById('pageType') ? document.getElementById('pageType').value : '';
  var commandId = 'PARTNER';
  recordPartnerHistory(page_nodeId, page_typeName, linkurl, commandId, assetId);
}

function recordPartnerHistory(parentId, parentPageType, download_url, commandID, assetId) {
  var url = ROOT_URL_METRICS + '/webapp/history/recordHistory.sp';
  var obj = new Object();
  obj.downloadLink = download_url;
  obj.parentID = parentId;
  obj.parentType = parentPageType;
  obj.commandID = commandID;
  obj.assetType = 'partner';
  obj.assetID = assetId;
  obj.referrerUrl = document.referrer;
  obj.actionAttribute = 'partner';
  obj.actionAttributeValue = '1';
  window.sendPostMessage(url, obj);
}

function recordFlexDwnld(path, id) {
  var linkurl = path;
  var commandId = 'BROWSE_WEBPAGE';
  var assetId = id;
  recordFlexDownload(commandId, assetId);
}

function recordFlexDownload(commandID, assetId) {
  var url = ROOT_URL_METRICS + '/webapp/history/recordHistory.sp';
  var obj = new Object();
  obj.commandID = commandID;
  obj.assetType = 'flex_download';
  obj.assetID = assetId;
  obj.actionAttribute = 'download';
  obj.actionAttributeValue = '1';
  window.sendPostMessage(url, obj);
}
