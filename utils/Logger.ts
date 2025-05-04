// utils/logger.ts
import * as fs from 'fs';
import * as path from 'path';

export class Logger {
    private logStream: fs.WriteStream;

    constructor(testName: string) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `${testName.replace(/\s+/g, '_')}_${timestamp}.log`;
        const logDir = path.join(__dirname, '..', 'logs');

        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }

        const filePath = path.join(logDir, fileName);
        this.logStream = fs.createWriteStream(filePath, { flags: 'a' });
    }

    info(message: string) {
        const time = new Date().toISOString();
        this.logStream.write(`[INFO] [${time}] ${message}\n`);
    }

    error(message: string) {
        const time = new Date().toISOString();
        this.logStream.write(`[ERROR] [${time}] ${message}\n`);
    }

    close() {
        this.logStream.end();
    }
}
