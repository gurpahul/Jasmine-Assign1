describe("determine the positive numbers in array" , function(){
    it("When the numbers are all positive, it should return the sum of all the numbers" , function(){
        expect(positiveSum([7,8,6])).toBe(21);
    })

    it("When there is a negative number in the provided array, it should not be included as part of the sum" , function(){
        expect(positiveSum([8,-9,3])).toBe(11);
    })

    it("When the provided array is empty, it should return a sum of 0" , function(){
        expect(positiveSum([])).toBe(0);
    })

    it("When the provided array is all negative numbers, it should return a sum of 0" , function(){
        expect(positiveSum([-9,-3,-2,-1])).toBe(0);
    })
})

describe("return true or false when a number is divisible by divisor", function(){
    it("When a number is divisible by both of the provided divisors, it should return true.", function(){
        expect(isDivisible(28,4,7)).toBe(true);
    })

    it("When the number is smaller then both the provided divisors, it should return false.", function(){
        expect(isDivisible(9,99,999)).toBe(false);
    })

    it("When the number is not divisible by only one of the provided divisors it should return false", function(){
        expect(isDivisible(200,10,11)).toBe(false);
    })

    it("When the number is not divisible by any of the provided divisors it should return false.", function(){
        expect(isDivisible(72,5,15)).toBe(false);
    })
})

describe("Characters in the string", function(){
    it("if there is only 1 characters in the string, it returns itself", function(){
        expect(solution("g")).toBe("g");
    })

    it("there are multiple characters in the string it returns the string, reversed.", function(){
        expect(solution("g,u,r,p")).toBe("p,r,u,g");
    })

    it("there are no characters in the string, it returns empty string.", function(){
        expect(solution("")).toBe("");
    })

})

describe("returns an array with elements inserted", function(){
    it("accepts numbers only in parameter", function(){
        expect(reverseSeq(5)).toEqual([5,4,3,2,1]);
    })

    it("allways returns a array with elements pushed in array", function(){
        expect(reverseSeq()).toEqual([]);
    })

    it("allways loop through each element", function(){
        expect(reverseSeq(-4)).toEqual([]);
    })
})