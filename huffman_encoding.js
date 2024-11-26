class Node {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

// Функция для построения дерева Хаффмана
function buildHuffmanTree(text) {
    // Подсчет частоты символов
    const frequency = {};
    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Создание массива узлов
    const priorityQueue = Object.keys(frequency).map(char => new Node(char, frequency[char]));
    
    // Сортировка массива узлов по частоте
    priorityQueue.sort((a, b) => a.freq - b.freq);

    // Построение дерева Хаффмана
    while (priorityQueue.length > 1) {
        const left = priorityQueue.shift(); // Узел с наименьшей частотой
        const right = priorityQueue.shift(); // Узел со второй наименьшей частотой

        const merged = new Node(null, left.freq + right.freq);
        merged.left = left;
        merged.right = right;

        // Вставка обратно в массив и сортировка
        priorityQueue.push(merged);
        priorityQueue.sort((a, b) => a.freq - b.freq);
    }

    return priorityQueue[0]; // Корень дерева
}

// Функция для генерации кодов Хаффмана
function generateCodes(node, currentCode = "", codes = {}) {
    if (node === null) return;

    if (node.char !== null) {
        codes[node.char] = currentCode; // Сохранение кода символа
    }

    generateCodes(node.left, currentCode + "0", codes); // Левое поддерево
    generateCodes(node.right, currentCode + "1", codes); // Правое поддерево

    return codes;
}

// Основная функция для кодирования строки
function huffmanEncode(text) {
    const root = buildHuffmanTree(text);
    const codes = generateCodes(root);

    // Кодирование строки
    let encodedString = "";
    for (const char of text) {
        encodedString += codes[char];
    }

    // Вывод результатов
    const uniqueSymbolsCount = Object.keys(codes).length;
    const encodedSizeInBits = encodedString.length;

    console.log(uniqueSymbolsCount, encodedSizeInBits);
    
    for (const char of Object.keys(codes).sort()) {
        console.log(`'${char}': ${codes[char]}`);
    }
    
    console.log(encodedString);
}

const text = "Errare humanum est.";
huffmanEncode(text);
// Время выполнения - 56 ms
// Сложность - O(n log n)