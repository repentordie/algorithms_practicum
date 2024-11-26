function fib(n) {
    // Проверяем, что n находится в допустимом диапазоне
    if (n < 1 || n > 64) {
        console.log("Введите число от 1 до 64");
        return;
    }

    // Определяем золотое сечение
    const phi = (1 + Math.sqrt(5)) / 2;

    // Используем формулу Бине для вычисления n-го числа Фибоначчи
    const fibN = (Math.pow(phi, n) - Math.pow(1 - phi, n)) / Math.sqrt(5);

    // Округляем результат и возвращаем его
    return Math.round(fibN);
}


const n = 32; 
const result = fib(n);
console.log(`fib(${n}) = ${result}`);
// Время выполнения - 66 мс
// Сложность - O(1)