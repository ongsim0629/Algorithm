x, y, w, h = [int(x) for x in input().split(" ")]

diff_x = (x-w if x-w > 0 else w-x)
diff_y = (y-h if y-h > 0 else h-y)

distanc_from_zero = min(x,y)
distanc_from_vertex = min(diff_x,diff_y)

answer = min(distanc_from_vertex, distanc_from_zero)

print(answer)
        