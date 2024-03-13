import { Access } from "payload/config";

const isUser: Access = ({ req: { user } }) => {

    if (user) {
        return user.roles.includes('user');
    }

    return false;
}

export default isUser;