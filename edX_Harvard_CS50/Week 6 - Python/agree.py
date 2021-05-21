import re
from cs50 import get_string

s=get_string("Agree?:")
if re.search("yes|y",s, re.IGNORECASE):
    print("yes")
elif re.search("^n(o)?$",s.lower()):
    print("no")
elif s.lower() in ["maybe","umm"]:
    print("maybe")

