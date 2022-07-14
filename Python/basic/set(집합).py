# 집합 (set)

# 중복 안됨, 순서 없음
my_set = {1,2,3,3,3}
print(my_set)

Java = {"뽀로로", "크롱", "루피"}
Python = set(["뽀로로", "포비"])

# 교집합
print(Java & Python)
print(Java.intersection(Python))

# 합집합
print(Java | Python)
print(Java.union(Python))

# 차집합
print(Java - Python)
print(Java.difference(Python))

# Increase Developer
Python.add("해리")
print(Python)

Java.remove("크롱")
print(Java)