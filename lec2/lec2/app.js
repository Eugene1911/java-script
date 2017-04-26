

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class List {
    constructor(number) {
        switch (typeof (number)) {
            case 'string':
                this.string_to_list(number);
                return;
            case 'number':
                this.head = new Node(number);
                return;
            default:
                this.head = null;
                return;
        }
    }


    string_to_list(str_num) {
        this.head = null
        for (let i = str_num.length - 1; i >= 0; i--) {
            this.add(parseInt(str_num[i]));
        }
        return;
    }



    add(val, pos) {
        let node = new Node(val);
        let find = this._inner_find(pos);
        if (find.prev != null) {
            find.prev.next = node;
        } else {
            this.head = node;
        }
        node.next = find.cur;
    }

    del(pos) {
        let find = this._inner_find(pos);
        if (find.prev != null) {
            if (find.cur != null) {
                find.prev.next = find.cur.next;
                return find.cur.val
            } else {
                find.prev.next = null
            }
        } else {
            if (find.cur != null) {
                this.head = find.cur.next;
                return find.cur.val
            } else {
                this.head - null
            }
        }
        return undefined;
    }

    find(val) {
        if (typeof val === "undefined") return null;
        let cur = this.head;
        while (cur) {
            if (val == cur.val) return cur;
            cur = cur.next;
        }
        return null
    }


    write(nl) {
        let cur = this.head;
        process.stdout.write("( ");
        while (cur) {
            process.stdout.write(`${cur.val}`);
            cur = cur.next
            if (cur != null)
                process.stdout.write(" -> ")
        }
        process.stdout.write(" )");
        if (nl) process.stdout.write(nl);
    }

    _inner_find(pos) {
        let cur = this.head;
        let prev = null;
        let cur_pos = 0;
        while (cur) {
            if (cur_pos == pos) {
                break;
            }
            cur_pos++;
            prev = cur;
            cur = cur.next;
        }
        return { 'prev': prev, 'cur': cur }
    }
}

function sum(a, b) {
    let result = new List();
    let unit = 0;
    while (a.head != null || b.head != null) {
        let num1 = a.del(0);
        let num2 = b.del(0);
        if (typeof num1 === 'undefined') num1 = 0;
        if (typeof num2 === 'undefined') num2 = 0;
        let r = unit + num1 + num2;
        unit = r > 9 ? parseInt(r / 10) : 0
        result.add(r % 10)
    }
    if (unit) result.add(unit);
    return result;
}

test = new List("123456");
test.write();
console.log('');
test.add(0, 3);
test.write();
console.log('');
test.del(2);
test.write();
console.log('');
console.log("pos of 6: ", test.find(6));

console.log("========= 2 =========");
console.log("operands: ");
op1 = new List("342");
op2 = new List("465");
op1.write();
console.log('');
op2.write();
console.log('');
test2 = sum(op1, op2);
console.log("sum: ");
test2.write();