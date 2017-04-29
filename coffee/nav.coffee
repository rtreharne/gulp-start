$(window).scroll ->
  scroll = $(window).scrollTop()
  console.log scroll
  if scroll >= 50
    console.log 'a'
    $('.navBar').addClass 'scrolled'
  else
    #console.log('a');
    $('.navBar').removeClass 'scrolled'
  return
