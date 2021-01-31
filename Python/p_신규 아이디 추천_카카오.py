def solution(new_id):
    chk_letter = ['-', '_']
    new_id = new_id.lower()  # 소문자 치환
    dot_cnt = 0
    res = ''

    for item in new_id:
        if item.isdigit():
            res += item
        elif item.isalpha():
            res += item
        elif item in chk_letter:
            res += item
        elif item == '.':
            if len(res) != 0:
                if res[-1] != '.':
                    res += '.'
            else:
                res += '.'

    # 처음끝 마침표 확인
    if len(res) != 0:
        if res[0] == '.':
            res = res[1:]
    if len(res) != 0:
        if res[-1] == '.':
            res = res[:-1]
    # 빈 문자열인지 확인
    if res == '':
        res += 'a'
    # 문자열 길이 15 초과인지 확인
    if len(res) >= 16:
        res = res[:15]
        if res[-1] == '.':
            res = res[:-1]
    # 길이 2이하이면 마지막 문자 추가
    res_last = res[-1]
    while len(res) <= 2:
        res += res_last

    return res
