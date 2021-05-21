#include <stdio.h>
#include <cs50.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    //check null command-line arguments
    if (argc!=2)
    {   printf("Usage: ./substitution key\n");
        exit(1);
    }

    //if only alphabets
    int check=0;
    int length=strlen(argv[1]);
    for (int i=0;i<length;i++)
    {   if(isalpha(argv[1][i]))
        {}
        else
        {
            check++;
        }

        //change all to be uppercase
        if(islower(argv[1][i]))
        {argv[1][i]-=32;
        }
    }

     //if duplicate letters, exit immediately
    for (int k=0;k<length;k++)
    {
        for (int w=k+1;w<length-k;w++)
        {
            if (argv[1][k]==argv[1][w])
            {
                printf("Usage: ./substitution key\n");
                exit(1);
            }
        }
    }


    //if shorter or greater than 26 alphabets
    if ((check==0) && (length!=26))
    {
        printf("Key must contain 26 characters\n");
        exit(1);
    }


    //if invalid keys
    if (check!=0)
    {   printf("Usage: ./substitution key\n");
        exit(1);
    }

    //enter logic
    string plaintext=get_string("plaintext: ");
    string ciphertext=plaintext;

    int length2=strlen(ciphertext);
    for (int j=0;j<length2;j++)
    {
        if (isalpha(ciphertext[j]))
        {
            if (ciphertext[j]<91)//uppercase
            {
                ciphertext[j]=argv[1][(int)ciphertext[j]%65];
            }
            else//lowercase
            {
                ciphertext[j]=argv[1][(int)ciphertext[j]%97]+32;
            }
        }
    }

    //print the ciphertext
    printf("ciphertext: %s\n", ciphertext);
    exit(0);
}