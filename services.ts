import { createLogger, format, transports } from 'winston';
import { Logger } from 'winston';
import * as path from 'path';
import { promises as fs } from 'fs';

const logDir = path.join(__dirname, 'logs');

// Ensure log directory exists
async function ensureLogDir() {
    try {
        await fs.access(logDir);
    } catch (error) {
        await fs.mkdir(logDir);
    }
}

// Setup logger with rotation
async function setupLogger(): Promise<Logger> {
    await ensureLogDir();

    const logger = createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            new transports.File({
                filename: path.join(logDir, 'combined.log'),
                maxsize: 5000000, // 5 MB
                maxFiles: '5d'
            }),
            new transports.Console()
        ]
    });

    logger.info('Logger initialized');
    return logger;
}

export { setupLogger };