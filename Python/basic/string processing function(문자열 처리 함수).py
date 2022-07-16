# 문자열 처리 함수

python = "Python is Amazing"

print(python.lower()) # 소무자로 출력
print(python.upper()) # 대문자로 출력

print(python[0].isupper()) # 0번째 인덱스가 대문자인지 확인
print(python[0].islower()) # 0번째 인덱스가 소문자인지 확인

print(len(python)) # 문자열 길이 출력

print(python.replace("Python", "JavaScript")) # 바꿔주기

index = python.index("n") # n의 인덱스 값 출력
print(index)

index = python.index("n", index + 1)
print(index)

print(python.find("n"))

print(python.find("Javascript")) # -1출력 Javascript 단어가 없음

# print(python.index("Javascript")) # 오류 출력 단어 없음

print(python.count("n")) # n을 사용한 개수