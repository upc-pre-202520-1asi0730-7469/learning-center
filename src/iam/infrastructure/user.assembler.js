import {User} from "../domain/user.entity.js";

export class UserAssembler {
    static toEntityFromResource(resource) {
        return new User({...resource});
    }
    
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data["users"];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}