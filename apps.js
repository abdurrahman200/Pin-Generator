function getPin() {
	const random = Math.random() * 10000;
	const pin = (random + '').split('.')[0];
	if (pin.length === 4) {
		return pin;
	}
	else {
		return getPin();
	}
}
// generate pin
function generatePin() {
	const pinInput = document.getElementById('pin')
	pinInput.value = getPin();
}
//  Handle calculate Button
const digitBtn = document.getElementById('digit');
digitBtn.addEventListener('click', function () {
	const digit = event.target.innerText;
	if (isNaN(digit)) {
		if (digit === 'C') {
			const digitInput = document.getElementById('digitInput');
			digitInput.value = '';
		}
	}
	else {
		const digitInput = document.getElementById('digitInput');
		digitInput.value += digit;
	}
})
// handle verifyPin Button
function verifyPin() {
	const pin = document.getElementById('pin').value;
	const digitPin = document.getElementById('digitInput').value;
	if (pin === digitPin) {
		display('block' ,'none')
	}
	else {
		display('none','block')
	}
}
function display(statusB,statusN) {
	const correct = document.getElementById('correct')
	correct.style.display = statusB;
	const inCorrect = document.getElementById('inCorrect')
	inCorrect.style.display = statusN;
}