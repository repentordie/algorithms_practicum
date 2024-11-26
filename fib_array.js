function fib(n) {
    // Проверяем, что n находится в допустимом диапазоне
    if (n < 1 || n > 40) {
        console.log("Введите число от 1 до 40");
        return;
    }

    // Создаем массив для хранения чисел Фибоначчи
    const fibArray = new Array(n + 1).fill(0); // Инициализируем массив нулей
    fibArray[1] = 1; // fib(1) = 1
    if (n > 1) {
        fibArray[2] = 1; // fib(2) = 1
    }

    // Заполняем массив с помощью цикла
    for (let i = 3; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2]; // Вычисляем текущее число Фибоначчи
    }

    return fibArray;
}
const n = 8; 
const result = fib(n);
console.log(`fib(${n}) = ${result}`);
// Время выполнения - 50 мс
// Сложность - O(n)