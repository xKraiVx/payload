import { CollectionBeforeValidateHook } from "payload/types"

import { v4 as uuidv4 } from 'uuid';

export const useCreateUuid: CollectionBeforeValidateHook = async ({
    data
}) => {

    return { ...data, id: uuidv4() }
}