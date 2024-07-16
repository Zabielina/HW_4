import fs from "fs"

fs.readFile('yourfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const letterCount = data.replace(/[^a-zA-Zа-яА-Я]/g, '').length; 
    const spaceCount = (data.match(/ /g) || []).length; 
    const lineCount = data.split('\n').length; 

    console.log(`Кількість літер: ${letterCount}`);
    console.log(`Кількість пробілів: ${spaceCount}`);
    console.log(`Кількість рядків: ${lineCount}`);
});






fs.readFile('yourfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const reversedContent = data.split('').reverse().join('');
    console.log(reversedContent);
});






fs.readFile('yourfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const words = data.split(/\s+/); 
    const everySecondWord = words.filter((_, index) => index % 2 !== 0).join(' '); 
    console.log(everySecondWord);
});
