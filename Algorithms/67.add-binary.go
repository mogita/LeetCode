package main

import (
	"fmt"
	"strconv"
	"strings"
)

func addBinary(a string, b string) string {
	ret := []string{}

	// suppose a is longer than or the same length of b
	long := a
	short := b
	// but if b is longer than a
	if len(a) < len(b) {
		long = b
		short = a
	}
	longArr := strings.Split(long, "")
	shortArr := strings.Split(short, "")

	// pad the short if not the same length
	for len(shortArr) < len(longArr) {
		shortArr = append([]string{"0"}, shortArr...)
	}

	longIntArr := []int{}
	shortIntArr := []int{}
	for _, s := range longArr {
		t, _ := strconv.Atoi(s)
		longIntArr = append(longIntArr, t)
	}
	for _, s := range shortArr {
		t, _ := strconv.Atoi(s)
		shortIntArr = append(shortIntArr, t)
	}

	carry := 0
	for i := len(longIntArr) - 1; i >= 0; i-- {
		p := longIntArr[i]
		q := shortIntArr[i]
		carryCache := 0
		sum := p + q

		if sum > 1 {
			carryCache += sum - 1
			sum = 0
		}

		sum += carry
		carry = 0
		if sum > 1 {
			carryCache += sum - 1
			sum = 0
		}

		carry = carryCache

		ret = append([]string{strconv.Itoa(sum)}, ret...)
		fmt.Println(p, q, sum, carry)
	}
	if carry > 0 {
		ret = append([]string{"1"}, ret...)
	}

	return strings.Join(ret, "")
}

func main() {
	a := "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
	b := "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
	ansr := "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
	res := addBinary(a, b)
	fmt.Println(res)
	fmt.Println(ansr)
	fmt.Println(res == ansr)

}
