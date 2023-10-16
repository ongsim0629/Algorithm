#define _CRT_SECURE_NO_WARNINGS_
#include<stdio.h>

int main() {
	// 수의 개수 n과 n개의 수를 담을 리스트 선언
	int n, list[1000] = {0};
	int tmp;

	// 수의 개수 입력 받고, list에 입력 받은 값들 저장
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		scanf("%d", &list[i]);
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n - 1; j++) {
			if (list[j] > list[j+1]) {
				tmp = list[j];
				list[j] = list[j + 1];
				list[j+1] = tmp;
			}
		}
	}

	// 출력
	for (int i = 0; i < n; i++) {
		printf("%d\n", list[i]);
	}

	return 0;
}