
# modal

  A simple, bootstrap-like modal dialog written in pure Javascript.

## Installation

    $ component install bmcmahen/modal

  or use the standalone version in the `standalone` directory, and attach the script and css to your HTML page.

## Use

You can use the `data-attribute` api, much like Bootstrap. The `data-modal-id` attribute directs us to the id of the modal dialog markup. You can use `data-show-overlay` to enable an overlay, and `data-modal-close` on a button within the modal to close it.

```html

<a href='#' tabindex='-1' data-show-overlay='true' data-modal-id='myModal'>show modal</a>

<div id='myModal' class='modal-dialog' tabindex='-1' role='dialog' aria-hidden='true'>
  <div class='modal-dialog-wrapper'>
    <!-- content here -->
    <a href='#' data-modal-close='true'>hide modal</a>
  </div>
</div>

```

Or you can use the Javascript API.

```javascript
var modal = require('modal');
var myModal = modal(document.querySelector('#myModal'));

myModal.overlay(); // enable the overlay
myModal.show(); // show the modal
myModal.hide(); // hide the modal

myModal.on('showing', function(){
  console.log('modal is in the process of showing..');
});
```

## Events

### showing(fn)
### shown(fn)
### hiding(fn)
### hidden(fn)

## License

  MIT
