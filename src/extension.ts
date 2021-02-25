import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vsentinel" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('vsentinel.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from VSentinel!');
	})
	
	);
}

export function deactivate() {}
