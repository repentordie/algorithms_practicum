function huffman_decode(uniqueCount, encodedSize, codes, encodedString) {
    // Создаем обратное отображение кодов символов
    const codeToChar = {};
    for (const line of codes) {
        const [symbol, code] = line.split(': ').map(item => item.trim().replace(/'/g, ''));
        codeToChar[code] = symbol; // Сохраняем соответствие код -> символ
    }

    let currentCode = '';
    let decodedString = '';

    // Проходим по закодированной строке
    for (const bit of encodedString) {
        currentCode += bit; // Добавляем текущий бит к коду

        // Если текущий код соответствует символу, добавляем его в результат
        if (currentCode in codeToChar) {
            decodedString += codeToChar[currentCode];
            currentCode = ''; // Сбрасываем текущий код
        }
    }

    return decodedString;
}


const uniqueCount = 12; // Количество уникальных символов
const encodedSize = 60; // Размер закодированной строки
const codes = [
    "' ': 1011",
    "'.': 1110",
    "'D': 1000",
    "'c': 000",
    "'d': 001",
    "'e': 1001",
    "'i': 010",
    "'m': 1100",
    "'n': 1010",
    "'o': 1111",
    "'s': 011",
    "'u': 1101"
]; // Коды символов
const encodedString = "100011110001001101000111111011001010011000010110011010111110"; // Закодированная строка


const result = huffman_decode(uniqueCount, encodedSize, codes, encodedString);
console.log(result); 
// Время выполнения - 43 мс
// Сложность - O(n)