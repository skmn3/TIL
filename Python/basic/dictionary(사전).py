# 사전

combination = {5: "아기", 100:"뽀로로"}
print(combination[5])
print(combination[100])

print(combination.get(5))
# print(combination[3]) # 오류 발생 Key Error
print(combination.get(3)) # None 출력
print(combination.get(3, "사용 가능")) #  사용가능 출력

print(3 in combination) # False 출력
print(5 in combination) # True 출력


school = {"A-5": "아기초등학교", "B-100":"뽀로로고등학교"}
print(school["A-5"])
print(school["B-100"])

# New School
print(school)
school["A-5"] = "크롱중학교"
school["C-196"] = "루피대학교"
print(school)

# Deleted School
del school["A-5"]
print(school)

# Key 출력
print(school.keys())

# Value 출력
print(school.values())

# key와 values 모두 출력
print(school.items())

# clear school data
school.clear()
print(school)