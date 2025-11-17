/**
 * User Entity
 * Represents a user in the IAM domain.
 * @class
 * @property {Number|null} id - The unique identifier of the user.
 * @property {string} username - The username of the user.
 * 
 * @example
 * const user = new User({ id: 1, username: 'john_doe' });
 * console.log(user.id); // 1
 * console.log(user.username); // 'john_doe'
 */
export class User {
    /**
     * Creates an instance of User.
     * @param {Object} params - The parameters for the user.
     * @param {Number|null} params.id - The unique identifier of the user.
     * @param {string} params.username - The username of the user.
     */
    constructor({id, username}) {
        this.id = id;
        this.username = username;
    }
}