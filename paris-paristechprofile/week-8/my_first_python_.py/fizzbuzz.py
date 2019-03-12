count = 1
while count < 100:
    if count % 5 == 0 and count % 3 == 0:
        print("fizzbuzz")
    elif count % 5 == 0:
        print("fizz")
    elif count % 3 == 0:
        print("fizz")
    else:
        print(count)
    count = count + 1