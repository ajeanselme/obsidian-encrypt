// @ts-ignore
import sha256 from 'crypto-js/sha256';
import {Notice} from "obsidian";

export function getHash(password: string): string {
    new Notice("hashing " + password)
    return sha256(sha256(password))
}