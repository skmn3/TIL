# 슬라이싱

jumin = "991111-1234567"

print("성별 : " + jumin[7])
print("연 : " + jumin[0:2]) # 0부터 2 직전까지 (0,1)
print("월 : " + jumin[2:4]) # 2부터 4 직전까지 (2,3)
print("일 : " + jumin[4:6])

print("생년월일 : " + jumin[0:6])
print("생년월일 : " + jumin[:6]) # 처음부터 6번째 인덱스 직전까지

print("뒤 7자리 : " + jumin[7:14])
print("뒤 7자리 : " + jumin[7:]) # 7번째 인덱스부터  끝까지

print("뒤 7자리 (뒤에부터) : " + jumin[-7:])