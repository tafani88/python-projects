list=[3,1,6,2,8]
x = len(list) - 1

i=0
for i in range(x):
    for i in range(x):
        if list [i] > list[i+1]:
            place = list[i]
            list[i] = list[i+1]
            list[i+1] = place
        i += 1
    i = 0
print (list)
