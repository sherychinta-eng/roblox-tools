import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';

const logDir = path.join(__dirname, 'logs');

// Create logs directory if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const transport = new winston.transports.File({
    filename: path.join(logDir, 'combined.log'),
    maxsize: 5 * 1024 * 1024, // 5 MB
    maxFiles: '14d', // Keep logs for 14 days
    tailable: true,
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    transports: [transport],
});

export default logger;
