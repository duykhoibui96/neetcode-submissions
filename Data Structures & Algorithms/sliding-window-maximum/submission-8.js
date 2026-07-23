class Solution {
    heap = [];

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            const parentIndex = this.getParentIndex(i);

            if (this.heap[parentIndex][0] >= this.heap[i][0]) {
                break;
            }

            this.swap(parentIndex, i);

            i = parentIndex;
        }
    }

    bubbleDown() {
        let i = 0;

        while (i < this.heap.length) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            let largest = i;
            if (left < this.heap.length && this.heap[left][0] > this.heap[i][0]) largest = left;
            if (right < this.heap.length && this.heap[right][0] > this.heap[largest][0]) largest = right;

            if (largest === i) {
                break;
            }

            this.swap(i, largest);

            i = largest;
        }
    }

    add(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    getMax() {
        return this.heap[0];
    }

    extractMax() {
        const max = this.getMax();
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return max;
    }

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (nums.length <= k) {
            return [Math.max(...nums)];
        }

        let result = [];

        let index = 0;

        while (index < nums.length) {
            while (this.heap.length < k) {
                this.add([nums[index], index]);
                index++;
            }

            const max = this.getMax();
            result.push(max[0]);

            const removeIndex = index - k;
            while (this.heap.length && this.getMax()[1] <= removeIndex) {
                this.extractMax();
            }


            this.add([nums[index], index]);
            index++;
        }

        result.push(this.getMax()[0]);

        return result;
    }
}