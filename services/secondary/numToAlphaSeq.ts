const numToAlphaSeq = (num: number): string => {
    let alpha = "";
    while (true) {
        let rem = Math.trunc(num / 26);
        let div = num % 26;
        alpha = String.fromCharCode(div + 'A'.charCodeAt(0)) + alpha;
        if (rem === 0)
            return alpha;
        rem -= 1;
    }
};

export {numToAlphaSeq};