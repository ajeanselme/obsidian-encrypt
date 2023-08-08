# Obsidian Encrypt Plugin Fork

This fork adds a "master password" feature.
You can save a unique password that will be hashed and saved in the settings. You can then use this password to encrypt/decrypt your notes.
This removes the inconvenience of having to re-enter your password every time you start Obsidian or want to create a new encrypted note.

## ⚠️ WARNING
Even if your password is hashed, this feature significantly reduces the original plugin security.

**_Do not include the .obsidian folder in your backups_**

The hash (which will be the final master password used), is stored in plaintext in your files. If your .obsidian folder get compromised, then the attacker will be able to decrypt every file encrypted with the master password.
