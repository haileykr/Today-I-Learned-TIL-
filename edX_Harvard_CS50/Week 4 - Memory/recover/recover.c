#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>
#include <stdint.h>
typedef uint8_t BYTE;

bool is_start_new_jpg(BYTE buffer[]);

int main(int argc, char *argv[])
{
    //require input
    if (argc!=2)
        {
            printf("Usage: ./recover filename\n");
            return 1;
        }

    //file opens card.raw
    FILE *file =fopen(argv[1], "r");

    //if card.raw is null
    if (file==NULL)
    {
        printf("The file cannot be open\n");
        return 1;
    }

    //define the memory block
    BYTE buffer[512];
    int file_index=0;

    //intitilize have_found_first_jpg
    bool have_found_first_jpg = false;

    //define outfile to write the jpeg to
    FILE *outfile;

    //do these while the buffer is not empty
    while (fread(buffer, 512, 1, file)!=0)
    {
        if (is_start_new_jpg(buffer)) //return true if the first four bytes represent jpeg
        {
            if (!have_found_first_jpg)  //if the boolean is false
                have_found_first_jpg=true;  //make it true
            else    //if the boolean is set to true -> close the file that is being already written to
                fclose(outfile);

            //make a new file
            char filename[8]; // ###.jpg \0 all 8 bytes in total
            sprintf(filename, "%03i.jpg", file_index++);

            outfile=fopen(filename,"w"); //if such a file does not exist, it is created
            if (outfile==NULL)
                return 1;
            fwrite(buffer,512,1,outfile);
        }
        else if (have_found_first_jpg) //if the new jpg has not been identified yet
        {
            //keep on writing the previous file
            fwrite(buffer, 512,1,outfile);
        }
    }
    fclose(outfile);
    fclose(file);
    }

bool is_start_new_jpg(BYTE buffer[])
{
    return buffer[0]==0xff && buffer[1]==0xd8 && buffer[2]==0xff & (buffer[3]&0xf0)==0xe0;

}