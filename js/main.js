
$(document).ready(function() {
 $('#disqus_container .comment').on('click',function(){
         var disqus_shortname = 'wjiancn'; // required: replace example with your forum shortname
  (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
  
 $('#disqus_container .comment').css("display", "none");
  
    });
});
