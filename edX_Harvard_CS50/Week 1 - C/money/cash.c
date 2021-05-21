#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    float dollar;
    do {
    dollar=get_float("how much do you owe?\n");
    }
    while (dollar<0);

    int cents = round(dollar *100);
    int quarter=0;
    int dime=0;
    int nickel=0;
    int penny=0;

    while (cents>=25)
    {
        cents -= 25;
        quarter++;
    }

    while (cents>=10)
    {
        cents -= 10;
        dime++;
    }

    while (cents>=5)
    {
        cents -= 5;
        nickel++;
    }

    while (cents>=1)
    {
        cents -= 1;
        penny++;
    }

int total=quarter+dime+nickel+penny;
printf("%i\n",total);
}