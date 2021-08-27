require('dotenv').config()

class Config {
    constructor() { }

    getApplicationURL() {
        if (process.env.APPLICATION_URL) {
            return process.env.APPLICATION_URL.trim()
        } else {
            throw new Error('ENV setup error: Please define value of APPLICATION_URL in the environment properties.')
        }
    }
}

export default new Config();