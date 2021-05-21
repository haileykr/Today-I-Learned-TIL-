#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <math.h>

int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{
    string read = get_string("Text: ");
    // printf("%i letter(s)\n",count_letters(read));
    // printf("%i word(s)\n", count_words(read));
    // printf("%i sentence(s)\n", count_sentences(read));

    float L=((float)count_letters(read))/(count_words(read))*100;
    float S=((float)count_sentences(read))/(count_words(read))*100;

    int grade=round(0.0588*L-0.296*S-15.8);

    if (grade<1)
    {
        printf("Before Grade 1\n");
    }
    else if (grade>16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", grade);
    }
}

int count_letters(string text)
{
    int count=0;
    for (int i=0, n=strlen(text);i<n;i++)
    {
        if ((65<=text[i] && text[i]<=90) || (97<=text[i] && text[i]<=122))
        {
            count++;
        }
    }
    return count;
}

int count_words(string text)
{
    int count2=0;
    for (int i=0, n=strlen(text);i<n;i++)
    {
        if (32==text[i])
        {
            count2++;
        }
    }
    return count2+1;
}

int count_sentences(string text)
{
    int count3=0;
    for (int i=0, n=strlen(text);i<n;i++)
    {
        if (((text[i]== 33) || (text[i]==46) ||(text[i]==63)))
        {
            count3++;
        }
    }
    return count3;
}