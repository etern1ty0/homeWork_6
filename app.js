
// задание 1
let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
let [elem1, elem2, ...arr] = newArr;
document.write(elem1 + '| '+ elem2 + '|' +arr);
func(newArr)

// задание 2
let newArr2 = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
newArr.reverse();
let [elem3, elem4] = newArr;
document.write(elem3 + '|'+ elem4);
func(newArr2)

//задание 3
function func(a = 'Аноним') {
	alert('Привет, '+ a );
}

let name = 'Юзернейм';
func(name);