from itertools import combinations as combi

# info에 '-'를 포함하여 모든 경우의 수를 만든다.
# 점수를 제외한 info 정보를 key값으로, 점수를 value값으로 해시맵 생성
def solution(infos, query):
    for info in infos:
        info = info.split()
        info_key = info[:-1]
        info_val = int(info[-1])
        # print(info_key, info_val)
        for i in range(5):  # info 원소 4개 -> '-' 포함해서 나타낼 수 있는 경우 총 5가지('-'포함하지 않는 경우 1가지)
            for k in combi(range(4), i):  # '-'가 들어갈 위치를 나타내는 조합
                info_key[k] = '-'

