/**
 * SignUpCommand
 * Represents a command to sign up a new user.
 * @class
 * @property {string} username - The username for sign-up.
 * @property {string} password - The password for sign-up.
 * 
 * @example
 * const signUpCommand = new SignUpCommand({ username: 'john_doe', password: 'secret' });
 * console.log(signUpCommand.username); // 'john_doe'
 */
export class SignUpCommand {
    /**
     * Creates an instance of SignUpCommand.
     * @param {Object} params - The parameters for the sign-up command.
     * @param {string} params.username - The username.
     * @param {string} params.password - The password.
     */
    constructor({username, password}) {
        this.username = username;
        this.password = password;
    }
}