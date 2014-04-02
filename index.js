/**
 * Module Dependencies
 */

var Emitter = require('component-emitter');
var classes = require('component-classes');
var afterTransition = require('anthonyshort-after-transition');
var events = require('component-events');
var delegate = require('component-delegate');
var prevent = require('yields-prevent');
var target = require('bmcmahen-target');
var attr = require('javve-get-attribute');
var isBound;

/**
 * Export Modal
 */

exports = module.exports = Modal;

/**
 * Modal Constructor
 * @param {Element} el
 */

function Modal(el){
  if (!(this instanceof Modal)) return new Modal(el);
  this.el = el;
  this.isShown = false;
  this.bind();
}

Emitter(Modal.prototype);

/**
 * Toggle visibility
 * @return {Modal} 
 */

Modal.prototype.toggle = function(){
  if (this.isShown) this.hide();
  else this.show();
  return this;
};

/**
 * Bind events
 * @return {Modal} 
 */

Modal.prototype.bind = function(){
  this.docEvents = events(document, this);
  this.docEvents.bind('keydown');
  this.events = events(this.el, this);
  this.events.bind('click [data-modal-close]', 'hide');
  this.events.bind('click .modal-content', 'onmodalclick');
  this.events.bind('click');
  return this;
};

Modal.prototype.onmodalclick = function(e){
  e.stopImmediatePropagation();
  return false;
};

Modal.prototype.onclick = function(e){
  if (this.isShown) this.hide();
};

Modal.prototype.unbind = function(){
  this.docEvents.unbind();
  this.events.unbind();
};

var ESC_KEY = 27;

Modal.prototype.onkeydown = function(e){
  if (e.keyCode == ESC_KEY) {
    this.hide();
  }
};

/**
 * Show modal
 * @return {Modal} 
 */

Modal.prototype.show = function(){
  if (this.isShown) return this;
  this.previouslyFocused = document.activeElement;
  this.isShown = true;
  this.emit('showing');
  classes(this.el).add('modal-show');
  var self = this;
  afterTransition(this.el, function(){
    self.emit('shown');
  });
  this.el.focus();
  return this;
};

/**
 * Hide modal
 * @param  {Event} e 
 * @return {Modal}   
 */

Modal.prototype.hide = function(e){
  if (e) prevent(e);
  if (!this.isShown) return this;
  this.unbind();
  this.emit('hiding');
  classes(this.el).remove('modal-show');
  this.previouslyFocused.focus();
  this.isShown = false;
  var self = this;
  afterTransition(this.el, function(){
    self.emit('hidden');
  });
  return this;
};

/**
 * Enable html api
 * @return {Delegation} 
 */

exports.listen = function(){
  if (isBound) return;
  isBound = true;
  return delegate.bind(document, '[data-modal-id]', 'click', function(e){
    prevent(e);
    var el = e.delegateTarget || target(e);
    var _id = attr(el, 'data-modal-id');
    var newModal = new Modal(document.getElementById(_id));
    newModal.show();
  });
};



