/*function sends alert to page when links clicked*/
function confirm_alert(node) {
	return confirm("Leaving Page? Confirm to continue.");
}
/*function to reload page when called*/
function reload() {
	window.location.reload(false);
}
/*function to add a class to an element*/
function addClass(elements, className) {
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.classList) {
			element.classList.add(className);
		}
	}
}

/*function to remove a class of an element*/
function removeClass(elements, className) {
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.classList) {
			element.classList.remove(className);
		}
	}
}
/*array set to change skills*/
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

/*this function changes language and styling to arabic text*/
function arabic(name) {
	var myName = document.getElementById('name');
	var flip = document.getElementById('flip');
	var backFont = document.getElementById('flip-font');
	var elem = document.getElementsByClassName('ch');
	var el = document.getElementsByClassName('gone');
	var sor = document.getElementsByClassName('sort');
	if (name = 'arabic') {
		myName.innerHTML = 'ميساء احمد';

		//created an array of ids so that I may change styles for each without having to add another line of code for each
		['name', 'start', 'intro', 'end'].forEach(function (id) {

			document.getElementById(id).style.textAlign = "right";
			document.getElementById(id).style.fontFamily = "Katibeh, cursive";
			document.getElementById(id).style.fontSize = "1.5em";

		});
		myName.style.fontSize = "1.75em";
		flip.style.backgroundImage = "url('images/aqsa.jpg')";

		backFont.innerHTML = '❤️لتحيا فلسطين حره';
		backFont.style.marginTop = "100px";
		backFont.style.fontSize = "18px";
		myName.style.marginLeft = "90px";
		myName.style.marginBottom = "10px";
		document.getElementById('start').innerHTML = '<br>بسم الله الرحمن الرحيم';
		document.getElementById('intro').innerHTML = '<br>اسمي ميساء ، بخلاف التكنولوجيا ، أريد أن أظهر جنسيتي. كثيرا ما أشاهد في أمريكا العرب ينفصلون عن ثقافتهم ودينهم. بدلاً من ذلك ، أريد أن أتأكد من أنني أمثل فلسطين والإسلام جيدًا. لم يسبق لي أن رأيت قطعة من وسائل الإعلام تمثلنا بدقة. لا شيء. وهذا يشمل كيف تبدو بلادنا ، وكيف نتكلم ، وكيف نكتب (أنا متأكد من أننا جميعًا رأينا قطعًا في الكتابة العربية مثل ا ن ة ك ط ا ث) ، والدعوة للصلاة والصلاة. لم يقترب أي منها حتى الآن ، لكنني دائمًا أرى الثناء على التنوع. إنه أمر مزعج بالنسبة لي لأنه يمكن إصلاحه بشكل أكبر من خلال بحث بسيط على الإنترنت. هدفي هو تقديم تمثيل دقيق للعرب والمسلمين في التكنولوجيا والإعلام';
		document.getElementById('end').innerHTML = '<br>كما أود أن ألفت الانتباه إلى فلسطين ، بلدي الجميل. إن شاء الله ، سأعود إلى فلسطين الحرة'


		for (var i = 0; i < elem.length; i++) {
			elem[i].innerHTML = select_1[i];
			elem[i].style.textAlign = "right";
		}
		for (var i = 0; i < el.length; i++) {
			el[i].innerHTML = "";
			if (el[i] && el[i].parentElement) {
				el[i].parentNode.removeChild(el[i]);
			}
		}
		removeClass(sor, 'sort');
	}
}
/*function hides or shows projects based on the value of the select options picked*/
function changeFunc() {
	var notc = document.getElementsByClassName('notc');
	var notM = document.getElementsByClassName('notM');
	var notW = document.getElementsByClassName('notW');
	var notP = document.getElementsByClassName('notP');
	var selectBox = document.getElementById("filter");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	if (selectedValue == 0) {
		removeClass(notM, 'remove');
		removeClass(notc, 'remove');
	}
	if (selectedValue == 1) {
		removeClass(notM, 'remove');
		addClass(notc, 'remove');

	}
	if (selectedValue == 2) {
		removeClass(notc, 'remove');
		removeClass(notM, 'remove');
		addClass(notW, 'remove');
	}
	if (selectedValue == 3) {
		removeClass(notc, 'remove');
		removeClass(notW, 'remove');
		addClass(notM, 'remove');

	}
	if (selectedValue == 4) {
		removeClass(notc, 'remove');
		removeClass(notM, 'remove');
		addClass(notP, 'remove');
	}
}
