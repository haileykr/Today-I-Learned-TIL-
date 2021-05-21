#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    long number=0;
    //get the credit card number
    do {
    number=get_long("what's the credit card number?\n");
    }
    while (number<0);

    int number_length=0;
    int checksum=0;

    // printf("Number: %ld\n",number);

    //count the digits
    if (number>0)
    {long temp=number;
        do
        {
            temp = temp/10;
            number_length++;
        }
     while (temp!=0);
    }

    printf("%i digits\n",number_length);

    //calculate the checksum

    //multiply every other digit by 2, starting with the second-to-last digit
    //modulo 10^(1,3,5,7,9,...)
    for (int i=1;i<=number_length;i+=2)
    {
        long temp_number=number/pow(10,i);
        int digit =temp_number % 10;
        checksum = checksum + ((digit*2)%10)+((digit*2/10)%100);

        // printf("Temp_number: %ld\n",temp_number);
        // printf("Digit: %i\n",digit);
        // printf("Checksum: %i\n",checksum);
    }

    for (int j=0;j<number_length;j+=2)
    {
        long temp_number=number/pow(10,j);
        int digit=temp_number % 10;
        checksum = checksum + (digit % 10) + ((digit/10) % 100);
    }

    printf("Checksum: %i\n",checksum);

    if (checksum%10==0)
    {
        //AMEX check
        int a=number/pow(10,13);

        //MASTERCARD check
        int b=number/pow(10,14);

        //VISA check
        int c=number/pow(10,15);
        int c2=number/pow(10,12);

        if(number_length==15 && (a==34 || a==37))
        {
            printf("AMEX\n");
        }

        else if(number_length==16 && (b>50 && b<56))
        {
            printf("MASTERCARD\n");
        }

        else if((number_length==16 && c==4) || (number_length==13 && c2==4))
        {
            printf("VISA\n");
        }
        else
        {
            printf("INVALID\n");
        }
    }
    else
    {
        printf("INVALID\n");
    }
}