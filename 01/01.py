def prepare_gifts(gifts):
    return sorted(set(gifts))

gifts1 = [3, 1, 2, 3, 4, 2, 5];
 
preparedGifts1 = prepare_gifts(gifts1);
print(preparedGifts1); # [1, 2, 3, 4, 5]

gifts2 = [6, 5, 5, 5, 5];
preparedGifts2 = prepare_gifts(gifts2);
print(preparedGifts2); # [5, 6]

gifts3 = [];
preparedGifts3 = prepare_gifts(gifts3);
print(preparedGifts3); # []
