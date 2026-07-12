class TimeMap {
    mapper = new Map();

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const timestamps = this.mapper.get(key) || [];
        timestamps.push([value, timestamp]);

        this.mapper.set(key, timestamps);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const timestamps = this.mapper.get(key);
        if (!timestamps) {
            return "";
        }

        if (timestamps.length === 1) {
            return timestamps[0][1] <= timestamp ? timestamps[0][0] : "";
        }

        let start = 0;
        let end = timestamps.length - 1;

        while (start < end) {
            const midIndex = Math.ceil((end + start)/ 2);

            if (timestamps[midIndex][1] === timestamp) {
                return timestamps[midIndex][0];
            }
            else if (timestamps[midIndex][1] > timestamp) {
                end = midIndex - 1;
            }
            else {
                start = midIndex + 1;
            }
        }

        if (start === end) {
            let index = start;

            if (timestamps[index][1] <= timestamp) {
                return timestamps[index][0];
            }

            if (index - 1 >= 0) {
                return timestamps[index - 1][0];
            }
            else {
                return "";
            }
        }

        return timestamps[end][0];
    }
}
