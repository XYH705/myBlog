/**
 * 分享QQ好友
 * @param  {[type]} title [分享标题]
 * @param  {[type]} url   [分享url链接，默认当前页面链接]
 * @param  {[type]} pic   [分享图片]
 * @return {[type]}       [description]
 */
function shareQQ(title, url, pic) {
  var param = {
    url: url || window.location.href,
    desc: '',
    /*分享理由*/
    title: title || '',
    /*分享标题(可选)*/
    summary: '',
    /*分享描述(可选)*/
    pics: pic || '',
    /*分享图片(可选)*/
    flash: '',
    /*视频地址(可选)*/
    site: '' /*分享来源 (可选) */
  };
  var s = [];
  for (var i in param) {
    s.push(i + '=' + encodeURIComponent(param[i] || ''));
  }
  var targetUrl = "https://connect.qq.com/widget/shareqq/index.html?" + s.join('&');
  window.open(targetUrl, '_blank', 'height=520, width=720');
}

/**
 * 微信分享
 */
function shareWeixin() {
  var url = window.location.href,
    encodePath = encodeURIComponent(url),
    targetUrl = 'http://zixuephp.net/inc/qrcode_img.php?text=' + encodePath;
  window.open(targetUrl, 'weixin', 'height=320, width=320');
}

/**
 * 分享新浪微博
 * @param  {[type]} title [分享标题]
 * @param  {[type]} url   [分享url链接，默认当前页面]
 * @param  {[type]} pic   [分享图片]
 * @return {[type]}       [description]
 */
function shareSinaWeiBo(title, url, pic) {
  var param = {
    url: url || window.location.href,
    type: '3',
    count: '1',
    /** 是否显示分享数，1显示(可选)*/
    appkey: '',
    /** 您申请的应用appkey,显示分享来源(可选)*/
    title: title,
    /** 分享的文字内容(可选，默认为所在页面的title)*/
    pic: pic || '',
    /**分享图片的路径(可选)*/
    ralateUid: '',
    /**关联用户的UID，分享微博会@该用户(可选)*/
    rnd: new Date().valueOf()
  }
  var temp = [];
  for (var p in param) {
    temp.push(p + '=' + encodeURIComponent(param[p] || ''))
  }
  var targetUrl = 'http://service.weibo.com/share/share.php?' + temp.join('&');
  window.open(targetUrl, 'sinaweibo', 'height=800, width=800');
}
// https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc=121212&url=http%3A%2F%2Fzhidao.baidu.com%2Fquestion%2F2016581036508970748%3Fsharesource%3Dqzone&title=vue%E5%A6%82%E4%BD%95%E5%A4%9A%E6%AC%A1%E8%B0%83%E7%94%A8%E8%B0%83%E7%94%A8%E8%87%AA%E8%BA%AB%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%8F%AA%E6%98%AF%E6%95%B0%E6%8D%AE%E4%B8%8D%E4%B8%80%E6%A0%B7_%E7%99%BE%E5%BA%A6%E7%9F%A5%E9%81%93&pics=https%3A%2F%2Fgss0.bdstatic.com%2F70cFsjip0QIZ8tyhnq%2Fimg%2Fiknow%2Fzhidaologo.png
function shareQZon(title, url, pic) {
  var param = {
    url: url || window.location.href,
    desc: '',
    /*分享理由*/
    title: title || '',
    /*分享标题(可选)*/
    summary: '',
    /*分享描述(可选)*/
    pics: pic || '',
    /*分享图片(可选)*/
    flash: '',
    /*视频地址(可选)*/
    site: '' /*分享来源 (可选) */
  };
  var temp = [];
  for (var p in param) {
    temp.push(p + '=' + encodeURIComponent(param[p] || ''))
  }
  var targetUrl = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + temp.join('&');
  window.open(targetUrl, 'sinaweibo', 'height=800, width=800');
}