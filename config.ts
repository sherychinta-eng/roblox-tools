import { createLogger, format, transports } from 'winston';
import { rotateFile } from 'winston-daily-rotate-file';

const logTransport = new rotateFile({
    filename: 'logs/%DATE%-results.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: format.combine(
        format.timestamp(),
        format.json()
    )
});

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.simple()
    ),
    transports: [
        logTransport,
        new transports.Console()
    ],
});

export default logger;
