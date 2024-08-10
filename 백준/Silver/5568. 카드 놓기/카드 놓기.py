N = int(input())
K = int(input())
#[1,2,12,1]
card_list = []

for i in range(N):
    card_list.append(int(input()))
    
num_set = set()

# 사용가능한 카드 리스트에서 사용할 카드 선택하는 함수
def card_select(selction_num, allow_card_list, current_num):
    if selction_num == 1:
        # 정수 마지막 숫자 추가
        for card in allow_card_list:
            next_num = current_num + str(card)
            num_set.add(next_num)
    else:
        for i in range(len(allow_card_list)):
            next_num = current_num + str(allow_card_list[i])
            remaining_cards = allow_card_list[:]
            remaining_cards.remove(allow_card_list[i])
            card_select(selction_num-1, remaining_cards, next_num)
            
            
# 사용 가능한 카드리스트 갱신 -> 재귀 -> num = 1 되면 재귀 카드 선택하고 그냥 재귀 멈춤

card_select(K, card_list, "")
print(len(num_set))