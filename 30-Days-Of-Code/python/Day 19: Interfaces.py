class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        sum = 1;
        for i in range(2, n+1):
            if n % i == 0:
                sum += i
        return sum
