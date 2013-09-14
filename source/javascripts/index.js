// This is the index manifest for all of the javascript that gets included
// on all pages. If you need page-specific javascript, it must be included
// in a separate page-specific file.
//
// We use Sprockets as provided via Middleman to automatically concatenate
// several javascript files together.
// http://middlemanapp.com/asset-pipeline/
//
// This file should declare the necessary 3rd party libraries we use.
// It is important to version all 3rd party libraries.
//
// It should also have all of the Next Generation application code.
//
// When Next Generation application code exceeds 100 lines it should be
// extracted out into individual files and `require`d from the index.
//
// KEEP THE INDEX CLEAN!

//////////////////////////////////////////////////////////////////////////
//                          3RD PARTY LIBRARIES                         //
//////////////////////////////////////////////////////////////////////////
//= require "lib/jquery-1.10.2"
//= require "lib/jQueryModal"
//= require "lib/fitText"
//= require "lib/scrolling"
//= require "lib/responsiveSlides"
//= require "lib/googleAnalytics"
/////////// The following are polyfills for < IE8
//= require "lib/console-shim"
//= require "lib/es5-shim.2.0.5"
//= require "lib/html5shiv.3.6.2"
//= require "lib/jquery.placeholder.2.0.8"
//= require "lib/respond.1aa5f5fd"
//= require "lib/typekit"

//////////////////////////////////////////////////////////////////////////
//                             GLOBAL CODE                              //
//////////////////////////////////////////////////////////////////////////

// Any Next Generation specific global code you've written (helpers, etc), get
// required here.

//////////////////////////////////////////////////////////////////////////
//                           PAGE-SPECIFIC CODE                         //
//////////////////////////////////////////////////////////////////////////
jQuery(function($){
  $("h1.hero").fitText(1.8);

  $(".nav-primary-toggle").tclick(function(){
    $(".nav-area").slideToggle('fast');
  });
  // $(".nav-primary-toggle").on("touchstart", function(){
  //   $(".nav-area").slideToggle('fast');
  // });
});
//touch click helper
(function ($) {
  $.fn.tclick = function (onclick) {
    this.bind("touchstart", function (e) { onclick.call(this, e); e.stopPropagation(); e.preventDefault(); });
    this.bind("click", function (e) { onclick.call(this, e); });   //substitute mousedown event for exact same result as touchstart
    return this;
  };
})(jQuery);
