const STATES = {
    CLOSED: "CLOSED",
    OPEN: "OPEN",
    HALF_OPEN: "HALF_OPEN"
};

class MLCircuitBreaker {

    constructor(options = {}) {

        this.failureThreshold = options.failureThreshold || 3;
        this.resetTimeout = options.resetTimeout || 30000;

        this.failureCount = 0;
        this.state = STATES.CLOSED;
        this.lastFailureTime = null;
    }

    canRequest() {

        if (this.state === STATES.CLOSED) {
            return true;
        }

        if (this.state === STATES.OPEN) {

            const elapsed =
                Date.now() - this.lastFailureTime;

            if (elapsed >= this.resetTimeout) {

                this.state = STATES.HALF_OPEN;

                console.log(
                    "[ML CIRCUIT] OPEN → HALF_OPEN"
                );

                return true;
            }

            return false;
        }

        // HALF_OPEN
        return true;
    }

    recordSuccess() {

        this.failureCount = 0;

        if (this.state !== STATES.CLOSED) {

            console.log(
                `[ML CIRCUIT] ${this.state} → CLOSED`
            );
        }

        this.state = STATES.CLOSED;
        this.lastFailureTime = null;
    }

    recordFailure() {

        this.failureCount += 1;
        this.lastFailureTime = Date.now();

        console.log(
            `[ML CIRCUIT] Failure ${this.failureCount}/${this.failureThreshold}`
        );

        if (
            this.failureCount >= this.failureThreshold &&
            this.state !== STATES.OPEN
        ) {

            this.state = STATES.OPEN;

            console.log(
                "[ML CIRCUIT] CLOSED → OPEN"
            );
        }
    }

    getState() {

        return {
            state: this.state,
            failureCount: this.failureCount
        };
    }
}

module.exports = {
    MLCircuitBreaker,
    STATES
};