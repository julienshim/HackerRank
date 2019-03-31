import Foundation



guard let N = Int((readLine()?.trimmingCharacters(in: .whitespacesAndNewlines))!)
else { fatalError("Bad input") }

if N % 2 == 1 {
    print("Weird")
} else {
    N >= 6 && N <= 20 ? print("Weird") : print("Not Weird")
}
