/** 
* Fuction for Star Wars animation to animate each letter of the text as a separate element.
* Written with ES5 to support more browsers. Needed to be refactored.
*/
(function spanization() {
    var textContainer = document.getElementsByClassName('c-starwars__text')[0];
    var textArray = textContainer.textContent.split('');
    textContainer.textContent = '';

    var spanedText = textArray.map(function (letter) {
        var element = document.createElement('span');

        if(letter === ' ') {
            element.textContent = 'X';
            element.style.visibility = 'hidden';
        } else {
            element.textContent = letter;
        }

        textContainer.appendChild(element);
        return element;
    })
})();

/** 
 * WOW library initialization
 */
new WOW().init();