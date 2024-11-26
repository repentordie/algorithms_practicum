function fib(n) {
    // Проверяем, что n находится в допустимом диапазоне
    if (n < 0 || n > 24) {
        console.log("Введите число от 1 до 24");
        return;
    }
    // Базовые случаи
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    // Рекурсивный вызов для вычисления n-го числа Фибоначчи
    return fib(n - 1) + fib(n - 2);
}
const n = 6; 
const result = fib(n);
console.log(`fib(${n}) = ${result}`);
//Время выполнения - 56 мс
//Сложность - O(2^n)