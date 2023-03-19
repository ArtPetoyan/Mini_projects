let form = document.querySelector('#form'),
	but1 = document.querySelector('#but1'),
	but2 = document.querySelector('#input3'),
	img = document.querySelector('#img'),
	log = 'test@ts.ts', pass = 'Artur2000.15';

but2.addEventListener('click', login);
onkeydown = (e) => {
	if (e.key == 'Enter') login();
};
function login() {
	try {
		if (input1.value == log && input2.value == pass) {
			form.submit();
			form.remove();
			img.style.display = 'block';
			alert('Success!!!')
		} else {
			form.reset();
			throw new Error ('Please write correct login/password!!!');
		}
	} catch (e) {
		alert(`${e.name}: ${e.message}`)
	}
}
function none () {
	form.style.display = 'flex';
	but1.style.display = 'none';
}




