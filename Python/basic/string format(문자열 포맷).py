# 문자열 포맷

print("a" + "b")
print("c" , "d")

# 방법 1
print("나는 %d살입니다." % 20)
print("나는 %s를 좋아해요" % "Python") # 단어

print("사과는 %c로 시작해요" % "A") # 한 글자
print("나는 %s색과 %s색을 좋아해요" % ("보라","핑크"))

# 방법 2
print("나는 {} 살입니다.".format(20))
print("나는 {}색과 {}색을 좋아해요".format("보라","핑크"))

print("나는 {0}색과 {1}색을 좋아해요".format("보라","핑크"))
print("나는 {1}색과 {0}색을 좋아해요".format("보라","핑크"))

# 방법 3
print("나는 {age}살이며, {color}색을 좋아해요".format(age = 20, color = "연보라"))

# 방법 4 (v 3.6 이상)
age = 20
color = "연보라"

print(f"나는 {age}살이며, {color}색을 좋아해요")
