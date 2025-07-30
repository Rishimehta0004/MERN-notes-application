import ratelimit from "../controller/config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit(req.ip); // Use unique key per user (e.g., IP address)
        if(!success) return res.status(429).send("Too many requests");
        next() // Limit to 10 requests per 20 seconds
    } catch (error) {
        console.error("Rate limit error:", error);
       
        next(error);
    }
};

export default rateLimiter;