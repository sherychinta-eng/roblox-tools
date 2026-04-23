import * as fs from 'fs';
import * as path from 'path';
import { createLogger, transports, format } from 'winston';

const logDir = 'logs';

// Ensure log directory exists
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const fileTransport = new transports.File({
    filename: path.join(logDir, 'app.log'),
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    maxSize: '20m',
    maxFiles: '14d' // Keep logs for 14 days
});

const consoleTransport = new transports.Console({
    level: 'debug',
    format: format.combine(
        format.colorize(),
        format.simple()
    )
});

const logger = createLogger({
    transports: [fileTransport, consoleTransport],
});

export function setupLogger() {
    return logger;
}