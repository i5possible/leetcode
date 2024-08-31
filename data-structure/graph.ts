type Vertex = {
    id: number;
};

type WeightedEdge = {
    from: number;
    to: number;
    weight: number;
};

type DirectedGraph = {
    vertices: Vertex[];
    edges: WeightedEdge[];
};

type UndirectedGraph = {
    vertices: Vertex[];
    edges: WeightedEdge[];
};

type AdjacencyMatrix = number[][];

type AdjacencyList = {
    [key: number]: number[];
};

class Graph {
    vertices: Vertex[];
    edges: WeightedEdge[];

    constructor(vertices: Vertex[], edges: WeightedEdge[]) {
        this.vertices = vertices;
        this.edges = edges;
    }

    addVertex(vertex: Vertex): void {
        this.vertices.push(vertex);
    }

    addEdge(edge: WeightedEdge): void {
        this.edges.push(edge);
    }

    getAdjacencyMatrix(): AdjacencyMatrix {
        const matrix: AdjacencyMatrix = [];
        for (let i = 0; i < this.vertices.length; i++) {
            matrix[i] = [];
            for (let j = 0; j < this.vertices.length; j++) {
                matrix[i][j] = 0;
            }
        }
        this.edges.forEach(edge => {
            matrix[edge.from][edge.to] = edge.weight;
        });
        return matrix;
    }

    getAdjacencyList(): AdjacencyList {
        const list: AdjacencyList = {};
        this.edges.forEach(edge => {
            if (!list[edge.from]) {
                list[edge.from] = [];
            }
            list[edge.from].push(edge.to);
        });
        return list;
    }

    getInDegree(vertex: number): number {
        let inDegree = 0;
        this.edges.forEach(edge => {
            if (edge.to === vertex) {
                inDegree++;
            }
        });
        return inDegree;
    }

    getOutDegree(vertex: number): number {
        let outDegree = 0;
        this.edges.forEach(edge => {
            if (edge.from === vertex) {
                outDegree++;
            }
        });
        return outDegree;
    }

    static fromAdjacencyMatrix(matrix: AdjacencyMatrix): Graph {
        const vertices: Vertex[] = [];
        for (let i = 0; i < matrix.length; i++) {
            vertices.push({ id: i });
        }
        const edges: WeightedEdge[] = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] !== 0) {
                    edges.push({ from: i, to: j, weight: matrix[i][j] });
                }
            }
        }
        return new Graph(vertices, edges);
    }

    static fromAdjacencyList(list: AdjacencyList): Graph {
        const vertices: Vertex[] = [];
        for (let vertex in list) {
            vertices.push({ id: Number(vertex) });
        }
        const edges: WeightedEdge[] = [];
        for (let vertex in list) {
            list[vertex].forEach(neighbor => {
                edges.push({ from: Number(vertex), to: neighbor, weight: 1 });
            });
        }
        return new Graph(vertices, edges);
    }
}

export default Graph;