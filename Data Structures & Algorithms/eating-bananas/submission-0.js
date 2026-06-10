class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1
        let max = Math.max(...piles)
        let answer = max

        while (min <= max) {
            let mid = Math.floor((max + min) / 2)

            let hours = 0;
            piles.forEach((pile) => {
                hours += Math.ceil(pile / mid);
            })

            if (hours <= h) {
                answer = mid
                max = mid - 1;
            }
            else {
                min = mid + 1;
            }
        }

        return answer
    }
}
