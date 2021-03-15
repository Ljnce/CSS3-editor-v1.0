var container = document.createElement("div");
container.id = 'style-editor';
document.body.appendChild(container);

// Selector
var selector = document.createElement("textarea");
selector.rows = '2';
selector.cols = '35';
selector.id = 'selector';
selector.placeholder = 'Selector';
selector.classList.add('welcome-animation');
container.appendChild(selector);

// Property
setTimeout(waitForWelcomeSecond, 50);

function waitForWelcomeSecond(){
    var property = document.createElement("textarea");
    property.rows = '2';
    property.cols = '30';
    property.id = 'property';
    property.placeholder = 'Property';
    selector.classList.add('welcome-animation');
    container.appendChild(property);
};

// Css value
setTimeout(waitForWelcomeThird, 100);

function waitForWelcomeThird(){
    var value = document.createElement("textarea");
    value.rows = '2';
    value.cols = '25';
    value.id = 'value';
    value.placeholder = 'Value && Enter';
    selector.classList.add('welcome-animation');
    container.appendChild(value);
};

// Add style with jQuery
// $('#s').keypress(function(event){
//     if (event.keyCode == 13) {
//         var element = $('#element').val()
//         var what = $('#what').val()
//         var style = $('#style').val()
//         $(el).css(what,style)
//     }
// });

// Add style with JS
var value = document.getElementById('value')
value.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var selector = document.getElementById('selector').value;
        var property = document.getElementById('property').value;
        var value = document.getElementById('value').value;
        if (selector && selector.length && property && property.length && value && value.length) {
            // $(selector).css(property,value);
            var allSelector = document.querySelectorAll(selector);
            for (i = 0; i < allSelector.length; i++) {
                allSelector[i].style[property] = value;
            }
            console.log('Style on!');
        }
    }
});

// Add opacity on mouseover
container.onmouseover = function(){
    container.style.opacity = 1;
};

container.onmouseout = function(){
    container.style.opacity = 0.3;
};
