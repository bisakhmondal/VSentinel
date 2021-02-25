import * as vscode from 'vscode';
import { MainPanel } from './MainPanel';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vsentinel" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('vsentinel.helloWorld', () => {
			vscode.window.showInformationMessage('Hello from VSentinel!');
			MainPanel.createOrShow(context.extensionUri);
	})
	
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('vsentinel.refresh', () => {
			MainPanel.kill();
			MainPanel.createOrShow(context.extensionUri);
	})
	
	);
}

export function deactivate() {}
