from sys import exit

names=["EMMA",'RODRIGO',"BRIAN","DAVID"]

find=input("name?: ")
if find in names:
    print("Found")
    exit(0)
else:
    print("Not Found")  
    exit(1)
