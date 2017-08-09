print("can you find one number in this set?")
x = int(input())
list = [1,2,3,4,5,6,7,8,9]
start = 0
end = len(list) + 1
while (start + 1 < end):
    midpoint = int((start + end)/2)
    print ("start: ",start, "midp: ", midpoint, "end: ", end)
    if x > midpoint:
        start = midpoint
    elif x < midpoint:
        end = midpoint
    else:
        print("found")
        break
