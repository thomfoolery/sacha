var $actors = $('[data-target]');

$actors.each( function ( index, el ) {
  
  var $el = $( el );
  var $target = document.querySelector( el.dataset.target );

  if ( $target && el.dataset.toggle === 'collapse' ) {
    $el.on('click', function () {
      if ( parseInt( $target.style.height, 10 ) )
        $target.style.height = '0px';
      else
        $target.style.height = $target.children[0].clientHeight + 'px';
    });
  }

  if ( $target && el.dataset.action === 'scrollTo' ) {
	  $el.on('click', function ( e ) {
	  	e.preventDefault();
	  	var $target = $(document).find( el.dataset.target );
	  	$('html body').animate({ scrollTop: $target.offset().top }, 1000 )
	  });
  }

});