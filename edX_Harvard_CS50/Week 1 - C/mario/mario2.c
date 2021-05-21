#include <stdio.h>
#include <cs50.h>

int main(void)
{
// get the height
    int i;
    do {
        i=get_int("Height: \n");
    }
    while (i>8 || i<1);

// draw the pyramid
    for (int j=1;j<=i;j++)
    {
        int k;
        int z;

        for (k=0;k<i-j;k++)
        { printf(" ");
        }

        for (z=1;z<=j;z++)
        {
            printf("#");
        }
        printf(" ");
        for (z=1;z<=j;z++)
        {
            printf("#");
        }
        printf("\n");
    }
}