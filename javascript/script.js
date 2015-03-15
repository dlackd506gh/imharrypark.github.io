$(document).ready(
  function(){
    $(".homeimg").mouseenter(
      function(){
        $(this).fadeTo('fast', 0.8);
      }
    );
    $(".homeimg").mouseleave(
      function(){
        $(this).fadeTo('fast',1);
      }
    );
  }
);