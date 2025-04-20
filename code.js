// Statuses: 0 = unvisited, 1 = visiting, 2 = visited.

function hasCycle(graph)
{
    var vertexSet = new Set();
    var vertexArray = [];
    var vertexStatus = [];
    var adjacencyArray = [];

    // For each edge, add the unique vertices that it connects to a set.
    for(var i = 0; i < graph.length; i++)
    {
        vertexSet.add(graph[i][0]);
        vertexSet.add(graph[i][1]);
    }

    // Add each unique vertex to our array.
    vertexArray = [...vertexSet];

    // For each element in vertexArray, add an initial status of 0 to the
    // corresponding index of the status array.
    vertexStatus = Array(vertexArray.length).fill(0);

    // For each element in vertexArray, add an empty array to our
    // adjacencyArray.
    for(var i = 0; i < vertexArray.length; i++)
    {
        adjacencyArray[i] = [];
    }

    // For each edge...
    for(var i = 0; i < graph.length; i++)
    {
        // Find each node's neighbors.
        adjacencyArray[vertexArray.indexOf(graph[i][0])].push(graph[i][1]);
        adjacencyArray[vertexArray.indexOf(graph[i][1])].push(graph[i][0]);
    }

    // For each node...
    for(var nodeIndex = 0; nodeIndex < vertexArray.length; nodeIndex++)
    {
        // Skip a node if it isn't unvisited.
        if(vertexStatus[nodeIndex] != 0)
        {
            continue;
        }

        // Queue of nodes to explore: nodeIndex, parentIndex. Inital parent -1.
        var queue = [[nodeIndex, -1]];

        // Node we're currently visiting.
        vertexStatus[nodeIndex] = 1;

        // While there are unvisited nodes in queue...
        while(queue.length > 0)
        {
            var curNodeAndParent = queue.shift();
            var curNode = curNodeAndParent[0];
            var curParent = curNodeAndParent[1];

            // Fr each node neighboring curNode...
            for(var neighborIndex = 0; neighborIndex < adjacencyArray[curNode].length; neighborIndex++)
            {
                var neighbor = adjacencyArray[curNode][neighborIndex];

                // If the neighbor is unvisited, add it to queue, with curNode as it's parent,
                // set status to visiting.
                if(vertexStatus[neighbor] == 0)
                {
                    vertexStatus[neighbor] = 1;
                    queue.push([neighbor, curNode]);
                }
                // If the neighbor has been previously seen, and is not curNode's parent...
                else if(neighbor != curParent)
                {
                    // Beep boop, am robit, cycle detected.
                    return true;
                }
            }

            // Done with curNode, set status to visited.
            vertexStatus[curNode] = 2;
        }
    }

    // No cycles found.
    return false;
}