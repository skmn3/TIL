# 리스트 []

# 학교에 반별로 10명, 20명, 30명

class1 = 10
class2 = 20
class3 = 30

class4 = [10, 20, 30]
print(class4)

school = ["광주", "대구"]
print(school)

# 광주가 몇 번째 인덱스에 있는가?
print(school.index("광주"))

# 부산이 다음 학교로 들어옴.
school.append("부산")
print(school)

# 대덕이 광주와 대구 사이에 껴보자
school.insert(1, "대덕")
print(school)

# 학교를 뒤에서 꺼냄
print(school.pop())
print(school)

# 같은 학교이 몇 개 있는지 확인
school.append("대덕")
print(school)
print(school.count("대덕"))

# 정렬도 가능
num_list = [5,4,7,8,1,6,2,3]
num_list.sort()
print(num_list)

# 순서 뒤집기 기능
num_list.reverse()
print(num_list)

# 모두 지우기
# num_list.clear()
# print(num_list)

# 다양한 자료형 함께 사용
mix_list = ["학교", 20, True]
print(mix_list)

# list 확장
num_list.extend(mix_list)
print(num_list)