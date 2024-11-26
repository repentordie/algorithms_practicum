function fib(n) {
    // Проверяем, что n находится в допустимом диапазоне
    if (n < 1 || n > 32) {
        console.log("Введите число от 1 до 32");
        return;
    }

    // Базовые случаи
    if (n === 1) {
        return 1; // fib(1) = 1
    } else if (n === 2) {
        return 1; // fib(2) = 1
    }

    let a = 1; // fib(1)
    let b = 1; // fib(2)
    let result;

    // Итеративный расчет от 3 до n
    for (let i = 3; i <= n; i++) {
        result = a + b; // Текущее число Фибоначчи
        a = b;          // Сдвигаем a на b
        b = result;     // Сдвигаем b на текущее число
    }

    return result; // Возвращаем n-е число Фибоначчи
}

const n = 7; 
const result = fib(n);
console.log(`fib(${n}) = ${result}`);
// Время выполнения - 67 мс
// Сложность - O(n)