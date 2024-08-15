wavelength = int(input())

def print_color(number):
    if 620 <= number <= 780:
        return 'Red'
    elif 590 <= number < 620:
        return 'Orange'
    elif 570 <= number < 590:
        return 'Yellow'
    elif 495 <= number < 570:
        return 'Green'
    elif 450 <= number < 495:
        return 'Blue'
    elif 425 <= number < 450:
        return 'Indigo'
    elif 380 <= number < 425:
        return 'Violet'
    else:
        return 
    
answer = print_color(wavelength)
print(answer)