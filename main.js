var songLog = {
    definitionOfTheEnd: function (data) { //Функция определния окончания
        var remainderOfTheDivision = data % 10; //Определяем остаток от деления
        if (remainderOfTheDivision == 1) {
            return "ка";
        } else if (remainderOfTheDivision >= 5 && remainderOfTheDivision <= 9 || data >= 11 && data <= 14) {
            return "ок";
        } else {
            return "ки ";
        }
    },
    generateSongText: function () { //Функция генерации текста
        var count = 99; //Cчетчик
        var firstEnd, secondEnd; // Окончания предложений
        while (count > 0) {

            firstEnd = this.definitionOfTheEnd(count);// Определяем первое окончание
            console.log("");
            console.log(count + " бутыл" + firstEnd + " пива на стене.");
            console.log(count + " бутыл" + firstEnd + " пива!");
            console.log("Возьми одну, пусти по кругу.");
            count--; //Уменьшаем счетчик
            secondEnd = this.definitionOfTheEnd(count); // Определяем второе окончание
            if (count != 0) {
                console.log(count + " бутыл" + secondEnd + " пива на стене!");
            } else {
                console.log("Не осталось бутылок пива на стене.");
            }
        }
    }
};

//Запуск программы
songLog.generateSongText();
