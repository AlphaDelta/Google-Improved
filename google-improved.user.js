// ==UserScript==
// @name        Google Improved
// @namespace   Alfur
// @description Makes Google bearable
// @include     http://www.google.*
// @include     http://google.*
// @include     https://www.google.*
// @include     https://google.*
// @version     1.0.2
// @updateURL   https://raw.githubusercontent.com/AlphaDelta/Google-Improved/master/google-improved.meta.js
// @downloadURL https://raw.githubusercontent.com/AlphaDelta/Google-Improved/master/google-improved.meta.js
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @icon        https://raw.githubusercontent.com/AlphaDelta/Google-Improved/master/icon.png
// ==/UserScript==

/* ## Start of Switchboard ## */


/* Nuke - Nuke the front page to a more minimal interface, no bullshit fogging up your screen. */
var nuke = true;

/* Row numbers - Adds row numbers to search results */
var rownum = true;

/* Anti-gateway - Prevents Google from jacking your link clicks and forcing them to go through their redirect gateway */
var antigateway = true;


/* ## End of Switchboard ## */

var x;

var del;

function DoMod() {
  $('#rso .srg li.g:not(.gi-parsed), #rso > li.g:not(.gi-parsed)').each(function (index) {
    var t = $(this);
    t.addClass('gi-parsed');
    t.css('position', 'relative');
    if(rownum) t.prepend('<div style="color: #AAA; position: absolute; height: 100%; width: 20px; margin-left: -25px; margin-top: 2px; text-align: right;">' + (index + 1) + '</div>');
    
    if(antigateway) t.find(".rc > .r > a").first().removeAttr("onmousedown");
  });
}

function DoLines() {
  clearTimeout(del);
  del = setTimeout(DoMod, 200);
}

(function() {
  console.log("Google Improved - 1.0.3");
  x = document.getElementById("main");
  
  if(x.addEventListener){
    x.addEventListener('DOMSubtreeModified', DoLines, false);
  }
  
  if(nuke) {
    /* DEATH TO THE CLUTTER */
    $("#prm-pt").remove(); //Prompt
    $("#footer").remove(); //Footer (obviously)
    $("#gb").remove(); //Top bar
    $("input[name='btnK']").remove(); //Google Search button, farewell
    $("input[name='btnI']").remove(); //I'm Feeling Lucky button, I'll enjoy killing you the most
    
    //var search = $("#searchform.jhp");
    //search.css("top", "45%");
    
    $("head").append("<style type=\"text/css\">#searchform.jhp { top: 45% !important; }</style>");
    
    var logo = $("#hplogo");
    logo.parent().css("padding-top", "");
    logo.parent().parent()
    .css("height", "")
    .css("position", "absolute")
    .css("left", "50%")
    .css("margin-left", "-134px")
    .css("top", "45%")
    .css("margin-top", "-115px");
    
    logo.children().first().text("Clean");
  }
})();