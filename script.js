let cvadrat = document.querySelector('.cvadrat');


let buttonCircle = document.querySelector('#button_circle');
let buttonCvadrat = document.querySelector('#button_cvadrat');
let buttonText = document.querySelector('#button_text');


let inputColor = document.querySelector('#input_color');
let inputSizeHeight = document.querySelector('#input_height');
let inputSizeWidth = document.querySelector('#input_width');
let inputBorder = document.querySelector('#input_border');
let inputBorderColor = document.querySelector('#input_bordercolor');
let inputRotate = document.querySelector('#input_rotate');
let inputText = document.querySelector('#input_text');
let inputTextColor = document.querySelector('#input_textcolor');
let inputTextSize = document.querySelector('#input_textsize');



inputColor.addEventListener('change', function(){
	cvadrat.style.backgroundColor = inputColor.value;
});
inputSizeHeight.addEventListener('change', function(){
	cvadrat.style.height = inputSizeHeight.value+'px';
});
inputSizeWidth.addEventListener('change', function(){
	cvadrat.style.width = inputSizeWidth.value+'px';
});
inputBorder.addEventListener('change', function(){
	cvadrat.style.border = inputBorder.value+'px';
	cvadrat.style.borderStyle = 'solid';
	cvadrat.style.borderColor = inputBorderColor.value;		
});
buttonCircle.addEventListener('click', function(){
	cvadrat.style.borderRadius = 100+'%';

});
buttonCvadrat.addEventListener('click', function(){
	cvadrat.style.borderRadius = 0+'px';

});
inputRotate.addEventListener('change', function(){
	cvadrat.style.transform = 'rotate('+inputRotate.value+'deg)';
});
buttonText.addEventListener('click', function(){
	cvadrat.innerText = inputText.value;
});
inputTextColor.addEventListener('change', function(){
	cvadrat.style.color = inputTextColor.value;
});
inputTextSize.addEventListener('change', function(){
	cvadrat.style.fontSize = inputTextSize.value+'px';
});

