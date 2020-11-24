#two.py
import one

print("TOP LEVEL in  two.py")


one.func()

if __name__ == '__main__':
    print("TWO.PY is being run  directly")
else:
    print("TWO.PY is  imported")