var mdWidget = function(srcEle, destEle){
  $(srcEle).on('keyup', 'textarea', function(){

    // get the text
    // ask the model to convert it to html
    // ask the view to display it

    identityTransform(srcEle, destEle);
  });
}