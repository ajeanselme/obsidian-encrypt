import {App, Modal, Notice, Setting, TextComponent} from 'obsidian';
import { UiHelper } from 'src/services/UiHelper';

export default class PasswordModal extends Modal {
	
	// input

	// output
	public resultConfirmed = false;
	public resultPassword?: string | null = null;

	constructor(
		app: App,
	) {
		super(app);
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.empty();

		this.invalidate();

		let password = '';
		let confirmPass = '';

		new Setting(contentEl).setHeading().setName("Set Master Password");

		/* Main password input*/

		UiHelper.buildPasswordSetting({
			container: contentEl,
			name: 'Master Password:',
			placeholder: '',
			initialValue: password,
			autoFocus: true,
			onChangeCallback: (value) => {
				password = value;
				this.invalidate();
			},
			onEnterCallback: (value) =>{
				password = value;
				this.invalidate();
				
				if (password.length > 0){
					if (sConfirmPassword.settingEl.isShown()){
						//tcConfirmPassword.inputEl.focus();
						const elInp = sConfirmPassword.components.find( (bc) => bc instanceof TextComponent );
						if ( elInp instanceof TextComponent ){
							elInp.inputEl.focus();
						}
					}else if( validate() ){
						this.close();
					}
				}
			}
		});

		/* End Main password input row */

		/* Confirm password input row */
		const sConfirmPassword = UiHelper.buildPasswordSetting({
			container : contentEl,
			name: 'Confirm Password:',
			onChangeCallback: (value) => {
				confirmPass = value;
				this.invalidate();
			},
		});
		
		/* End Confirm password input row */

		new Setting(contentEl).addButton( cb=>{
			cb
				.setButtonText('Confirm')
				.onClick( evt =>{
					if (validate()){
						this.close();
					}
				})
			;
		});

		const validate = () : boolean => {
			this.invalidate();

			sConfirmPassword.setDesc('');

				if (password != confirmPass){
					// passwords don't match
					sConfirmPassword.setDesc('Passwords don\'t match');
					return false;
				}


			this.resultConfirmed = true;
			this.resultPassword = password;


			new Notice('New Master Password set!', 2000);

			return true;
		}

	}

	private invalidate(){
		this.resultConfirmed = false;
		this.resultPassword = null;
	}

}