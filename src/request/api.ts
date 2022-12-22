import request from "./index"
export const getQcCode = (): Promise<QccodeObject> => request.get("/qccode")