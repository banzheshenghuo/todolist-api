import crypto from 'crypto'

export function encrypt(password: string) {
    const md5Hash = crypto.createHash('md5')
    md5Hash.update(new Buffer(password, 'utf8'))
    return md5Hash.digest('hex')
}
