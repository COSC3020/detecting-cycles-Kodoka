// Statuses: 0 = unvisited, 1 = visiting, 2 = visited.

function hasCycle(graph)
{
    var vertexSet = new Set();
    var verticeStatus = {};
    var visitedVertexSet = new Set();

    // For each edge, add the unique vertices that it connects to a set.
    for(var i = 0; i < graph.length; i++)
    {
        vertexSet.add(graph[i][0]);
        vertexSet.add(graph[i][1]);
    }

    // Add each unique vertex to key/value set, with an initial status of 0.
    for(var i = 0; i < vertexSet.size; i++)
    {
        verticeStatus[i] = 0;
    }
}
