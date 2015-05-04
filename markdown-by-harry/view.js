var identityTransform = function(srcEle, destEle){

  var $srcData = $(srcEle).children('textarea')[0].value;

  // $(destEle).empty().append($srcData.replace(/\r?\n/g, '<br>'));
  $(destEle).empty().append(mdConverter($srcData));

};