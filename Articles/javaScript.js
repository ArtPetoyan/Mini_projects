class DisplayDropDown {
	dispNone = 'none';
	dispBlock = 'block';
	position = 'absolute';
	top = '50px'
	tTransform = 'capitalize'
	displayNone(x) {
		x.style.display = this.dispNone;
	}
	displayBlock(x) {
		x.style.display = this.dispBlock;
	}
}

const displayDropDown = new DisplayDropDown();
let k = 600;
about.addEventListener('mouseenter', mouseEnter);
about.addEventListener('mouseleave', mouseLeave);
staff.addEventListener('mouseenter', mouseEnter);
staff.addEventListener('mouseleave', mouseLeave);

function mouseEnter() {
	let divDD = this.childNodes[1];
	divDD.style.position = displayDropDown.position;
	divDD.style.top = displayDropDown.top;
	divDD.style.textTransform = displayDropDown.tTransform;
	displayDropDown.displayBlock(divDD);
}
function mouseLeave() {
	let divDD = this.childNodes[1];
	displayDropDown.displayNone(divDD);
}


createButton.addEventListener('click', createArticleFn);
// Article class-ի օգնությամբ կարող ենք ստեղծել նոր հոդվածներ
class Article {
	div = document.createElement('div');
	divImg = document.createElement('div');
	img = document.createElement('img');
	divH1 = document.createElement('h1')
	divText = document.createElement('div')
	text = document.createElement('p');
	button = document.createElement('input');
	constructor(imgSrc, h1, text) {
		this.img.src = imgSrc;
		this.divImg.classList.add('divImg');
		this.divH1.innerHTML = h1;
		this.divText.classList.add('divText');
		this.text.innerHTML = text;
		this.button.type = 'button';
		this.button.value = 'Կարդալ ավելին';
		this.divImg.appendChild(this.img);
		this.div.appendChild(this.divImg);
		this.div.appendChild(this.divH1);
		this.divText.appendChild(this.text);
		this.div.appendChild(this.divText);
		this.div.appendChild(this.button);
		this.div.classList.add('articleClass');
		article.appendChild(this.div);
	}
}

// createArticleFn ֆունկցիան կկանչենք այն դեպքում երբ սեղմենք <Ավելացնել հոդված> կոճակը։
function createArticleFn() {
	// img փոփոխականը կվերցնի այն նկարը, որի հասցեն կավելացվի admin-ի կողմից
	let img = file.value;
	if (!img.includes('http')) {
		// Եթե սխալ հասցե լինի, ծրագիրն ավտոմատ մեկ պատահական նկար կգեներացնի
		k++;
		img = `https://source.unsplash.com/random/${k}x600`;
	}
	// textH1 փոփոխականը կվերցնենք input-ի արժեքից
	let textH1 = title.value.substring(0, 18);
	// text փոփոխականը կվերցնի տեքստի համար նախատեսված input-ի արժեքը
	let text = mainText.value.substring(0,160);
	let article = new Article(img, textH1, text);
	form.reset();
}
