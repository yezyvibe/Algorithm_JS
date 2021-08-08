from collections import defaultdict
from itertools import combinations as combi


def solution(orders, course):
    answer = []
    for course_cnt in course:
        menu_candidate = defaultdict(int)
        for order in orders:
            for item in combi(order, course_cnt):
                item = list(item)
                item.sort()
                tmp = ''.join(item)
                menu_candidate[tmp] += 1

        max_v = 2
        res = []
        for menu in menu_candidate:
            tmp = menu_candidate[menu]
            if max_v < tmp:
                res = [menu]
                max_v = tmp
            elif max_v == tmp:
                res.append(menu)
        answer += res
    answer.sort()
    return answer


orders = ["XYZ", "XWY", "WXA"]
course = [2, 3, 4]
solution(orders, course)
