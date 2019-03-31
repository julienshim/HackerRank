import Foundation

class Difference {
    private var elements = [Int]()
    var maximumDifference: Int
	// Write your code here\
    init(a: [Int]){
        elements = a
        maximumDifference = 0;
    }

    func computeDifference(){
        maximumDifference = elements.max()! - elements.min()!
    }
} // End of Difference class

let n = Int(readLine()!)!
let a = readLine()!.components(separatedBy: " ").map{ Int($0)! }

let d = Difference(a: a)

d.computeDifference()

print(d.maximumDifference)
