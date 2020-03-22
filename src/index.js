const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	const arr = [];
	expr = expr.split('');
	for (let i = 0, j = 0; i < expr.length; i++) {
			if (!arr[j]) {arr[j] = expr[i];}
			else {arr[j] += expr[i];}
			if (((i+1)%10===0) && (i!==0)) {j++;}
	}
	for (let i = 0; i<arr.length; i++) {
			let letter = [];
			for (let j = arr[i].length; j>1; j-=2) {
				if (arr[i].slice(j-2, j)==='10') {letter.unshift('.');}
				else if (arr[i].slice(j-2, j)==='11') {letter.unshift('-');}
				else if (arr[i].slice(j-2, j)==='**') {letter.unshift('*');}
			}
			letter = letter.join('');
			if (letter == '*****') {letter = ' ';}
			else {letter = MORSE_TABLE[letter]}
			arr[i] = letter;
	}
	return arr.join('');
}

module.exports = {
    decode
}