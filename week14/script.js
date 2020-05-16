//function sends alert to page when links clicked
function confirm_alert(node) {
    return confirm("Leaving Page? Confirm to continue.");
}

function addClass(elements, className) {
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.classList) {
			element.classList.add(className);
		} else {
			element.className += ' ' + className;
		}
	}
}

function reload(){
	window.location.reload(false);
}

function removeClass(elements, className) {
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.classList) {
			element.classList.remove(className);
		}
	}
}

var select_1 = [
    "مهم لي",
    "فلسطين -",
    "الاسلام -",
	"التعليم المتاح -",
	"حقوق الانسان -",
	"السيطرة على السلاح -",
	"أنا أحب",
	"تطوير ألعاب الفيديو -",
	"نينتندو -",
	"الرسوم المتحركة -",
	"هايلي ويليامز -",
	"برمجة الحاسب الآلي -"

  ];

//this function changes languages and styling based on the linked pressed (english or arabic)
function arabic(name){
	var myName = document.getElementById('name');
	var flip = document.getElementById('flip');
	var backFont = document.getElementById('flip-font');
	var elem = document.getElementsByClassName('ch');
	var el = document.getElementsByClassName('gone');
	var sor = document.getElementsByClassName('sort');
	if (name = 'arabic'){
		myName.innerHTML = 'ميساء احمد';

		//created an array of ids so that I may change styles for each without having to add another line of code for each
		[ 'name', 'start', 'intro' , 'end'].forEach(function( id ) {

			document.getElementById( id ).style.textAlign = "right";
			document.getElementById( id ).style.fontFamily = "Katibeh, cursive";
			document.getElementById(id).style.fontSize = "1.6em";
		
		});
		myName.style.fontSize = "1.75em";
		flip.style.backgroundImage = "url('images/aqsa.jpg')";
		
		backFont.innerHTML = '❤️لتحيا فلسطين حره';
		backFont.style.marginTop = "100px";
		backFont.style.fontSize = "18px";
		myName.style.marginLeft = "90px";
		myName.style.marginBottom = "10px";
		document.getElementById('start').innerHTML = 'بسم الله الرحمن الرحيم';
		document.getElementById('intro').innerHTML = '<br>اسمي ميساء ، بخلاف التكنولوجيا ، أريد أن أظهر جنسيتي. كثيرا ما أشاهد في أمريكا العرب ينفصلون عن ثقافتهم ودينهم. بدلاً من ذلك ، أريد أن أتأكد من أنني أمثل فلسطين والإسلام جيدًا. لم يسبق لي أن رأيت قطعة من وسائل الإعلام تمثلنا بدقة. لا شيء. وهذا يشمل كيف تبدو بلادنا ، وكيف نتكلم ، وكيف نكتب (أنا متأكد من أننا جميعًا رأينا قطعًا في الكتابة العربية مثل ا ن ة ك ط ا ث) ، والدعوة للصلاة والصلاة. لم يقترب أي منها حتى الآن ، لكنني دائمًا أرى الثناء على التنوع. إنه أمر مزعج بالنسبة لي لأنه يمكن إصلاحه بشكل أكبر من خلال بحث بسيط على الإنترنت. هدفي هو تقديم تمثيل دقيق للعرب والمسلمين في التكنولوجيا والإعلام';
		document.getElementById('end').innerHTML = '<br>كما أود أن ألفت الانتباه إلى فلسطين ، بلدي الجميل. إن شاء الله ، سأعود إلى فلسطين الحرة'
		
		
		for (var i = 0; i < elem.length; i++) {
			elem[i].innerHTML = select_1[i];
			elem[i].style.textAlign = "right";
		  }
		for (var i = 0; i < el.length; i++) {
			el[i].innerHTML = "";
			// if (el[i].parentNode === null) {
			// 	return;
			//   }
			if (el[i] && el[i].parentElement){
			// el[i].remove();
			el[i].parentNode.removeChild(el[i]);
			  }
		}
		removeClass(sor, 'sort');
	}
}
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function changeFunc(){
	var proj = document.getElementsByClassName('projects');
	var notc = document.getElementsByClassName('notc');
	var selectBox = document.getElementById("filter");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	// alert(selectedValue);	
	if (selectedValue == 1){
		// for (var i = 0; i < proj.length; i++) {
		// 	if(hasClass(proj[i], 'notc')){
		// 		// var re = proj[i].innerHTML;
		// 		// proj[i].innerHTML = "";
		// 		addClass(notc, 'remove');
		// 		// alert(selectedValue);
		// 		// removeClass(proj[i], 'projects');
		// 	}
		// }
		addClass(notc, 'remove');
	}
	if (selectedValue == 2){
		for (var i = 0; i < proj.length; i++) {
			if(hasClass(proj[i], 'notc')){
				proj[i].innerHTML = "";
				// alert(selectedValue);
		// 		removeClass(proj[i], 'projects');
			}
		}
	}

}
