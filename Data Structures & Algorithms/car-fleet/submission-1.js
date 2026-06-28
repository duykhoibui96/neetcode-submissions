class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const descSortedPosition = position.map((pos, index) => [pos, speed[index]]).sort((a, b) => b[0] - a[0]);
        const timeStack = [];

        descSortedPosition.forEach(([pos, speed]) => {
            const timeToReachTarget = (target - pos) / speed;

            if (!timeStack.length || timeToReachTarget > timeStack[timeStack.length - 1]) {
                timeStack.push(timeToReachTarget);
            }
        })

        return timeStack.length;
    }
}
