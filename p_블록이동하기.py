from collections import deque

def solution(board):
    q = deque([(0, 0, 0, 1, 1)]) # 좌x, 좌y, 우x, 우y
    moves = [(-1, 0, -1, 0), (1, 0, 1, 0), (0, 0, -1, -1), (0, 0, 1, -1), (-1, 1, 0, 0), (1, 1, 0, 0),(0, 1, 0, 1),(0, -1, 0, -1)] # 총 6가지 이동 방법
    visit = set([(0, 0, 0, 1)])
    n = len(board)
    while q:
      a, b, c, d, cnt = q.popleft()
      if (a == n - 1 and b == n - 1) or (c == n - 1 and d == n - 1):

        return cnt

      for k in range(8):
        x, y, z, l = moves[k]
        a1 = a + x
        a2 = b + y
        b1 = c + z
        b2 = d + l


        if not (0 <= a1 < n and 0 <= a2 < n and 0 <= b1 < n and 0 <= b2 < n): # 범위 체크
          continue

        if not (0 <= board[a1][a2] < n and 0 <= board[b1][b2] < n):
          continue

        if board[a1][a2] == 1 or board[b1][b2] == 1: # 벽인지 확인
          continue
        
        # 원래 좌표 기준으로 대각선이 벽인지 확인하기
        if k == 2 and board[c-1][d] == 1: # 좌를 기준으로 위로 90도 회전한 경우
          continue

        elif k == 3 and board[c+1][d] == 1:
          continue

        elif k == 4 and board[a-1][b] == 1:
          continue

        elif k == 5 and board[a+1][b] == 1:
          continue
        
        elif (a1, a2, b1, b2) in visit: #방문했는지 체크
          continue

        q.append((a1, a2, b1, b2, cnt + 1)) #이동할 수 있는 경우 추가
        visit.add((a1, a2, b1, b2))



a = [[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]
print(solution(a))

