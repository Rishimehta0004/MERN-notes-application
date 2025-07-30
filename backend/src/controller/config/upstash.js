import {Ratelimit} from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import fetch from "node-fetch";
import dotenv from "dotenv";

// Add fetch to global scope for Upstash
global.fetch = fetch;

dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5,"10 s"), // 10 requests every 20 seconds
    analytics: true,
    prefix: "@upstash/ratelimit",
});

export default ratelimit;