$(document).ready(function () {
	$('#add').click(function () {
		const num1 = parseFloat($('#num1').val());
		const num2 = parseFloat($('#num2').val());
		if (!isNaN(num1) && !isNaN(num2)) {
			$('#result').text('Результат: ' + (num1 + num2));
		} else {
			$('#result').text('Будь ласка, введіть обидва числа!');
		}
	});
});
