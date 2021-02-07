function kangaroo(x1, v1, x2, v2) { 
    return (x1 - x2) % (v2 - v1) === 0 && v2 < v1 ? 'YES' : 'NO';

}
