*This repository is a mirror of the [component](http://component.io) module [bmcmahen/modal](http://github.com/bmcmahen/modal). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/bmcmahen-modal`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# modal

  A simple, bootstrap-like modal dialog written in pure Javascript.

## Installation

    $ component install bmcmahen/modal

  or use the standalone version in the `standalone` directory, and attach the script and css to your HTML page.

## Use

To use the HTML api, you need to specifically call `listen()`. The `data-modal-id` attribute directs us to the id of the modal dialog markup. Use `data-modal-close` on a button within the modal to close it.

```html

<a href='#' tabindex='-1' data-show-overlay='true' data-modal-id='myModal'>show modal</a>

<div id='myModal' class='modal fade' tabindex='-1' aria-labelledby='myModalLabel' role='dialog' aria-hidden='true'>
    <div class='modal-dialog'>
      <div class='modal-content'>
        <div class='modal-header'>
          <button type='button' class='close' data-modal-close='true' aria-hidden='true'>&times;</button>
          <h4 class='modal-title' id='myMOdalLabel'>Modal title</h4>
        </div>
        <div class='modal-body'>
          <h3>header</h3>
          <p> Lorem ipsum Do sit aute minim id et quis amet eiusmod cillum consectetur ad in nisi do sunt consectetur Duis minim deserunt ut et consequat sed ullamco in minim. </p>
        </div>
        <div class='modal-footer'>
          <a href='#' data-modal-close='true'>hide modal</a>
        </div>
      </div>
    </div>
  </div>
```

Or you can use the Javascript API.

```javascript
var modal = require('modal');
var myModal = modal(document.querySelector('#myModal'));

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
