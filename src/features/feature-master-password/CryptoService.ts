// @ts-ignore
import sha256 from 'crypto-js/sha256';
import {Notice} from "obsidian";

export function getHash(password: string): string {
    return sha256(sha256(password))
}