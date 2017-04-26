class Node {
    constructor(num, next = null) {
        this.num = num;
        if (next === null)
            this.next_node_nums = [];
        else
            this.next_node_nums = [next];
    }
}

class Graph {
    constructor(arr_of_edges) {
        this.nodes = {}
        var nums;
        for (let i = 0; i < arr_of_edges.length; i++) { 
            nums = arr_of_edges[i];
            if (this.nodes[nums[0]]) {
                this.nodes[nums[0]].next_node_nums.push(nums[1]);
                this.nodes[nums[0]].next_node_nums.sort();
            }
            else
                this.nodes[nums[0]] = new Node(nums[0], nums[1]);
            if (!this.nodes[nums[1]])
                this.nodes[nums[1]] = new Node(nums[1]);
        }
    }

    DFS(start = 0) {
        var stack = [];
        var visited = [];
        stack.push(start);
        visited[start] = true;
        while (stack.length) {
            let cur_num = stack.pop();
            console.log(cur_num);
            if (this.nodes[cur_num].next_node_nums.length)
                for (let i = (this.nodes[cur_num].next_node_nums.length - 1); i >= 0; i--) {
                    let num = this.nodes[cur_num].next_node_nums[i];
                    if (!visited[num]) {
                        stack.push(num);
                        visited[num] = true;
                    }
                    else {
                        let ind = stack.indexOf(num);
                        if (ind != -1) {
                            stack.splice(ind, 1);
                            stack.push(num);
                        }
                    }
                }
        }
        return;
    }

    BFS (start = 0) {
        var queue = [];
        var visited = [];
        queue.push(start);
        console.log(start);
        visited[start] = true;
        while (queue.length) {
            let cur_num = queue.shift();
            if (this.nodes[cur_num].next_node_nums.length)
                for (let i = 0; i < this.nodes[cur_num].next_node_nums.length; i++) {
                    let num = this.nodes[cur_num].next_node_nums[i];
                    if (!visited[num]) {
                        queue.push(num);
                        visited[num] = true;
                        console.log(num);
                    }
                }
        }
        return null;
    }



}
edges = [];
edges.push([[0, 1], [0, 5], [1, 3], [3, 4], [0, 4], [3, 2], [1, 4], [2, 1]]);
edges.push([[0, 1], [1, 3], [3, 2], [3, 5], [2, 4], [5, 6] ]);
edges.push([[3, 0], [3, 1], [3, 2], [3, 4], [4, 5]]);
console.log('============  0  ============');
graph = new Graph(edges[0]);
console.log('============  DFS  ============');
graph.DFS();
console.log('============  BFS  ============');
graph.BFS();
console.log('============  1  ============');
graph = new Graph(edges[1]);
console.log('============  DFS  ============');
graph.DFS(1);
console.log('============  BFS  ============');
graph.BFS();
console.log('============  2  ============');
graph = new Graph(edges[2]);
console.log('============  DFS  ============');
graph.DFS(3);
console.log('============  BFS  ============');
graph.BFS(3);
