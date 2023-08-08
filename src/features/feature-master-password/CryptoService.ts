// @ts-ignore
import CryptoJS from 'crypto-js';
import {Notice} from "obsidian";

export function getHash(password: string): string {
    return CryptoJS.SHA256(CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)).toString(CryptoJS.enc.Hex)
}