N = int(input())
word_set = set()

# 단어 셋에 단어 입력 순서대로 삽입 (중복 허락 X)
for i in range(N):
    word_set.add(input())

# key를 이용한 sorted
sorted_word_list = sorted( list(word_set), key = lambda x : (len(x),x) )

for word in sorted_word_list:
    print(word)