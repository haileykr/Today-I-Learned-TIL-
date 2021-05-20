#include <stdio.h>

#include <string.h>

#include <math.h>

// puts와 fputs difference
void question_one(void){
    char *str = "Simple String";
    printf("1, puts test----\n");
    puts(str);
    puts("So Simple String");

    printf("2, fputs test----\n"); // fputs에서는 개행이 자동으로 안 됨
    fputs(str, stdout);
    printf("\n");
    fputs("So Simple String", stdout);
    printf("\n");

    printf("3, end of main---- \n" );
}
    
// 입력 버퍼의 비움 예제 실습!!
void question_two(void){
    void ClearLineFromReadBuffer(void){
        while (getchar() != '\n');
    }

    char perID[7];
    char name[10];

    fputs("6자리 입력: ", stdout);
    fgets(perID, sizeof(perID), stdin);
    ClearLineFromReadBuffer();

    fputs("이름 입력: ", stdout);
    fgets(name, sizeof(name), stdin);

    printf("주민번호 : %s \n", perID);
    printf("이름: %s \n", name);
}

// 문자열 길이를 반환하는 함수 strlen 예제 실습
void question_three(void){
    void RemoveBSN(char str[]){
        int len = strlen(str);
        str[len-1] = 0;
    }

    char str[100];

    printf("문자열 입력: ");
    fgets(str, sizeof(str), stdin);
    printf("길이: %d, 내용: %s \n", strlen(str), str);

    RemoveBSN(str);
    printf("길이: %d, 내용: %s \n", strlen(str), str);
}

// 문자열을 복사하는 함수들 strcpy, strncpy 예제 실습
void question_four(void){
    char str1[20] = "1234567890";
    char str2[20];
    char str3[5];

    /**** case 1 ****/
    strcpy(str2, str1);
    puts(str2);

    /**** case 2 ****/
    strncpy(str3, str1, sizeof(str3));
    puts(str3);

    /**** case 3 ****/
    strncpy(str3, str1, sizeof(str3) - 1);
    str3[sizeof(str3) - 1] = 0;
    puts(str3);
}


// 문자열을 비교하는 함수들 strcmp, strncmp 예제 실습
void question_five(void)
{
    char str1[20];
    char str2[20];
    printf("문자열 입력 1: ");
    scanf("%s", str1);
    printf("문자열 입력 2: ");
    scanf("%s", str2);
    
    if (!strcmp(str1, str2))
    {
        puts("두 문자열은 완벽히 동일합니다.");
    }
    else
    {
        puts("두 문자열은 동일하지 않습니다");
        

        if (!strncmp(str1, str2, 3))
            puts("그러나 앞 세 글자는 동일합니다.");
    }    
}

// 구조체 변수의 선언과 접근 예제 실습
void question_six(void){
    struct point // 구조체 point의 정의
    {
        int xpos;
        int ypos;
    };

    struct point pos1, pos2;
    double distance;
    fputs("point1 pos: ", stdout);
    scanf("%d %d", &pos1.xpos, &pos1.ypos);

    fputs("point2 pos: ", stdout);
    scanf("%d %d", &pos2.xpos, &pos2.ypos);
    /* 두 점 간의 거리 계산 공식 */
    distance = sqrt((double)(pos1.xpos - pos2.xpos) * (pos1.xpos - pos2.xpos)
        + (pos1.ypos - pos2.ypos ) *(pos1.ypos - pos2.ypos));
    printf("두 점 거리는 %g 입니다. \n", distance);
    
}

//구조체 변수의 초기화 예제 실습
void question_seven(void){
    struct point
    {
        int xpos;
        int ypos;
    };

    struct person
    {
        char name[20];
        char phoneNum[20];
        int age;
    };

    struct point pos = {10, 20};
    struct person man = {"이승기", "010-1212-0001", 21};
    printf("%d %d\n", pos.xpos, pos.ypos);
    printf("%s %s %d\n", man.name, man.phoneNum, man.age);
}
    
int main(void){
    question_one();
    question_two();
    // question_three();
    // question_four();
    // question_five();
    // question_six();
    // question_seven();

    return 0;
}