//Позиция корабля 
const randomLoc = Math.floor(Math.random() * 5); // рандомное целое число от 0 до 4 
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

//Потоплен или нет
let isSuk = false;
//Предпологаемая позиция корабля (выстрел)
let guess;
//Добовляем счетчик попаданий 
let hits = 0;
//Создаем счетчик выстрелов
let guesses = 0;


while (isSuk === false) {
    //превращаем строку в число и запрашиваем позицию выстрела
    guess = +prompt("Fite! Enter a number 0-6");
    if (guess < 0 || guess > 6) {
        alert("Please, enter a valid cell number")
    } else {
        //увеличиваем счетчик выстрелов
        guesses++
        // логическое или и логический цикл
        if (guess === location1 || guess === location2 || guess === location3) {
            alert("HIT!");
            hits++
            //считаем попадания
            if (hits === 3) {
                isSuk = true
                alert("You sank my battleship!")

            }
        } else {
            alert("MISS!");
        }

    }
}

const stats = `You have ${hits} hits out of ${guesses} shots`;
alert (stats);