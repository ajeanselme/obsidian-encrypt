import { createHash } from "crypto"

export function getHash(password: string): string {
    return createHash('sha256')
        .update(password)
        .update(createHash('sha256').update(password, 'utf8').digest('hex'))
        .digest('hex');
}