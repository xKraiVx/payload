import { Access } from "payload/config";

const isAdmin: Access = ({ req: { user } }) => {

    if (user) {
        return user.roles.includes('admin');
    }

    return false;
}

export default isAdmin;