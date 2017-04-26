function op(op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

function calculator(poliz) {
    var stack = [];
    poliz = poliz.replace(/[ ]+/g, ' ').split(' ');
    for (let i = 0; i < poliz.length; i++) {
        var c = poliz[i];
        if (/^\d+$/.test(c))
            stack.push(parseInt(c));
        else
            if (stack.length > 1 && /^[\-+*\/]+$/.test(c))
                stack[stack.length - 2] = op(c, stack[stack.length - 2], stack.pop());
            else
                return `ERROR ${c}`
    }
    if (stack.length > 0)
        return stack[0]
}



console.log(calculator("234 345 456 + + 5 /"), "ans 207");

