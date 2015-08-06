var $btns = document.querySelectorAll('button[data-target]');

Array.prototype.slice.call( $btns ).forEach( function ( $btn ) {
  var $target = document.querySelector( $btn.dataset.target );

  if ( $target && $btn.dataset.action === 'toggle' ) {
    $btn.addEventListener('click', function () {
      if ( parseInt( $target.style.height, 10 ) == 0 )
        $target.style.height = $target.children[0].clientHeight + 'px';
      else
        $target.style.height = '0px';
    });
  }
});