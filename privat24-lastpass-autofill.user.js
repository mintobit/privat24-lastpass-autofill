// ==UserScript==
// @name        Privat24 LastPass autofill
// @version     1.0.0
// @description LastPass can not autofill inputs that don't have "name" attribute. This script adds name="lastpass-p24-phone-numer" to phone element at Privat24 login page. If you configure LastPass field using that name, it will be able to autofill phone number.
// @license     MIT
// @author      Anton Nizhegorodov
// @namespace   https://github.com/mintobit
// @updateURL   https://github.com/mintobit/privat24-lastpass-autofill/raw/master/privat24-lastpass-autofill.user.js
// @downloadURL https://github.com/mintobit/privat24-lastpass-autofill/raw/master/privat24-lastpass-autofill.user.js
// @match       https://login-widget.privat24.ua
// ==/UserScript==

(function(document) {
    'use strict';

    function injectInputName()
    {
        var phoneInput = document.querySelector('.module-login input[type=text][data-qa-node=login-number]');
        if (null !== phoneInput && phoneInput.name === "") {
            phoneInput.name = 'lastpass-p24-phone-number';
            clearInterval(intervalId);
        }
    }

    var intervalId = setInterval(injectInputName, 200);
})(document);