/**
 * SignInCommand
 * Represents a command to sign in a user.
 * @class
 * @property {string} username - The username for sign-in.
 * @property {string} password - The password for sign-in.
 * 
 * @example
 * const signInCommand = new SignInCommand({ username: 'john_doe', password: 'secret' });
 * console.log(signInCommand.username); // 'john_doe'
 */
export class SignInCommand {
    /**
     * Creates an instance of SignInCommand.
     * @param {Object} params - The parameters for the sign-in command.
     * @param {string} params.username - The username.
     * @param {string} params.password - The password.
     */
    constructor({username, password}) {
        this.username = username;
        this.password = password;
    }
}