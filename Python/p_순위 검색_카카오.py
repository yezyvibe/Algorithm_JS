def solution(info, query):
    infos = [i.split() for i in info]
    queries = []  # 각 원소 8개씩
    for q in query:
        q = q.split()
        for i in range(3):
            q.remove('and')
        queries.append(q)

    res = [0] * len(query)
    for i in range(len(queries)):
        for info_item in infos:
            for k in range(5):
                if queries[i][k] == '-':
                    continue
                elif k == 4:
                    if int(info_item[k]) >= int(queries[i][k]):
                        res[i] += 1
                elif info_item[k] != queries[i][k]:
                    break

    return res


info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150",
        "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200",
         "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100",
         "- and - and - and - 150"]
solution(info, query)
