import heapq


def dijkstra(adj, num, s, e):
    heap = []
    heapq.heappush(heap, [0, s])
    INF = float('inf')
    dist = [INF] * (num + 1)
    dist[s] = 0

    while heap:
        cost, node = heapq.heappop(heap)
        if dist[node] < cost:
            continue
        for n, c in adj[node]:
            c += cost
            if c < dist[n]:
                dist[n] = c
                heapq.heappush(heap, [c, n])
    return dist[e]


def solution(num, s, a, b, fares):
    adj = [[] for _ in range(num + 1)]  # 인접행렬
    for x, y, c in fares:
        adj[x].append([y, c])
        adj[y].append([x, c])
    res = dijkstra(adj, num, s, a) + dijkstra(adj, num, s, b)  # (1)시작점에서 a, b까지 각자 따로 가는 경우
    for i in range(1, num + 1):
        if s != i:
            # (2)특정 지점까지 이동 후, 각자 목적지까지 가는 경우
            # (1)과(2) 비용 중 최소값 구하기
            res = min(res, dijkstra(adj, num, s, i) + dijkstra(adj, num, i, a) + dijkstra(adj, num, i, b))
    return res


n, s, a, b = 6, 4, 6, 2
fares = [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]
solution(n, s, a, b, fares)
