#include <stdio.h>
#include <cs50.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    //check null command-line arguments
    if (argc!=2)
    {   printf("Usage: ./ceaser key\n");
        exit(1);
    }

    //if only numbers
    int check=0;
    for (int i=0;i<strlen(argv[1]);i++)
    {   if(isalpha(argv[1][i]))
        {
            check++;
        }
    }


    //no error message if meets criteria
    if ((atoi(argv[1])<=0) || (check!=0))
    {
        printf("Usage: ./ceaser key\n");
        exit(1);
    }

    //enter logic
    string plaintext=get_string("plaintext: ");
    string ciphertext=plaintext;

    for (int j=0;j<strlen(ciphertext);j++)
    {
        if (isalpha(ciphertext[j]))
        {
            if (ciphertext[j]<91)//uppercase
            {
                ciphertext[j]=((int)ciphertext[j] + atoi(argv[1]) -65) % 26 + 65;
            }
            else//lowercase
            {
                ciphertext[j]=((int)ciphertext[j] + atoi(argv[1]) -97) % 26 + 97;
            }
        }

    }

    //print the ciphertext
    printf("ciphertext: %s\n", ciphertext);
}