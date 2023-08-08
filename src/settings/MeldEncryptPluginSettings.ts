import { IFeatureInplaceEncryptSettings } from "../features/feature-inplace-encrypt/IFeatureInplaceEncryptSettings";
import { IFeatureWholeNoteEncryptSettings } from "../features/feature-whole-note-encrypt/IFeatureWholeNoteEncryptSettings";

export interface IMeldEncryptPluginSettings {
	confirmPassword: boolean;
	rememberPassword: boolean;
	rememberPasswordTimeout: number;
	rememberPasswordLevel: string;
	masterPassword?: string | null | undefined;

	featureWholeNoteEncrypt : IFeatureWholeNoteEncryptSettings;
	featureInplaceEncrypt : IFeatureInplaceEncryptSettings;
}

