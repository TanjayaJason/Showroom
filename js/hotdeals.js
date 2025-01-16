
$('.scnd').ready(function(){
  $images2 = $('.scnd #subimagesRightContainer')
  $largeImage2 = $('.scnd #largeImage')
  $images2.delegate('img','click', function(){
      $largeImage2.attr('src',$(this).attr('src').replace($images2,$largeImage2));
  });
});

$('.thrd').ready(function(){
  $images3 = $('.thrd #subimages');
  $largeImage3 = $('.thrd #largeImage');
  $images3.delegate('img','click', function(){
      $largeImage3.attr('src',$(this).attr('src').replace($images3,$largeImage3));
  });
});

$('.frth').ready(function(){
  $images4 = $('.frth #subimagesRightContainer');
  $largeImage4 = $('.frth #largeImage');
  $images4.delegate('img','click', function(){
      $largeImage4.attr('src',$(this).attr('src').replace($images4,$largeImage4));
  });
});