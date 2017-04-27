class Link {
    constructor(n1, n2, cost) {
        this.n1 = n1;
        this.n2 = n2;
        this.cost = cost;
    }
    toString() { return this.n1.num + ">" + this.n2.num + " (" + this.cost + ")"; }
    far (near) { return (near.num == this.n2.num) ? this.n1 : this.n2; }
}

class Node {
    constructor(num) {
        this.num = num;
        this.links = [];
    }
    add_link(l) {
        this.links.push(l);
    }
}

class Path {
    constructor(prev, node, cost) {
        this.node = node;
        this.num = node.num;
        this.cost = cost;
        this.prev = prev;
    }
    elements  () {
        var a = this.prev ? this.prev.elements() : [];
        a.push(this.num);
        return a;
    }
    toString () {
        return (this.prev ? this.prev.toString() + ' > ' : "") + this.num + " (" + this.cost + ")";
    }
}

class Graph { 
    constructor(input_arr) {
        this.nodes = {};
        while (input_arr.length) {
            var edge = input_arr.shift();
            var num1 = edge[0];
            if (!this.nodes[num1]) 
                this.nodes[num1] = new Node(num1);
            var num2 = edge[1];
            if (!this.nodes[num2])
                this.nodes[num2] = new Node(num2);
            var l = new Link(this.nodes[num1], this.nodes[num2], edge[2]);
            this.nodes[num1].add_link(l);
            if (num1 != num2)
                this.nodes[num2].add_link(l);
        }
        return;
    }


    insert_sorted(list, item) {
        for (let i = 0; i < list.length; ++i) {
            if (list[i].cost > item.cost) { list.splice(i, 0, item); return list; }
        }
        list.push(item);
        return list;
    }


    findPath(from_num, to_num) {
        if (!this.nodes[from_num]) {
            console.log("wrong from"); return;
        }
        if (!this.nodes[to_num]) {
            console.log("wrong to"); return;
        }
        var from = this.nodes[from_num];
        var to = this.nodes[to_num];

        var visited = {},
            queue = [new Path(null, from, 0)],
            cur;
        while (cur = queue.shift()) {
            if (cur.node === to) {return cur; }
            for (var i = 0; i < cur.node.links.length; ++i) {
                var link = cur.node.links[i],
                    other = link.far(cur.node);
                if (visited[other.num]) { continue; }
                this.insert_sorted(queue, new Path(cur, other, link.cost + cur.cost));
            }
            visited[cur.node.num] = true;
        }
        console.log('error');
        return;
    }
}

var graph = new Graph([[0, 3, 5], [1, 3, 11], [2, 3, 56], [4, 3, 77], [5, 4, 89]]);
graph.findPath(0, 5).toString();
